import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import { NotesList, Note } from "@/components/NotesList";
import SubmitButton from "@/components/ui/SubmitButton";

export default function V2NotARobotPage() {
  const [name, setName] = useState("");
  const [isReadyForSubmit, setIsReadyForSubmit] = useState(false);

  const handleSubmit = () => {
    console.log("handle submit");
    alert(`Hey Human your name is ${name}`);
  };

  const handleRecaptcha = (captchaCode: string | null) => {
    if (captchaCode) {
      setIsReadyForSubmit(true);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <Title>V2 reCAPTCHA Not A Robot Demo</Title>

        <div className="container mb-20 grid grid-cols-2 gap-20">
          <div className="bg-white px-20 py-10">
            <Subtitle additionalClasses="mb-10 text-center">Test Form</Subtitle>
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
                <ReCAPTCHA
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_NOT_ROBOT || ""
                  }
                  onChange={handleRecaptcha}
                />
                <SubmitButton
                  onClick={handleSubmit}
                  disabled={!isReadyForSubmit}
                />
              </div>
            </form>
          </div>

          <div className="bg-white px-20 py-10">
            <NotesList title="Notes">
              <Note note="reCAPTCHA type:v2 I'm not a robot." />
              <Note note="reCAPTCHA is part of form. Application logic disables submit button until captcha completed." />
              <Note
                note={`In reCAPTCHA admin panel, 
          the security (and user difficulty) for the check can be set.`}
              />
            </NotesList>
          </div>
        </div>
      </main>
    </>
  );
}
