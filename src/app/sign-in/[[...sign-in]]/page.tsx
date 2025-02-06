import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center">
      
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
};

export default SignInPage;

