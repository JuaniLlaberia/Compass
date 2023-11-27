import Button from '../../components/Button';

const DeleteModal = ({ deleteAccount, isDeleting }) => {
  return (
    <>
      <h1 className='font-semibold'>
        Are you sure you want to delete your account?
      </h1>
      <p className='mt-2'>
        This action is irreversible, once you delete your account you can't get
        it back. Remember that you can <b>hide your account</b> instead!
      </p>
      <div className='flex justify-end mt-5'>
        <Button
          type='danger'
          isLoading={isDeleting}
          onClick={deleteAccount}
        >
          Delete account
        </Button>
      </div>
    </>
  );
};

export default DeleteModal;
