import LoginForm from '@/components/Authentication/LoginForm';
import NavBar from '@/components/Navigation/Navigation';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <NavBar />

      <LoginForm />
    </>
  );
};

export default Login;
