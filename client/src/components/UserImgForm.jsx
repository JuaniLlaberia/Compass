import React from 'react';

const UserImgForm = ({ register, error }) => {
  return (
    <>
      <h1 className='text-light-text-1 dark:text-dark-text-1 text-2xl mb-1 font-semibold'>
        Upload your photo
      </h1>
      <p className='mb-6 text-sm text-light-text-2 dark:text-dark-text-2'>
        This image will be part of you profile and card, that other users can
        see. You can change it whenever you like.
      </p>
      <h2 className='mb-4'>Preview</h2>
      <label
        htmlFor='profileImg'
        className='flex justify-center items-end gap-6 mb-16'
      >
        <div className='h-40 w-40 bg-[gray] rounded-full'></div>
        <div className='h-20 w-20 bg-[gray] rounded-full'></div>
      </label>
      <input
        {...register('image', { required: 'Please upload you image' })}
        type='file'
        className='hidden'
        id='profileImg'
      />
    </>
  );
};

export default UserImgForm;
