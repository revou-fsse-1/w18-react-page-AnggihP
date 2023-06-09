type LikesCounterProps = {
    likes: number;
  };
  
  export const LikesCounter = ({ likes }: LikesCounterProps) => {
    const handleDisplayedIcon = () => {
      return likes > 0 ? (
        <svg width="30" height="27" viewBox="0 0 33 31" className="fill-red-600">
          <path d="M16.5 30.6938L14.1438 28.5488C5.775 20.96 0.25 15.9388 0.25 9.8125C0.25 4.79125 4.1825 0.875 9.1875 0.875C12.015 0.875 14.7288 2.19125 16.5 4.255C18.2712 2.19125 20.985 0.875 23.8125 0.875C28.8175 0.875 32.75 4.79125 32.75 9.8125C32.75 15.9388 27.225 20.96 18.8562 28.5488L16.5 30.6938Z" />
        </svg>
      ) : (
        <svg width="30" height="27" viewBox="0 0 33 31" className="fill-white">
          <path d="M16.5 30.6938L14.1438 28.5488C5.775 20.96 0.25 15.9388 0.25 9.8125C0.25 4.79125 4.1825 0.875 9.1875 0.875C12.015 0.875 14.7288 2.19125 16.5 4.255C18.2712 2.19125 20.985 0.875 23.8125 0.875C28.8175 0.875 32.75 4.79125 32.75 9.8125C32.75 15.9388 27.225 20.96 18.8562 28.5488L16.5 30.6938Z" />
        </svg>
      );
    };
  
    return (
      <div className="flex sm:self-start px-3 py-2 bg-black bg-opacity-40 rounded-bl-2xl mt-0 self-end mb-2">
        {handleDisplayedIcon()}
        <p className="ml-1 text-xl">Total {likes}</p>
      </div>
    );
  };