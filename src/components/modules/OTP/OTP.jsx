import { useLayoutEffect, useRef } from "react";
import OTPInput from "./OTPInput";
import OTPButton from "./OTPbutton";

const OTP = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  useLayoutEffect(() => {
    input1.current.focus();
  });

  const submitFormHandler = (e) => e.preventDefault();
  return (
    <form
      action=""
      className="flex flex-col justify-center gap-10 space-y-5 h-96"
      onSubmit={submitFormHandler}
    >
      <div className="flex justify-center gap-5">
        <OTPInput refElement={input1} onChange={() => input2.current.focus()} />
        <OTPInput refElement={input2} onChange={() => input3.current.focus()} />
        <OTPInput refElement={input3} onChange={() => input4.current.focus()} />
        <OTPInput refElement={input4} onChange={() => input4.current.blur()} />
      </div>
      <div className="flex justify-center gap-1">
        <OTPButton type="submit" value="Submit" />
        <OTPButton type="reset" value="Reset" />
      </div>
    </form>
  );
};

export default OTP;
