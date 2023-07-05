import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import { NotesList, Note } from "@/components/NotesList";
import SubmitButton from "@/components/ui/SubmitButton";

//RECAPTCHA_SECRET_KEY
export default function V2InvisiblePage() {
  const [name, setName] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = () => {
    console.log("handle submit");
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode: string | null) => {
    console.log("recaptcha change", captchaCode);
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully
    alert(`Hey Human your name is ${name}`);
    // Reset the reCAPTCHA so that it can be executed again
    recaptchaRef.current?.reset();
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <Title>V2 reCAPTCHA Invisible Demo</Title>

        <div className="container mb-20 grid grid-cols-2 gap-20">
          <div className="bg-white px-20 py-10">
            <Subtitle additionalClasses="mb-10 text-center">Test Form</Subtitle>
            <form>
              <div className="flex flex-col justify-center items-center gap-10">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={
                    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_INVISIBLE || ""
                  }
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
          </div>

          <div className="bg-white px-20 py-10">
            <NotesList title="Notes">
              <Note note="reCAPTCHA type:v2 Invisible. As invisible, the reCAPTCH badge is displayed." />
              <Note note="reCAPTCHA is invisible until the app executes it (which is set up to happen on submit)" />
              <Note
                note={`In reCAPTCHA admin panel, 
          the security (and user difficulty) for the check can be set.
          In the easiest setting, the user may not be prompted at all.`}
              />
            </NotesList>
          </div>
        </div>
      </main>
    </>
  );
}
