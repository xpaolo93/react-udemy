import { GifItem } from "./";
import useFetchGifs from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando</h2>}
      <div>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
