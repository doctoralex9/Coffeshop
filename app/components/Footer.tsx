"use client";

// Horizontal programming: Reusable scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section text-center border-t"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--muted)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              About Coffee Spot
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Your cozy neighborhood escape in the heart of the community. We serve handcrafted beverages, fresh pastries, and create a welcoming space where everyone feels at home.
            </p>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              Opening Hours
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Monday - Friday: 7:00 AM - 8:00 PM<br />
              Saturday - Sunday: 8:00 AM - 9:00 PM<br />
              <span className="text-sm">Open Daily</span>
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              Visit & Contact Us
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Downtown Location<br />
              123 Coffee Street<br />
              Phone: (555) 123-4567<br />
              Email: info@coffeespot.com
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={scrollToTop}
            className="group px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t" style={{ borderColor: 'var(--muted)' }}>
          <p style={{ color: 'var(--muted)' }}>
            © 2024 Coffee Spot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}