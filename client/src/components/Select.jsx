import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { useClickOutside } from '../hooks/useClickOutside';

const Select = ({ options, onChange, selectedOptions }) => {
  //Handle if input is open or close
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useClickOutside(() => setIsOpen(false));

  //Open/Close select input
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const selectOption = option => {
    const updatedSelection = [...selectedOptions, option];
    onChange(updatedSelection);
    setIsOpen(false);
  };

  const unSelectOption = option => {
    const updatedSelection = [...selectedOptions].filter(el => el !== option);
    onChange(updatedSelection);
    setIsOpen(false);
  };

  return (
    <div
      className='relative mt-7 cursor-pointer'
      ref={ref}
    >
      <div
        className={`w-full border h-11 rounded-lg flex justify-between items-center ${
          isOpen ? 'border-secondary-1' : ''
        }`}
        onClick={toggleMenu}
      >
        <h1 className='px-4 line-clamp-1'>
          {selectedOptions.length === 0
            ? 'Select options'
            : selectedOptions.join(', ')}
        </h1>
        <div className='px-4 border-l'>
          <IoChevronDown
            className={`${
              isOpen ? 'rotate-180' : ''
            } transition-all  duration-300`}
          />
        </div>
      </div>
      <ul
        className={`absolute w-full h-0 ${
          isOpen ? 'h-28 border' : ''
        } max-h-28 overflow-y-auto overflow-x-hidden transition-all duration-300 rounded-lg mt-1 shadow-sm z-40 bg-light-bg-1`}
      >
        {options.map(option => (
          <li
            key={option}
            onClick={() =>
              selectedOptions.includes(option)
                ? unSelectOption(option)
                : selectOption(option)
            }
            className={`px-3 py-1.5 active:bg-light-bg-2 md:bg-light-bg-2 border-b flex items-center gap-3 ${
              selectedOptions.includes(option) ? 'bg-light-bg-2' : ''
            }`}
          >
            <input
              className='cursor-pointer w-4 h-4 accent-secondary-1'
              type='checkbox'
              checked={selectedOptions.includes(option)}
              readOnly={true}
            />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
