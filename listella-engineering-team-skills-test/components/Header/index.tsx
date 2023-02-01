import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full p-8">
      <div className="flex items-center justify-between max-w-xs mx-auto">
        <Image src="/assets/earth.svg" alt="earth" width={75} height={75} />
        <h1 className="text-5xl font-thin">NASA</h1>
      </div>
    </header>
  );
};

export default Header;
