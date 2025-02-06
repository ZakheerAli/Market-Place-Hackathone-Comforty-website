
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-3xl font-semibold mb-5'>Create an Account</h1>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
