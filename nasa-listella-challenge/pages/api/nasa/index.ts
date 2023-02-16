const API_KEY = process.env.NASA_API_KEY;
const queryURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${API_KEY}`

export const getImages = async () => {
  const res = await fetch(
    queryURL,
    {
      headers: {
        "Content-Type": "application/json"
      },
    }
  );
  const responseJson = await res.json();
  return responseJson.photos;
};