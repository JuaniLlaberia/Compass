const Message = ({ text, recipientId, sender }) => {
  return (
    <div
      className={`flex
        ${recipientId === sender ? 'justify-start' : 'justify-end'}
        `}
    >
      <li
        className={`flex flex-col px-4 py-1.5 max-w-[65dvw] break-all overflow-hidden  ${
          recipientId === sender
            ? 'bg-light-bg-3 rounded-bl-sm text-light-text-1'
            : 'bg-secondary-1 rounded-br-sm text-dark-text-1'
        } rounded-xl`}
      >
        {text}
      </li>
    </div>
  );
};

export default Message;
