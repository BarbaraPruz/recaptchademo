# Google reCAPTCHA v2 Demo

## For Developers - software stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses tailwindcss and the react-google-recaptcha package

Running development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

See package.json for other scripts like build and start.

## Customizing with your own reCAPTCHA

Go to the Google reCaptcha dashboard and create a recaptcha. For localhost domain, use 127.0.0.1. Otherwise, use your actual domain.

As described on the demo pages, store the reCAPTCHA site keys in env variables.
