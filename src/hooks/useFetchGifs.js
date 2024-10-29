import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Si se deja vacio solo llama la primera vez que se construye el componente

  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
