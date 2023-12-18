import { ClipLoader } from 'react-spinners';
import { useUpdateUser } from './useUpdateUser';

const UpdateImgModal = ({ onClose }) => {
  const { updateUser, isUpdating } = useUpdateUser();

  const handleUploadd = image => {
    //Set new image
    const formData = new FormData();
    formData.append('profileImage', image);

    updateUser(formData, {
      onSuccess: () => onClose(),
    });
  };

  return (
    <section className='flex flex-col'>
      <h1 className='text-lg lg:text-xl text-center text-light-text-2 dark:text-dark-text-2 mb-6'>
        Update your profile image
      </h1>
      <label
        htmlFor='update-image'
        className='w-full text-center font-semibold border-y border-light-border-1 dark:border-dark-border-1 py-3 lg:py-4 cursor-pointer active:bg-light-bg-2 dark:active:bg-dark-bg-2 lg:text-xl'
      >
        {isUpdating ? (
          <ClipLoader size={20} color='gray' />
        ) : (
          'Upload New Image'
        )}
      </label>
      <input
        disabled={isUpdating}
        type='file'
        id='update-image'
        className='hidden'
        accept='image/*'
        onChange={e => handleUploadd(e.target.files[0])}
      />
      <button
        aria-label='cancel (close)'
        className='w-full font-semibold text-red-500 pt-3 lg:text-xl lg:pt-4'
        onClick={onClose}
      >
        Cancel
      </button>
    </section>
  );
};

export default UpdateImgModal;
