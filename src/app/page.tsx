"use client";
import Footer from "@/components/footer";
import { HeroScroll } from "@/components/heroScroll";
import Products from "@/components/products";
import ProductsMobile from "@/components/productsMobile";
import PropertyManagement from "@/components/property-management";
export default function Home() {
  return (
    <main>
      <HeroScroll />
      <PropertyManagement />
      <Products />
      <ProductsMobile />
      <Footer />
    </main>
  );
}
