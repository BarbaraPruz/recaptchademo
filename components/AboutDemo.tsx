import React from "react";
import Title from "./ui/Title";
import ExternalLink from "./ui/ExternalLink";

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
      <p>
        This demo is a
        <ExternalLink href="https://nextjs.org/">next.js</ExternalLink> app
        using the
        <ExternalLink href="https://www.npmjs.com/package/react-google-recaptcha">
          react-google-recaptcha
        </ExternalLink>
        package to handle reCAPTCHA v2 verification.
        <ExternalLink href="https://tailwindcss.com/">tailwindcss</ExternalLink>
        is used for styling.
      </p>
      <p>
        To fully observe the reCAPTCHA behaviors, run the demo in an incognito
        window.
      </p>
      <p>
        If setting up the demo to run with your own reCAPTCHA, store the
        corresponding site key in the env variables specified for each demo
        page. When setting up reCAPTCHA local development environments, use
        domain 127.0.0.1
      </p>
    </div>
  );
}
