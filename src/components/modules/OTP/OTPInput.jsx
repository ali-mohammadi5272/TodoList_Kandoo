const OTPInput = ({ refElement, onChange }) => {
  return (
    <input
      type="number"
      className="py-2 w-full text-3xl text-center rounded-lg outline-none"
      max={9}
      min={0}
      minLength={1}
      maxLength={1}
      ref={refElement}
      onChange={onChange}
    />
  );
};

export default OTPInput;
