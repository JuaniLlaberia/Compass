import {
  IoEyeOffSharp,
  IoEyeSharp,
  IoTrashBinSharp,
  IoExitOutline,
} from 'react-icons/io5';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import DeleteModal from './DeleteModal';
import { useLogout } from '../auth/useLogout';
import { useUpdateUser } from '../user/useUpdateUser';
import { useAuthContext } from '../../context/AuthContext';
import { useDeleteUser } from '../user/useDeleteUser';

const SettingsBtns = () => {
  const { user } = useAuthContext();
  const { logout, isLoading } = useLogout();
  const { updateUser, isUpdating } = useUpdateUser();
  const { deleteAccount, isDeleting } = useDeleteUser();

  const toggleHideUser = (e, action) => {
    e.preventDefault();
    updateUser({ hideUser: action });
  };

  return (
    <section className='absolute bottom-2 w-full flex flex-col gap-2'>
      <Button
        onClick={logout}
        isLoading={isLoading}
      >
        <span className='flex items-center gap-2'>
          <IoExitOutline size={22} /> Log out
        </span>
      </Button>

      {user.data.hideUser ? (
        <Button
          onClick={e => toggleHideUser(e, false)}
          isLoading={isUpdating}
        >
          <span className='flex items-center gap-2'>
            <IoEyeSharp size={22} />
            Show account
          </span>
        </Button>
      ) : (
        <Button
          onClick={e => toggleHideUser(e, true)}
          isLoading={isUpdating}
        >
          <span className='flex items-center gap-2'>
            <IoEyeOffSharp size={22} />
            Hide account
          </span>
        </Button>
      )}

      <Modal>
        <Modal.Open opens='delete-modal'>
          <Button type='danger'>
            <span className='flex items-center gap-2'>
              <IoTrashBinSharp size={22} />
              Delete account
            </span>
          </Button>
        </Modal.Open>
        <Modal.Window windowName='delete-modal'>
          <DeleteModal
            deleteAccount={deleteAccount}
            isDeleting={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </section>
  );
};

export default SettingsBtns;
