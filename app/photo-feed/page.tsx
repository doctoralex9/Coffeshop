import Link from "next/link";
import wonders from "./photos";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:flex lg:flex-row lg:flex-nowrap lg:overflow-x-auto lg:gap-4">
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`} className="shrink-0 w-48 md:w-56 lg:w-64">
            <div className="w-full">
              <Image
                alt={name}
                src={src}
                className="w-full object-cover aspect-square"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}