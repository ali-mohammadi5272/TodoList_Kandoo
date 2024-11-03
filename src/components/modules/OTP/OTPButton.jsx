const OTPButton = ({ type, value }) => {
  return (
    <input
      className="text-lg hover:bg-slate-900 cursor-pointer font-bold bg-black text-white py-2 px-5 rounded-md"
      type={type}
      value={value}
    />
  );
};

export default OTPButton;
