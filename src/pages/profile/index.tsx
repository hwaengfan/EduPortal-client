import Navigation from '@/components/Navigation/Navigation';
import ProfileForm from '@/components/ProfileForm';
import Head from 'next/head';
import Image from 'next/image';
import { FaUserAlt } from 'react-icons/fa';

const navigationProps = {
  brand: { logo: <FaUserAlt />, name: 'Hoang', path: '/dashboard' },
  sections: [
    { name: 'Profile', path: '/profile' },
    { name: 'Sign Out', path: '/' },
  ],
};

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navigation
        brand={navigationProps.brand}
        sections={navigationProps.sections}
      />

      <div className="d-flex flex-column align-items-center text-center">
        <Image
          width={150}
          height={150}
          src="/images/unknown-profile.jpg"
          alt="UserProfile"
          priority
        />
        <span className="font-weight-bold">Hoang Phan</span>
        <span className="text-black-50">cope@gmail.com</span>
      </div>
      <div className="container w-50 p-3">
        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
