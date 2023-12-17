const ChatsSekelon = ({ amount = 5 }) => {
  return (
    <ul className='flex flex-col gap-3 my-3 px-3'>
      {Array(amount)
        .fill(0)
        .map((_, i) => (
          <li
            key={i}
            className='w-full h-16 rounded-lg bg-slate-300 animate-pulse'
          ></li>
        ))}
    </ul>
  );
};

export default ChatsSekelon;
