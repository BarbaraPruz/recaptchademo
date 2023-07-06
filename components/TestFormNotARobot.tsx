import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import SubmitButton from "@/components/ui/SubmitButton";

interface TestFormNotARobotProps {
  siteKey: string;
}

export default function TestFormNotARobot({ siteKey }: TestFormNotARobotProps) {
  const [name, setName] = useState("");
  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);

  const handleSubmit = () => {
    alert(`Hey Human your name is ${name}`);
  };

  const handleRecaptcha = (captchaCode: string | null) => {
    if (captchaCode) {
      setIsReadyForSubmit(true);
    }
  };

  return (
    <form>
      <div className="flex flex-col justify-center items-center gap-10">
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
        <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptcha} />
        <SubmitButton onClick={handleSubmit} disabled={!isReadyForSubmit} />
      </div>
    </form>
  );
}
