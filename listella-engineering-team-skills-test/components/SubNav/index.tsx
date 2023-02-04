import HamburgerMenu from '../HamburgerMenu';
import Search from '../Search';
import Share from '../Share';

const SubNav = () => {
  return (
    <div className="absolute top-8 right-8  max-w-md flex items-center justify-between">
      <Search />
      <Share />
      <HamburgerMenu />
    </div>
  );
};

export default SubNav;
