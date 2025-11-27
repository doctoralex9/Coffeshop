import Hero from "./components/Hero"
import MenuPreview from "./components/MenuPreview";

export default function HomePage() {
  return(
    <>
      <Hero />
      <MenuPreview coldCoffees={[]} hotCoffees={[]} />
    </>
  );
}