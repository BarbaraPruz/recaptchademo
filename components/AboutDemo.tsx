import React from "react";
import Title from "./widgets/Title";

export default function AboutDemo() {
  return (
    <div className="flex flex-col gap-5 max-w-2xl text-lg">
      <Title>reCAPTCHA Demo</Title>
      <p>
        Google reCAPTCHA is a free service that can protect your site from spam
        and abuse. To learn more about this service, check out the&nbsp;
        <a href="https://developers.google.com/recaptcha/" target="_blank">
          Google Developers Documentation
        </a>
      </p>
      <p>about demo sw - next, (tailwind), vercel, react-google-recaptcha</p>
      <p>
        about demo options. best to run from incognito window to see reCAPTCHA
        behavior
      </p>
      <p>configuring demo for your own domain</p>
    </div>
  );
}
