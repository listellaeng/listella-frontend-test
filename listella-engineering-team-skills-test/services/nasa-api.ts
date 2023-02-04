const apiRoot = 'https://images-api.nasa.gov';
const DFEAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const searchNASA = async (
  queryParams: Record<string, Partial<string>>
) => {
  const params = new URLSearchParams(queryParams).toString();

  const response = await fetch(`${apiRoot}/search?${params}`, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};

export const getMediaAssetManifest = async (assetId: string) => {
  const response = await fetch(`${apiRoot}/asset/${assetId}`, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};

export const getMediaAssetMetadataLocation = async (nasaId: string) => {
  const response = await fetch(`${apiRoot}/metadata/${nasaId}`, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};

export const getVideoAssetCaptionLocation = async (nasaId: string) => {
  const response = await fetch(`${apiRoot}/captions/${nasaId}`, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};

export const getMediaAlbumContents = async (
  albumName: string,
  page?: number
) => {
  const response = await fetch(`${apiRoot}/album/${albumName}?page=${page}`, {
    headers: DFEAULT_HEADERS,
  });

  return await response.json();
};
