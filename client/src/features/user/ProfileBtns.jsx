import { IoSettingsSharp, IoPencilSharp, IoImage } from 'react-icons/io5';
import Drawer from '../../components/DrawerPage';
import UserEdit from './UserEdit';
import UserSettings from '../settings/UserSettings';
import Modal from '../../components/Modal';
import UpdateImgModal from './UpdateImgModal';

const ProfileBtns = () => {
  return (
    <Drawer>
      <Modal>
        <ul className='flex justify-between mt-6'>
          <li>
            <Modal.Open opens='update-image'>
              <div className='flex flex-col items-center gap-1 w-20'>
                <button className='p-2.5 rounded-full text-3xl text-secondary-1 bg-light-bg-1 dark:bg-dark-bg-2 active:bg-light-bg-2 border border-light-border-1 dark:border-dark-border-1 shadow-md'>
                  <IoImage />
                </button>
                <p className='text-sm text-light-text-2 dark:text-dark-text-2 font-semibold'>
                  My image
                </p>
              </div>
            </Modal.Open>
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

        <Modal.Window windowName='update-image'>
          <UpdateImgModal />
        </Modal.Window>
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
      </Modal>
    </Drawer>
  );
};

export default ProfileBtns;
