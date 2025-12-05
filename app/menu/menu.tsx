import Image from "next/image";
import wondersImages from "../photo-feed/photos";

export default function Menu() {
    return (
        <div className="Coffes and More">
            <p className="Description">
                
            </p>
            <Image 
                src={wondersImages[2].src}
                alt={wondersImages[2].name}
                placeholder="blur"
                />
        </div>
    );
}