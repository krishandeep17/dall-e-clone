import { errorImage } from "../assets";

const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-slate-600">{message}</h2>
      <img className="w-[28rem]" src={errorImage} alt="Error" />
    </div>
  );
};

export default Error;
