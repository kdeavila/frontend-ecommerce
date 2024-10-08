import { CarouselProducts } from "@/components/carousel";
import CustomerReviews from "@/components/customer-reviews";
import GallerySection from "@/components/gallery-section";
import Hero from "@/components/hero";
import { MessageSlider } from "@/components/message-slider";
import Products from "@/components/products-page";
import { Section } from "@/components/section";
import { VideoCategories } from "@/components/video-categories";
import arrayProducts from "@/data/products";
import Link from "next/link";

export default function Home() {
  const products = arrayProducts.slice(0, 8);

  return (
    <main className="text-center">
      <MessageSlider />
      <Hero />

      <Section
        title="Nuestros productos"
        description="La mejor elección de productos para tu makeup:"
      >
        <Products arrayProducts={products} />
        <Link className="text-sm" href="/products">
          Ver todos los productos ...
        </Link>
      </Section>

      <GallerySection />

      <Section
        title="Look TikTok"
        description="Comparte un video utilizando nuestros productos"
      >
        <VideoCategories />
      </Section>

      <Section
        title="Productos populares"
        description="Algunos de nuestros productos más vendidos:"
      >
        <CarouselProducts />
      </Section>

      <Section title="Opiniones de nuestros clientes" description="Algunas de las opiniones generales de nuestors clientes">
        <CustomerReviews />
      </Section>
    </main>
  );
}
