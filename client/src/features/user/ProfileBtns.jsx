import {
  IoSettingsSharp,
  IoPencilSharp,
  IoStatsChartSharp,
} from 'react-icons/io5';
import Drawer from '../../components/DrawerPage';
import UserEdit from './UserEdit';
import UserSettings from '../settings/UserSettings';

const ProfileBtns = () => {
  return (
    <Drawer>
      <ul className='flex justify-between mt-6'>
        <li>
          <Drawer.Button
            icon={<IoStatsChartSharp />}
            label='Statistics'
            opensId='statistics'
          />
        </li>
        <li>
          <Drawer.Button
            icon={<IoPencilSharp />}
            label='Edit profile'
            opensId='edit'
          />
        </li>
        <li>
          <Drawer.Button
            icon={<IoSettingsSharp />}
            label='Settings'
            opensId='settings'
          />
        </li>
      </ul>

      <Drawer.Page
        title='Statistics'
        pageId='statistics'
      ></Drawer.Page>
      <Drawer.Page
        title='Edit profile'
        pageId='edit'
      >
        <UserEdit />
      </Drawer.Page>
      <Drawer.Page
        title='Settings'
        pageId='settings'
      >
        <UserSettings />
      </Drawer.Page>
    </Drawer>
  );
};

export default ProfileBtns;
