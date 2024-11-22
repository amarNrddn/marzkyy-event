import { SignUp } from "@clerk/nextjs";

export default function () {
   return <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      afterSignUpUrl="/"
      afterSignInUrl="/"
   />
}