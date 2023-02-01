import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import { MENU_ITEMS } from './menu-items';
import cx from 'classnames';

interface HamburgerMenuProps {}

const HamburgerMenu: FC<HamburgerMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cx('relative whitespace-nowrap', {
        'bg-white rounded-md': isOpen,
      })}
    >
      {isOpen ? (
        <ul className="absolute z-50 -top-4 right-0 flex flex-col items-center justify-between border rounded-md p-4 bg-white">
          <li className="self-end">
            <Image
              src="/assets/close.svg"
              width={25}
              height={25}
              alt="menu"
              className="hover:cursor-pointer"
              onClick={handleHamburgerClick}
            />
          </li>
          {MENU_ITEMS.map((menuItem) => (
            <li
              key={menuItem.label}
              className="border-b-2 border-gray-300 w-35 mb-1 w-full"
            >
              <Link href={menuItem.href}>{menuItem.label}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <Image
          src="/assets/menu.svg"
          width={25}
          height={25}
          alt="menu"
          className="hover:cursor-pointer"
          onClick={handleHamburgerClick}
        />
      )}
    </div>
  );
};

export default HamburgerMenu;
