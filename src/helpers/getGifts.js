export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=bsFnkoHvBbJCpOSYHTxGdcQPWQ8J4SBi&q=${category}&limit=4`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
