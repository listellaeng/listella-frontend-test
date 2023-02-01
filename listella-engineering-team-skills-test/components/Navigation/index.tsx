import Link from 'next/link';
import { FC } from 'react';
import { NAV_ITEMS, NavItem } from './nav-items';

export interface NavigationProps {
  navItems: Array<NavItem>;
}

const Navigation: FC<NavigationProps> = ({ navItems = NAV_ITEMS }) => {
  return (
    <nav>
      <ul className="mx-auto flex flex-wrap items-center justify-between p-8 border-b-2 border-gray-200 max-w-5xl">
        {navItems.map((navItem) => (
          <li key={navItem.label}>
            <Link href={navItem}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
