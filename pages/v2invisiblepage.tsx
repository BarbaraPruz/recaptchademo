import Navbar from "../components/Navbar";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import { NotesList, Note } from "@/components/NotesList";
import TestFormInvisible from "@/components/TestFormInvisible";

export default function V2InvisiblePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <Title>V2 reCAPTCHA Invisible Demo</Title>

        <div className="container mb-20 grid grid-cols-2 gap-20">
          <div className="bg-white px-20 py-10">
            <Subtitle additionalClasses="mb-10 text-center">
              Test Form2 (preview test)
            </Subtitle>
            <TestFormInvisible
              siteKey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_INVISIBLE || ""
              }
            />
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
              <Note
                note={`This demo expects the reCAPTCHA site key to be in env variable NEXT_PUBLIC_RECAPTCHA_SITE_KEY_INVISIBLE`}
              />
            </NotesList>
          </div>
        </div>
      </main>
    </>
  );
}
