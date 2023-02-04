export type TNASAApiResponse<T> = {
  collection: {
    items: Array<T>;
    version: string;
    href: string;
  };
  metadata?: { total_hits: number };
  links?: Array<Record<string, string>>;
};

export type TNASAApiErrorResponse = {
  reason: string;
};

export type TNASALink = {
  href: string;
  rel: string;
  render?: string;
};

export type TSearchNASAResponse = {
  href?: string;
  data?: Array<
    Partial<{
      center: string;
      title: string;
      keywords: Array<string>;
      nasa_id: string;
      date_created: string;
      media_type: string;
      description: string;
    }>
  >;
  links?: Array<TNASALink>;
};

export type TAlbumNASAResponse = {
  href: string;
  data: Array<{
    album: Array<string>;
    center: string;
    title: string;
    photographer: string;
    location: string;
    nasa_id: string;
    media_type: string;
    keywords: Array<string>;
    date_created: string;
    description: string;
  }>;
  links: Array<{
    href: string;
    rel: string;
    render: string;
  }>;
};
