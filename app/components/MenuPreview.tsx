import Image from "next/image";
import wondersImages from "../photo-feed/photos";
import { Card } from "./card";

export default function MenuPreview() {
  const heroItems = [wondersImages[3], wondersImages[4]];
  return (
    
      <section 
      className="section text-center" 
      style={{ backgroundColor: '#f5e6d3' }}
    >
      <h1 className="text-3xl font-semibold mb-8" style={{ color: '#8B4513' }}>
        Coffees & more
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Hot Coffee Card */}
        <div 
          className="p-4 rounded-lg shadow-lg hover:scale-[1.02] transition max-w-sm mx-auto"
          style={{ 
        backgroundColor: 'white',
        border: '2px solid #d4a574'
          }}
        >
          <Image
        src={wondersImages[3].src}
        alt={wondersImages[3].name}
        className="rounded-md mb-4 object-cover"
        placeholder="blur"
          />
          <h2 className="text-xl font-semibold mb-2" style={{ color: '#ff6600' }}>
        Hot Coffee
          </h2>
          <p style={{ color: '#8B4513' }}>
        Explore our selection of freshly brewed hot coffees
          </p>
      </div>

        {/* Cold Coffee Card */}
        <div 
          className="p-4 rounded-lg shadow-lg hover:scale-[1.02] transition max-w-sm mx-auto"
          style={{ 
        backgroundColor: 'white',
        border: '2px solid #d4a574'
          }}
        >
          <Image
        src={wondersImages[4].src}
        alt={wondersImages[4].name}
        className="rounded-md mb-4 object-cover"
        placeholder="blur"
          />
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#ff6600' }}>
        Cold Coffees and refreshments!
          </h3>
          <p style={{ color: '#8B4513' }}>
        Refresh yourself with our cold coffee specialties
          </p>
        </div>
      </div>

      {/* Additional Coffee Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div 
          className="p-4 rounded-lg shadow-lg hover:scale-[1.02] transition max-w-sm mx-auto"
          style={{ 
        backgroundColor: 'white',
        border: '2px solid #d4a574'
          }}
        >
          <Image
        src={wondersImages[0].src}
        alt={wondersImages[0].name}
        className="rounded-md mb-3 object-cover"
        placeholder="blur"
          />
          <h4 className="text-lg font-semibold" style={{ color: '#ff6600' }}>
        {wondersImages[0].name}
          </h4>
          <p style={{ color: '#8B4513' }}>Enjoy the timeless taste of our rich, foamy cappuccino</p>
        </div>

        <div 
          className="p-4 rounded-lg shadow-lg hover:scale-[1.02] transition max-w-sm mx-auto"
          style={{ 
        backgroundColor: 'white',
        border: '2px solid #d4a574'
          }}
        >
          <Image
        src={wondersImages[5].src}
        alt={wondersImages[5].name}
        className="rounded-md mb-3 object-cover"
        placeholder="blur"
          />
          <h4 className="text-lg font-semibold" style={{ color: '#ff6600' }}>
        {wondersImages[5].name}
          </h4>
          <p style={{ color: '#8B4513' }}>Savor the smooth harmony of espresso blended with creamy steamed milk</p>
        </div>
      </div>
      </section>
     
  );
}