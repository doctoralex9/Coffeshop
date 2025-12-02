export default function Footer() {
  return (
    <footer 
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
              About Us
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Your favorite café serving the finest coffee and delicious treats since 2024.
            </p>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              Hours
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              Monday - Friday: 7am - 8pm<br />
              Saturday - Sunday: 8am - 9pm
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>
              Contact
            </h3>
            <p style={{ color: 'var(--muted)' }}>
              123 Coffee Street<br />
              Phone: (555) 123-4567<br />
              info@cafe.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t" style={{ borderColor: 'var(--muted)' }}>
          <p style={{ color: 'var(--muted)' }}>
            © 2024 Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}