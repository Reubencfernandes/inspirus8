import Image from 'next/image';
import Link from 'next/link';
import logo from '../inspiruslogo.png';

const Nav = () => {
  return (
    <div className="bg-background p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src={logo} alt="inspirus-logo" className="h-20 w-auto" />
        </div>
        <div className="space-x-8 flex">
          <Link href="/" className="hover:text-gray-400 text-white text-xl">
            Home
          </Link>
          <Link href="/team" className="hover:text-gray-400 text-white text-xl">
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
