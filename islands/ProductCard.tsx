import { IProduct } from "../utils/types.ts";
import { useState } from "preact/hooks";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  const [details, setDetails] = useState(false);

  const toggleDesc = () => setDetails((prev) => !prev);

  return (
    <div class="border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center">
      <img src={product.image} alt={product.title} class="w-1/6" />
      <h2 class="font-bold text-lg">{product.title}</h2>
      <p class="font-bold">{product.price}$</p>
      <a class="bg-blue-400 px-2 rounded-lg" href={`/product/${product.id}`}>
        Open
      </a>
      <button onClick={toggleDesc} class="bg-blue-400 mt-2 px-2 rounded-lg">
        Toggle Description
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}
