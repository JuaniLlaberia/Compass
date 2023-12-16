import { IoBanOutline } from 'react-icons/io5';

const Message = ({ text, recipientId, sender }) => {
  return (
    <div
      className={`flex
        ${recipientId === sender ? 'justify-start' : 'justify-end'}
        `}
    >
      <li
        className={`relative flex flex-col px-3 py-1.5 max-w-[65dvw] break-words overflow-hidden  ${
          recipientId === sender
            ? 'bg-light-bg-3 rounded-bl-sm text-light-text-1 dark:bg-dark-bg-3 dark:text-dark-text-1'
            : 'bg-gradient rounded-br-sm text-dark-text-1'
        } rounded-xl xl:text-lg 2xl:text-xl`}
      >
        {text ? (
          <p>{text}</p>
        ) : (
          <p
            className={`flex items-center gap-2 italic ${
              recipientId === sender
                ? 'text-light-text-2 dark:text-dark-text-2'
                : 'text-dark-text-1  dark:text-dark-text-1'
            }`}
          >
            <IoBanOutline /> Message deleted
          </p>
        )}
      </li>
    </div>
  );
};

export default Message;
