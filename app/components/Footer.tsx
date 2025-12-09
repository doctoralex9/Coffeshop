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