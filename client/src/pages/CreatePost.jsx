import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Error,
  PromptInput,
  NameInput,
  Heading,
  Subheading,
  GeneratedImage,
} from "../components";

let URL;

if (import.meta.env.VITE_ENV === "production") {
  URL = import.meta.env.VITE_URL;
} else {
  URL = "http://localhost:1710";
}

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sharePost = async (e) => {
    e.preventDefault();

    if (!form.name && !form.prompt && !form.photo) return;

    try {
      setIsLoading(true);
      setError("");

      const res = await fetch(`https://${URL}/api/v1/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      await res.json();
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <Heading>Create</Heading>
      <Subheading>
        Create realistic images and art from a description in natural language
      </Subheading>

      {error ? (
        <Error message={error} />
      ) : (
        <form className="flex flex-col gap-5 sm:gap-6" onSubmit={sharePost}>
          <NameInput name={form.name} handleChange={handleChange} />

          <PromptInput
            form={form}
            setForm={setForm}
            isGeneratingImg={isGeneratingImg}
            setIsGeneratingImg={setIsGeneratingImg}
            handleChange={handleChange}
            setError={setError}
          />

          <GeneratedImage form={form} isGeneratingImg={isGeneratingImg} />

          <div>
            <p className="mb-3 text-sm text-[#6E6E80]">
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <button
              type="submit"
              disabled={form.photo ? "true" : "false"}
              className="w-full rounded-md bg-green-700 px-5 py-2.5 text-center text-base font-medium text-white shadow-lg outline-green-800 hover:bg-green-800  disabled:cursor-not-allowed sm:w-auto"
            >
              {isLoading ? "Sharing..." : "Share with the Community"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CreatePost;
