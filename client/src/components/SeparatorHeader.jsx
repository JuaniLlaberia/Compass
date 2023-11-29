const SeparatorHeader = ({ children }) => {
  return (
    <h2 className='font-semibold text-light-text-1 dark:text-dark-text-1 border-b border-light-border-1 dark:border-dark-border-1 py-1 mb-8'>
      {children}
    </h2>
  );
};

export default SeparatorHeader;
