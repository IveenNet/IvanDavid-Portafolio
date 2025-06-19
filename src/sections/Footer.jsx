const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/IveenNet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="w-7 h-7 object-contain"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/ivan-david-medina-vallez-656779154/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Linkedin profile"
          >
            <img
              src="/assets/i-linkedin.svg"
              alt="Linkedin"
              className="w-7 h-7 object-contain"
            />
          </a>
        </div>

        <div className="social-icon">
          <a
            href="https://www.instagram.com/iveen__/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Instagram profile"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-7 h-7 object-contain"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2025 Ivan David Medina Vallez. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
