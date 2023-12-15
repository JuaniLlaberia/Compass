import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  IoLanguageOutline,
  IoShieldOutline,
  IoMoonOutline,
  IoExtensionPuzzleOutline,
  IoHeartOutline,
  IoClose,
} from 'react-icons/io5';
import SettingsItem from './SettingsItem';
import SettingsBtns from './SettingsBtns';

const settingsBtns = [
  {
    icon: <IoMoonOutline size={25} />,
    label: 'Theme',
    link: '/settings/theme',
    redirects: false,
  },
  {
    icon: <IoHeartOutline size={25} />,
    label: 'Likes Information',
    link: '/settings/likes',
    redirects: false,
  },
  {
    icon: <IoLanguageOutline size={25} />,
    label: 'Language',
    link: '/settings/languages',
    redirects: false,
  },
  {
    icon: <IoShieldOutline size={25} />,
    label: 'Legal & Security',
    link: '/legal',
    redirects: true,
  },
  {
    icon: <IoExtensionPuzzleOutline size={25} />,
    label: 'Cookies Policy',
    link: '/cookies-policy',
    redirects: true,
  },
];

const UserSettings = () => {
  const [mobileWindowOpen, setMobileWindowOpen] = useState(false);

  return (
    <section className='flex w-full h-full'>
      <aside className='relative h-full w-full md:max-w-[450px] md:border-r md:border-light-border-1 dark:border-dark-border-1'>
        <h1 className='p-3 font-semibold text-xl text-light-text-1 dark:text-dark-text-1'>
          Settings
        </h1>
        <ul>
          {settingsBtns.map(btn => (
            <SettingsItem
              handleClick={() => setMobileWindowOpen(true)}
              key={btn.label}
              icon={btn.icon}
              label={btn.label}
              link={btn.link}
              redirects={btn.redirects}
            />
          ))}
        </ul>
        <SettingsBtns />
      </aside>
      <section
        className={`${
          mobileWindowOpen ? 'fixed' : 'hidden'
        } h-full w-full md:relative bg-light-bg-1 dark:bg-dark-bg-1 p-3 md:block md:max-w-[1000px] md:px-12 xl:px-32`}
      >
        <Outlet />
        <Link
          onClick={() => setMobileWindowOpen(false)}
          className='text-light-text-1 dark:text-dark-text-1 absolute top-2.5 right-4 md:hidden'
          to='/settings'
        >
          <IoClose size={23} />
        </Link>
      </section>
    </section>
  );
};

export default UserSettings;
