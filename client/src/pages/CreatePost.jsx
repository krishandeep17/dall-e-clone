import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { Alert, FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
  });

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);

        const res = await fetch(
          "https://text2image-ai.onrender.com/api/v1/createImage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt: form.prompt }),
          }
        );

        const data = await res.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        setShowAlert({ show: true, message: error });
      } finally {
        setGeneratingImg(false);
      }
    } else {
      setShowAlert({
        show: true,
        message: "Please enter a prompt",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const res = await fetch(
          "https://text2image-ai.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }
        );

        await res.json();
        navigate("/");
      } catch (error) {
        setShowAlert({
          show: true,
          message: error,
        });
      } finally {
        setLoading(false);
      }
    } else {
      console.log("generate an image");
      setShowAlert({
        show: true,
        message: "Please enter a prompt and generate an image",
      });
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="max-w-5xl mx-auto">
      <Alert showAlert={showAlert} />
      <div>
        <h1 className="font-bold text-gray-800 text-[2rem] leading-tight mb-4">
          Create
        </h1>
        <p className="text-gray-500 text-base mb-8">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>
      <form className="max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 h-64 p-3 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-green-800"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="text-[#6E6E80] text-sm">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-primary hover:bg-primary_600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center outline-primary_600 disable"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default CreatePost;
