import { useLayoutEffect } from "react";

const VerificationPage = () => {
  useLayoutEffect(() => {
    document.title = "Verification";
  }, []);

  return (
    <main>
      <h1 className="text-5xl font-bold my-5 text-center">Verification</h1>
    </main>
  );
};

export default VerificationPage;
