// core
import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../../utils/types.ts";

// components
import Navigation from "../../components/Navigation.tsx";

export const handler: Handlers<IProduct | null> = {
  async GET(_, ctx) {
    const res = await fetch(
      `https://fakestoreapi.com/products/${ctx.params.id}`,
    );
    const product = await res.json() as IProduct;

    if (!product) {
      return ctx.render(null);
    }

    return ctx.render(product);
  },
};

export default function ProductItem(
  { data: product }: PageProps<IProduct | null>,
) {
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <Navigation />
      <div class="p-4 pt-16 mx-auto max-w-screen-md">
        <h1 class="font-bold text-2xl text-center">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          class="w-1/3 mr-auto ml-auto mt-10"
        />
        <p class="font-bold text-center">{product.price}$</p>
        <p>{product.description}$</p>
      </div>
    </>
  );
}
