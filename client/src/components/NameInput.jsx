const NameInput = ({ name, handleChange }) => {
  return (
    <div>
      <label
        htmlFor="name"
        className="mb-2 block text-base font-medium text-slate-700"
      >
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ex., John Doe"
        maxLength="20"
        required
        value={name}
        onChange={handleChange}
        className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base placeholder-slate-400 shadow focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:px-5"
      />
    </div>
  );
};

export default NameInput;
