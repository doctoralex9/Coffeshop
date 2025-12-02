import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Classic Capuccino",
    src: photo1,
 
  },

  {
    id: "2",
    name: "Traditional Greek",
    src: photo2,
  },

  {
    id: "3",
    name: "Some of our breakfast",
    src: photo3,
  },

  {
    id: "4",
    name: "Hot Coffes",
    src: photo4,
  },

  {
    id: "5",
    name: "Cold Coffes",
    src: photo5,
  },

  {
    id: "6",
    name: "Latte",
    src: photo6,
  },

  {
    id: "7",
    name: "Mocha",
    src: photo7,
  },
];

export default wondersImages;