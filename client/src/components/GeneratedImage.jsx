import Loader from "./Loader";
import { preview } from "../assets";

const GeneratedImage = ({ form, isGeneratingImg }) => {
  return (
    <div className="my-2 flex items-center justify-center sm:my-3">
      <div className="relative flex aspect-square w-96 items-center justify-center rounded-md border border-slate-300 bg-white p-3 text-sm shadow-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
        {form.photo ? (
          <img
            src={form.photo}
            alt={form.prompt}
            className="h-full w-full object-contain"
          />
        ) : (
          <img
            src={preview}
            alt="preview"
            className="h-9/12 w-9/12 object-contain opacity-40"
          />
        )}

        {isGeneratingImg && (
          <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)]">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedImage;
