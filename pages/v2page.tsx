import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Title from "@/components/widgets/Title";
import Subtitle from "@/components/widgets/Subtitle";
import { NotesList, Note } from "@/components/NotesList";
export default function V2Page() {
  const [name, setName] = useState("");
  const recaptchaRef = useRef();

  const handleSubmit = () => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    alert(`Hey Human your name is ${name}`);
    // Reset the reCAPTCHA so that it can be executed again if user
    // submits another email.
    recaptchaRef.current?.reset();
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <Title>V2 demo</Title>

        <div className="container mb-20 grid grid-cols-2 gap-20">
          <div className="bg-white px-20 py-10">
            <Subtitle additionalClasses="mb-10 text-center">Test Form</Subtitle>
            <form>
              <div className="flex flex-col justify-center items-center gap-10">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  size="invisible"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
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
                <button
                  className="bg-indigo-500 text-white text-center p-3 w-32 rounded-lg hover:bg-indigo-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white px-20 py-10">
            <NotesList title="Notes">
              <Note note="reCAPTCHA type:v2 Invisible" />
              <Note
                note={`In reCAPTCHA admin panel, 
          the security (and user difficulty) for the check can be set.
          In the easiest setting, the user may not be prompted at all.`}
              />
            </NotesList>
            all
          </div>
        </div>
      </main>
    </>
  );
}
