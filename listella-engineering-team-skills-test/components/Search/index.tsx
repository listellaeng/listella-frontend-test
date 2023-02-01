import Image from 'next/image';
import { FC } from 'react';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
  return (
    <Image
      src="/assets/search.svg"
      alt="search"
      width={25}
      height={25}
      className="hover:cursor-pointer mr-8"
    />
  );
};

export default Search;
