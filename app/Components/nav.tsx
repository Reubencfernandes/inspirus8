import Image from 'next/image';
import Link from 'next/link';


const Nav = () => {
  return (
    <div className="bg-background p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
          <Image src="/inspiruslogo.png" alt="inspirus-logo" className="h-20 sm:h-40 w-auto" width={100} height={100} />
          </Link>
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
