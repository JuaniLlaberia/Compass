import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { useClickOutside } from '../hooks/useClickOutside';

const SelectSingle = ({ options, onChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useClickOutside(() => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const selectOption = option => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className='relative mt-3 cursor-pointer'
      ref={ref}
    >
      <div
        className={`w-full border h-11 rounded-lg flex justify-between items-center ${
          isOpen ? 'border-secondary-1' : ''
        }`}
        onClick={toggleMenu}
      >
        <h1 className='px-4 line-clamp-1 text-light-text-1 dark:text-dark-text-1'>
          {selectedOption === '' ? 'Select options' : selectedOption}
        </h1>
        <div className='px-4 border-l text-light-text-1 dark:text-dark-text-1'>
          <IoChevronDown
            className={`${
              isOpen ? 'rotate-180' : ''
            } transition-all  duration-300`}
          />
        </div>
      </div>
      <ul
        className={`fixed w-full h-0 max-h-60 bottom-0 left-0 z-[100] md:absolute md:max-h-36 md:top-[100%] ${
          isOpen
            ? 'h-60 md:36 border-t md:border border-light-border-1 dark:border-dark-border-1'
            : ''
        } overflow-y-scroll overflow-x-hidden transition-all duration-300 rounded-t-lg md:rounded-2xl mt-1 shadow-sm z-40 bg-light-bg-1 dark:bg-dark-bg-1`}
      >
        {options.map(option => (
          <li
            key={option}
            onClick={() => selectOption(option)}
            className={`px-3 py-2.5 text-light-text-1 dark:text-dark-text-1 active:bg-light-bg-2 active:dark:bg-dark-bg-2 border-b border-light-border-1 dark:border-dark-border-1 flex items-center gap-3 ${
              selectedOption === option ? 'bg-light-bg-2 dark:bg-dark-bg-2' : ''
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='md:hidden fixed top-0 left-0 h-full w-full z-[80] bg-[#f1ecec14] backdrop-blur-[1px]'
        ></motion.div>
      )}
    </div>
  );
};

export default SelectSingle;