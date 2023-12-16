import { useState } from 'react';
import defaultImg from '/default.jpg';

const UserImgForm = ({ register, error }) => {
  const [previewImg, setPreviewImage] = useState(defaultImg);

  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Upload your photo
      </h1>
      <p className='mb-6 text-sm lg:text-base text-light-text-2 dark:text-dark-text-2'>
        This image will be part of you profile and card, that other users can
        see. You can change it whenever you like.
      </p>
      <h2 className='mb-4 font-semibold text-light-text-1 lg:text-lg'>
        Preview
      </h2>
      <label
        htmlFor='profileImg'
        className='flex justify-center items-end gap-6'
      >
        <img
          alt='user profile photo preview'
          src={previewImg}
          className='h-40 w-40 lg:h-60 lg:w-60 bg-[gray] rounded-full object-cover'
        />
        <img
          alt='user profile photo preview (small)'
          src={previewImg}
          className='h-20 w-20 lg:h-32 lg:w-32 bg-[gray] rounded-full object-cover'
        />
      </label>
      <input
        {...register('image', {
          required: 'Please upload you image',
          onChange: e =>
            setPreviewImage(URL.createObjectURL(e.target.files[0])),
        })}
        type='file'
        className='hidden'
        id='profileImg'
      />
      {error && <p className='px-2 text-red-500'>{error.message}</p>}
    </>
  );
};

export default UserImgForm;
