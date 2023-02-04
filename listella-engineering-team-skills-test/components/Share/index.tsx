import Image from 'next/image';
import { FC } from 'react';

interface ShareProps {}

const Share: FC<ShareProps> = ({}) => {
  return (
    <Image
      src="/assets/share.svg"
      alt="share"
      width={25}
      height={25}
      className="hover:cursor-pointer mr-8"
    />
  );
};

export default Share;
