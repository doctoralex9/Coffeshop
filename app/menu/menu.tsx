"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import wondersImages from "../photo-feed/photos";

export default function Menu() {
    const router = useRouter();

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
            title: "Cold Coffees",
            items: [
                { name: "Iced Latte", price: "$4.80", image: wondersImages[5] },
                { name: "Cold Brew", price: "$4.50", image: wondersImages[4] },
            ]
        },
        {
            title: "Breakfast",
            items: [
                { name: "Morning Selection", price: "$8.50", image: wondersImages[2] },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-amber-50">
            {/* Header with Back Button */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-amber-800 hover:text-amber-900 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-medium">Back</span>
                    </button>
                    <h1 className="text-2xl font-bold text-amber-900">Our Menu</h1>
                </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {menuCategories.map((category, idx) => (
                    <div key={idx} className="mb-12">
                        <h2 className="text-2xl font-semibold text-amber-900 mb-6 border-b-2 border-amber-200 pb-2">
                            {category.title}
                        </h2>

                        {/* Horizontal Scrolling Items */}
                        <div className="overflow-x-auto pb-4">
                            <div className="flex gap-6 min-w-min">
                                {category.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={item.image.src}
                                                alt={item.name}
                                                fill
                                                className="object-cover rounded-t-lg"
                                                placeholder="blur"
                                                blurDataURL={item.image.src.blurDataURL}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {item.name}
                                                </h3>
                                                <span className="text-xl font-bold text-amber-700">
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
                <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600 italic">
                        All our coffees are made with premium beans and fresh ingredients
                    </p>
                </div>
            </div>
        </div>
    );
}