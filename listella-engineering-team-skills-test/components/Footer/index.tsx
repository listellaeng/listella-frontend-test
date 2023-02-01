import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FooterItem, FOOTER_ITEMS } from './footer-items';

interface FooterProps {
  footerItems?: Array<FooterItem>;
}

const Footer: FC<FooterProps> = ({ footerItems = FOOTER_ITEMS }) => {
  return (
    <div className="w-full bg-blue-800 text-white px-8 py-4 sticky bottom-0 flex flex-wrap items-center justify-between">
      <ul className="flex flex-wrap items-center justify-start">
        {footerItems.map((footerItem) => (
          <li key={footerItem.label} className="mr-8">
            <Link href={footerItem.href}>{footerItem.label}</Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="flex items-center justify-between">
        <Image
          src="/assets/earth-white.svg"
          width={25}
          height={25}
          alt="earth"
          className="mr-4"
        />
        NASA
      </Link>
    </div>
  );
};

export default Footer;
