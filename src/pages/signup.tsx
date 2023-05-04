import SignupForm from '@/components/Authentication/SignupForm';
import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>My College</title>
      </Head>
      <NavBar />

      <SignupForm />
    </>
  );
};

export default SignUp;
