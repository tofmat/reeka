"use client";
import Footer from "@/components/footer";
import { HeroScroll } from "@/components/heroScroll";
import ProductOld from "@/components/product-old";
import PropertyManagement from "@/components/property-management";
export default function Home() {
  return (
    <main>
      <HeroScroll />
      <PropertyManagement />
      <ProductOld />
      <Footer />
    </main>
  );
}
