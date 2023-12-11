import {
  IoSettingsOutline,
  IoLogOutOutline,
  IoHelpCircleOutline,
  IoPersonOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import Drawer from '../../components/DrawerPage';
import UserEdit from './UserEdit';
import UserSettings from '../settings/UserSettings';
import Modal from '../../components/Modal';
import { useLogout } from '../auth/useLogout';
import PacksModal from '../payments/PacksModal';

const ProfileBtns = () => {
  const { logout } = useLogout();

  return (
    <Drawer>
      <Modal>
        <ul>
          <Modal.Open opens='edit-profile'>
            <li className='flex items-center gap-4 px-6 mb-5 text-light-text-1 dark:text-dark-text-1'>
              <IoPersonOutline size={25} />
              <h6 className='text-lg font-semibold'>Edit Profile</h6>
            </li>
          </Modal.Open>
          <Drawer.Open opensId='settings'>
            <li className='flex items-center gap-4 px-6 mb-5 text-light-text-1 dark:text-dark-text-1'>
              <IoSettingsOutline size={25} />
              <h6 className='text-lg font-semibold'>Account Settings</h6>
            </li>
          </Drawer.Open>
          <Modal.Open opens='likes-package'>
            <li className='flex items-center gap-4 px-6 mb-5 text-light-text-1 dark:text-dark-text-1'>
              <IoHeartOutline size={25} />
              <h6 className='text-lg font-semibold '>Likes Packages</h6>
            </li>
          </Modal.Open>
          <Modal.Open opens='support-modal'>
            <li className='flex items-center gap-4 px-6 mb-5 text-light-text-1 dark:text-dark-text-1'>
              <IoHelpCircleOutline size={25} />
              <h6 className='text-lg font-semibold'>Support</h6>
            </li>
          </Modal.Open>
          <li
            className='flex items-center gap-4 px-6 mb-5 text-light-text-1 dark:text-dark-text-1'
            onClick={logout}
          >
            <IoLogOutOutline size={25} />
            <h6 className='text-lg font-semibold '>Log Out</h6>
          </li>
        </ul>

        <Modal.Window windowName='edit-profile'>
          <UserEdit />
        </Modal.Window>
        <Modal.Window windowName='likes-package'>
          <PacksModal />
        </Modal.Window>
        <Modal.Window windowName='support-modal'>
          <p>SUPPORT</p>
        </Modal.Window>

        <Drawer.Page
          title='Settings'
          pageId='settings'
        >
          <UserSettings />
        </Drawer.Page>
      </Modal>
    </Drawer>
  );
};

export default ProfileBtns;
