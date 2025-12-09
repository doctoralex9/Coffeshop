"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import wondersImages from "../photo-feed/photos";
import BackgroundCarousel from "../components/BackgroundCarousel";

export default function AboutPage() {
    const router = useRouter();

    // Background image for about page
    const aboutBackgroundImage = ['/photo-feed/photos/10.jpg'];

    return (
        <div className="relative min-h-screen">
            {/* Animated Background */}
            <BackgroundCarousel
                images={aboutBackgroundImage}
                interval={999999}
                transitionDuration={1500}
                overlay={true}
                overlayColor="black"
                overlayOpacity={0.5}
                priority={true}
            />

            {/* Header with Back Button */}
            <div className="relative z-10">
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
                </div>
            </div>

            {/* About Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-12 animate-fade-in-up">
                    <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
                        About Coffee Spot
                    </h1>

                    <div className="space-y-6 text-white text-lg leading-relaxed">
                        <p>
                            Welcome to <span className="font-semibold text-amber-700">Coffee Spot</span>, your cozy neighborhood escape tucked right into the heart of the community. Surrounded by charming local shops and friendly streets, Coffee Spot was created to offer a warm, welcoming place where everyone can relax and enjoy a break from the everyday rush.
                        </p>

                        <p>
                            Here, every cup of coffee, smoothie, and treat is made with care, using fresh ingredients and a passion for great flavor. Whether you're starting your morning, settling in to work or study, or simply enjoying a quiet moment, Coffee Spot is designed to make you feel right at home.
                        </p>

                        <p>
                            Whether you're a local regular, a student looking for a comfortable study corner, or a visitor exploring the area, Coffee Spot is the perfect place to unwind, connect, and enjoy the simple pleasure of good company and good coffee.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
