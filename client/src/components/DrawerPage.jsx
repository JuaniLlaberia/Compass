import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();

const Drawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const open = id => setIsOpen(id);
  const close = () => setIsOpen('');

  return (
    <DrawerContext.Provider value={{ isOpen, open, close }}>
      <>{children}</>
    </DrawerContext.Provider>
  );
};

const Page = ({ children, title, pageId }) => {
  const { isOpen, close } = useContext(DrawerContext);

  return (
    <main
      className={`fixed z-[100] bottom-0 left-0 pb-12 h-[100vh] w-full bg-light-bg-1 dark:bg-dark-bg-1 transition-transform duration-500 ${
        isOpen === pageId ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <header className='bg-light-bg-2 dark:bg-dark-bg-2 border-b border-light-border-1 dark:border-dark-border-1 p-3 flex justify-center items-center'>
        <h1 className='text-xl text-light-text-1 dark:text-dark-text-1 font-semibold capitalize'>
          {title}
        </h1>
        <button
          onClick={close}
          className='absolute right-2.5 text-secondary-1 font-semibold'
        >
          Done
        </button>
      </header>
      <section className='p-3 overflow-x-hidden overflow-y-auto h-full'>
        {children}
      </section>
    </main>
  );
};

const Button = ({ opensId, icon, label }) => {
  const { open } = useContext(DrawerContext);

  return (
    <div className='flex flex-col items-center gap-1 w-20'>
      <button
        onClick={() => open(opensId)}
        className='p-2.5 rounded-full text-3xl text-secondary-1 bg-light-bg-1 dark:bg-dark-bg-2 active:bg-light-bg-2 border border-light-border-1 dark:border-dark-border-1 shadow-md'
      >
        {icon}
      </button>
      <p className='text-sm text-light-text-2 dark:text-dark-text-2 font-semibold'>
        {label}
      </p>
    </div>
  );
};

Drawer.Page = Page;
Drawer.Button = Button;

export default Drawer;
