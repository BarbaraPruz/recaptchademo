import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SubmitButton from "@/components/ui/SubmitButton";

interface TestFormInvisibleProps {
  siteKey: string;
}

export default function TestFormInvisible({ siteKey }: TestFormInvisibleProps) {
  const [name, setName] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async () => {
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current?.execute();
  };

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    alert(`Hey Human your name is ${name}`);
    // Reset the reCAPTCHA so that it can be executed again
    recaptchaRef.current?.reset();
  };

  return (
    <form>
      <div className="flex flex-col justify-center items-center gap-10">
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={siteKey}
          onChange={onReCAPTCHAChange}
        />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <SubmitButton onClick={handleSubmit} />
      </div>
    </form>
  );
}
