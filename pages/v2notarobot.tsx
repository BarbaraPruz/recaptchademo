import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../components/Navbar";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import { NotesList, Note } from "@/components/NotesList";
import TestFormNotARobot from "@/components/TestFormNotARobot";

export default function V2NotARobotPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between p-24">
        <Title>V2 reCAPTCHA Not A Robot Demo</Title>

        <div className="container mb-20 grid grid-cols-2 gap-20">
          <div className="bg-white px-20 py-10">
            <Subtitle additionalClasses="mb-10 text-center">Test Form</Subtitle>
            <TestFormNotARobot
              siteKey={
                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_NOT_ROBOT || ""
              }
            />
          </div>

          <div className="bg-white px-20 py-10">
            <NotesList title="Notes">
              <Note note="reCAPTCHA type:v2 I'm not a robot." />
              <Note note="reCAPTCHA is part of form. Application logic disables submit button until captcha completed." />
              <Note
                note={`In reCAPTCHA admin panel, 
          the security (and user difficulty) for the check can be set.`}
              />
              <Note
                note={`This demo expects the reCAPTCHA site key to be in env variable NEXT_PUBLIC_RECAPTCHA_SITE_KEY_NOT_ROBOT`}
              />
            </NotesList>
          </div>
        </div>
      </main>
    </>
  );
}
