import { useLayoutEffect } from "react";
import OTP from "../../modules/OTP/OTP";

const VerificationPage = () => {
  useLayoutEffect(() => {
    document.title = "Verification";
  }, []);

  return (
    <main>
      <h1 className="text-5xl font-bold my-5 text-center">Verification</h1>
      <section>
        <OTP />
      </section>
    </main>
  );
};

export default VerificationPage;
