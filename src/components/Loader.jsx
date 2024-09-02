import LogoCirebon from "/images/logocirebon.png";

export const Loader = () => {
  return (
    <div className="flex items-center absolute top-0 left-0  justify-center w-screen h-screen select-none">
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange flex align-middle justify-center">
          <img src={LogoCirebon} alt="-" />
        </div>
        <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-t-color-orange animate-spin"></div>
      </div>
    </div>
  );
};
