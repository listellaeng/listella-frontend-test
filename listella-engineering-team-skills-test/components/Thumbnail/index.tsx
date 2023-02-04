import Image from 'next/image';
import { FC } from 'react';
import { TAlbumNASAResponse } from '../../services/nasa-api.types';

export interface ThumbnailProps extends TAlbumNASAResponse {}

const Thumbnail: FC<ThumbnailProps> = ({ links, data }) => {
  const previewImage = links?.find(
    (link) => link.rel === 'preview' && link.render === 'image'
  );
  return (
    <>
      {previewImage?.href && (
        <Image
          src={previewImage?.href}
          className="rounded-xl mr-2 object-cover"
          width={190}
          height={100}
          alt={data[0].description}
        />
      )}
    </>
  );
};

export default Thumbnail;
