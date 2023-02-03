import fetch from 'node-fetch';
const apiKey = process.env.NASA_API_KEY;
const apiRoot = 'https://images-api.nasa.gov';
const DFEAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const searchNASA = async (queryParams: Record<string, string>) => {
  const params = new URLSearchParams(queryParams).toString();

  return await fetch(`${apiRoot}/search?${params}`, {
    headers: DFEAULT_HEADERS,
  });
};

export const getMediaAssetManifest = async (assetId: string) => {
  return await fetch(`${apiRoot}/asset/${assetId}`, {
    headers: DFEAULT_HEADERS,
  });
};

export const getMediaAssetMetadataLocation = async (nasaId: string) => {
  return await fetch(`${apiRoot}/metadata/${nasaId}`, {
    headers: DFEAULT_HEADERS,
  });
};

export const getVideoAssetCaptionLocation = async (nasaId: string) => {
  return await fetch(`${apiRoot}/captions/${nasaId}`, {
    headers: DFEAULT_HEADERS,
  });
};

export const getMediaAlbumContents = async (
  albumName: string,
  page?: number
) => {
  return await fetch(`${apiRoot}/album/${albumName}?page=${page}`, {
    headers: DFEAULT_HEADERS,
  });
};
