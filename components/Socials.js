// links
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiTiktokLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href='https://www.instagram.com/oliviagaramendi/' className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href='https://www.tiktok.com/@oliviagaramendi' className='hover:text-accent transition-all duration-300'>
        <RiTiktokLine />
      </Link>
    </div>
  );
};

export default Socials;
