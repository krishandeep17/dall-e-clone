import { getRandomPrompt } from "../utils";

let URL;

if (import.meta.env.VITE_ENV === "production") {
  URL = import.meta.env.VITE_URL;
} else {
  URL = "http://localhost:1710";
}

const PromptInput = ({
  form,
  setForm,
  isGeneratingImg,
  setIsGeneratingImg,
  handleChange,
  setError,
}) => {
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async (e) => {
    e.preventDefault();

    if (!form.prompt) return;

    try {
      setIsGeneratingImg(true);
      setError("");

      const res = await fetch(`https://${URL}/api/v1/createImage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: form.prompt }),
      });

      const data = await res.json();

      setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsGeneratingImg(false);
    }
  };

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor="prompt"
          className="block text-base font-medium text-slate-700"
        >
          Prompt
        </label>
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="rounded-full bg-primary_100 px-2 py-1 text-sm font-medium text-primary_700 outline-primary hover:bg-primary_200"
        >
          Surprise Me
        </button>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-2 ">
        <input
          type="text"
          id="prompt"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase..."
          required
          maxLength="400"
          value={form.prompt}
          onChange={handleChange}
          className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base placeholder-slate-400 shadow focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-5"
        />
        <button
          type="button"
          onClick={generateImage}
          className="rounded-md bg-primary px-5 py-2.5 text-center text-base font-medium text-white shadow-lg outline-primary_600 hover:bg-primary_600"
        >
          {isGeneratingImg ? "Generating..." : "Generate"}
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
