import { createContext, useContext, useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';

const ExpandContext = createContext();

const Expand = ({ children }) => {
  const [open, setOpen] = useState('');

  const openExpand = id => setOpen(id);
  const closeExpand = () => setOpen('');

  return (
    <ExpandContext.Provider value={{ open, openExpand, closeExpand }}>
      {children}
    </ExpandContext.Provider>
  );
};

const Wrapper = ({ children }) => {
  return <div>{children}</div>;
};

const Opener = ({ title, opens }) => {
  const { openExpand, open, closeExpand } = useContext(ExpandContext);

  return (
    <>
      <div
        onClick={open === opens ? closeExpand : () => openExpand(opens)}
        className='w-full flex items-center justify-between border border-dark-border-1 rounded-lg px-2 py-2 text-dark-1 lg:p-3 lg:text-xl xl:text-2xl cursor-pointer'
      >
        <h2 className='text-dark-text-1 font-semibold px-2 lg:text-lg'>
          {title}
        </h2>
        <IoChevronUp
          className={`text-dark-text-2 ${
            open !== opens ? 'rotate-180' : ''
          } transition-all duration-300`}
        />
      </div>
    </>
  );
};

const Body = ({ children, id }) => {
  const { open } = useContext(ExpandContext);

  return (
    <div
      className={`h-0 overflow-hidden cursor-pointer ${
        open === id
          ? 'h-auto py-1.5 mt-1 px-2 border border-dark-border-1 rounded-lg transition-all duration-300'
          : ''
      }`}
    >
      {children}
    </div>
  );
};

Expand.Wrapper = Wrapper;
Expand.Opener = Opener;
Expand.Body = Body;

export default Expand;
