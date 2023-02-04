const apiKey = process.env.NASA_API_KEY;
const apiRoot = 'https://images-api.nasa.gov';
const DFEAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const searchNASA = async (
  queryParams: Record<string, Partial<string>>
) => {
  const params = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `${apiRoot}/search?api_key=${apiKey}&${params}`,
    {
      headers: DFEAULT_HEADERS,
    }
  );

  return await response.json();
};

export const getMediaAssetManifest = async (assetId: string) => {
  const response = await fetch(
    `${apiRoot}/asset/${assetId}?api_key=${apiKey}`,
    {
      headers: DFEAULT_HEADERS,
    }
  );

  return await response.json();
};

export const getMediaAssetMetadataLocation = async (nasaId: string) => {
  const response = await fetch(
    `${apiRoot}/metadata/${nasaId}?api_key=${apiKey}`,
    {
      headers: DFEAULT_HEADERS,
    }
  );

  return await response.json();
};

export const getVideoAssetCaptionLocation = async (nasaId: string) => {
  const response = await fetch(
    `${apiRoot}/captions/${nasaId}?api_key=${apiKey}`,
    {
      headers: DFEAULT_HEADERS,
    }
  );

  return await response.json();
};

export const getMediaAlbumContents = async (
  albumName: string,
  page?: number
) => {
  const baseUrl = `${apiRoot}/album/${albumName}?api_key=${apiKey}`;
  const url = page ? `${baseUrl}&page=${page}` : baseUrl;
  const response = await fetch(url, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};
