import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const socialMedia = [
  {
    icon: <IoLogoInstagram size={30} />,
    link: 'https://www.instagram.com/juani_llabe/',
  },
  {
    icon: <IoLogoYoutube size={30} />,
    link: 'https://www.youtube.com/',
  },
  {
    icon: <IoLogoLinkedin size={30} />,
    link: 'https://www.linkedin.com/feed/',
  },
  {
    icon: <IoLogoTwitter size={30} />,
    link: 'https://twitter.com/home?lang=es',
  },
];

const pageLinks = [
  {
    label: 'FAQ',
    link: '/faq',
  },
  {
    label: 'Contact Us',
    link: 'mailto:webmaster@example.com',
  },
  {
    label: 'Policies & Terms',
    link: '/legal',
  },
];

const Footer = () => {
  return (
    <footer className='w-full bg-dark-bg-1'>
      <section className='flex gap-6 border-b border-dark-border-1 py-4 px-4 lg:px-36 lg:py-6'>
        <div className='w-full'>
          <h2 className='mb-2 text-dark-text-1 font-semibold'>
            Our Social Media
          </h2>
          <ul className='flex gap-3'>
            {socialMedia.map((element, index) => (
              <li key={index}>
                <Link
                  className='text-dark-text-2 md:hover:text-dark-text-1 transition-colors'
                  to={element.link}
                  target='_blank'
                >
                  {element.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full'>
          <ul>
            {pageLinks.map(element => (
              <li key={element.label}>
                <Link
                  to={element.link}
                  className='text-dark-text-2 md:hover:text-dark-text-1 transition-colors'
                >
                  {element.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='border-b border-dark-border-1 py-4 px-4 lg:px-36 lg:py-6'>
        <h2 className='text-dark-text-1 font-semibold'>About Us</h2>
        <p className='text-dark-text-2'>
          Are you looking for a new job or a career change? Then you are in the
          right place, with [app name] you can search and find your ideal job
          and talk directly to your future employers. Do you need new staff for
          your business? Find the perfect workers for your needs.{' '}
          <span className='text-dark-text-1'>Let's start swiping!</span>
        </p>
      </section>
      <section className='py-4 px-4 lg:px-36 lg:py-6'>
        <p className='text-end text-dark-text-2 text-sm'>
          © {new Date().getFullYear()} Compass Copyright.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
