// core
import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../utils/types.ts";

// components
import Navigation from "../components/Navigation.tsx";
import ProductCard from "../islands/ProductCard.tsx";

export const handler: Handlers<IProduct[] | null> = {
  async GET(_, ctx) {
    const res = await fetch("https://fakestoreapi.com/products/");
    const products = await res.json() as IProduct[];

    if (!products) {
      return ctx.render(null);
    }

    return ctx.render(products);
  },
};

export default function Home({ data: products }: PageProps<IProduct[] | null>) {
  if (!products) return <p>No products!</p>;

  return (
    <>
      <Navigation />
      <div class="p-4 pt-16 mx-auto max-w-screen-md">
        {products.map((prod) => <ProductCard key={prod.id} product={prod} />)}
      </div>
    </>
  );
}
