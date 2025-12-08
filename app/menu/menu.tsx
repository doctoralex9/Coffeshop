"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import wondersImages from "../photo-feed/photos";
import BackgroundCarousel from "../components/BackgroundCarousel";

export default function Menu() {
    const router = useRouter();

    // Background image for menu page
    const menuBackgroundImage = ['/photo-feed/photos/12.jpg'];

    const menuCategories = [
        {
            title: "Hot Coffees",
            items: [
                { name: "Classic Cappuccino", price: "$4.50", image: wondersImages[0] },
                { name: "Traditional Greek", price: "$3.80", image: wondersImages[1] },
                { name: "Mocha", price: "$5.00", image: wondersImages[6] },
            ]
        },
        {
            title: "Cold Refreshments",
            items: [
                { name: "Iced Latte", price: "$4.80", image: wondersImages[5] },
                { name: "Cold Brew", price: "$4.50", image: wondersImages[4] },
                { name: "Wild Berry Power Smoothie", price: "€6.20", image: wondersImages[11], description: "Rich, bold, and antioxidant-packed, this berry smoothie delivers a burst of flavor and natural freshness in every sip." },
                { name: "Classic Lime Iced Tea", price: "€4.50", image: wondersImages[12], description: "A crisp, cooling iced tea infused with fresh lime and mint. The perfect balance of citrus and sweetness for a refreshing break anytime." },
                { name: "Iced Mocha", price: "$5.00", image: wondersImages[13], description: "A decadent blend of rich chocolate and bold espresso, topped with whipped cream and served ice-cold." },
                { name: "Frappuccino", price: "$5.50", image: wondersImages[14], description: "A blended iced coffee treat with smooth, creamy texture. Topped with whipped cream for the ultimate refreshment." },
            ]
        },
        {
            title: "Breakfast",
            items: [
                { name: "Fresh Pastries & Croissants", price: "$4.50", image: wondersImages[2], description: "A delightful assortment of freshly baked croissants, muffins, and artisan pastries. Perfect for a quick brunch or morning treat." },
                { name: "Blueberry & Banana French Toast", price: "$10.00", image: wondersImages[9], description: "Golden, fluffy French toast layered with fresh banana slices, juicy blueberries, and a drizzle of natural syrup." },
                { name: "Avocado Toast with Poached Egg", price: "$9.50", image: wondersImages[10], description: "A vibrant, gourmet avocado toast topped with a perfectly runny poached egg, fresh greens, and roasted mushrooms." },
            ]
        }
    ];

    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <BackgroundCarousel
                images={menuBackgroundImage}
                interval={999999}
                transitionDuration={1500}
                overlay={false}
                overlayOpacity={0.85}
                priority={true}
            />

            {/* Header with Back Button */}
            <div className="relative z-10 border-gray-900">
                <div className="max-w-6xl mx-auto px-4 py-5 flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="group flex items-center gap-2 text-amber-800 hover:text-amber-600 transition-all duration-300 hover:scale-105 hover:-translate-x-1 bg-amber-50 hover:bg-amber-100 px-4 py-2 rounded-lg"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-semibold">Back</span>
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
                </div>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                {menuCategories.map((category, idx) => (
                    <div key={idx} className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            {category.title}
                        </h2>
                        {/* Horizontal Scrolling Items */}
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <div className="flex gap-6 min-w-min">
                                {category.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="flex-shrink-0 w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden animate-fade-in-up"
                                    >
                                        <div className="relative h-80 w-full group">
                                            <Image
                                                src={item.image.src}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                placeholder="blur"
                                                blurDataURL={item.image.src.blurDataURL}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            {itemIdx === 0 && (
                                                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                                                    Popular
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8 bg-white">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-3">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {item.description || `Enjoy the timeless taste of our handcrafted ${item.name.toLowerCase()}, made with premium ingredients and expertly prepared for the perfect experience`}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Footer Note */}
                
            </div>
        </div>
    );
}