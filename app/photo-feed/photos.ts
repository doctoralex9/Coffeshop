import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";
import photo10 from "./photos/10.jpg";
import photo13 from "./photos/13.jpg";
import photo14 from "./photos/14.jpg";
import photo15 from "./photos/15.jpg";
import photo16 from "./photos/16.jpg";
import photo17 from "./photos/17.jpg";
import photo18 from "./photos/18.jpg";
import photo19 from "./photos/19.jpg";

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

  {
    id: "10",
    name: "About Coffee Spot",
    src: photo10,
  },

  {
    id: "13",
    name: "Menu Preview",
    src: photo13,
  },

  {
    id: "14",
    name: "Avocado Toast with Poached Egg",
    src: photo14,
  },

  {
    id: "15",
    name: "Blueberry & Banana French Toast",
    src: photo15,
  },

  {
    id: "16",
    name: "Iced Caramel Macchiato",
    src: photo16,
  },

  {
    id: "17",
    name: "Vanilla Iced Coffee",
    src: photo17,
  },

  {
    id: "18",
    name: "Iced Mocha",
    src: photo18,
  },

  {
    id: "19",
    name: "Frappuccino",
    src: photo19,
  },
];

export default wondersImages;