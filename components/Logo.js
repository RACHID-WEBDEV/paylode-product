import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/public/assets/images/Star_Wars-Logo.wine.png';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src={logoImage} alt="Star-wars-logo " width={150} height={100} />
      </a>
    </Link>
  );
};
export default Logo;
