import Hero from "./components/Hero"
import MenuPreview from "./components/MenuPreview";
import Footer from "./components/Footer";

export default function HomePage() {
  return(
    <>
      <Hero />
      <MenuPreview coldCoffees={[]} hotCoffees={[]} />
      <Footer />
    </>
  );
}