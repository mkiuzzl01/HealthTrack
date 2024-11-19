import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-[#0057B8] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">BEXI HOSPITAL</h3>
            <p className="text-white">
              We provide world-class healthcare services with a commitment to
              patient care, medical excellence, and professional ethics.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/cardiology">
                  <span className="text-white">Cardiology</span>
                </Link>
              </li>
              <li>
                <Link href="/services/neurology">
                  <span className="text-white">Neurology</span>
                </Link>
              </li>
              <li>
                <Link href="/services/orthopedics">
                  <span className="text-white">Orthopedics</span>
                </Link>
              </li>
              <li>
                <Link href="/services/pediatrics">
                  <span className="text-white">Pediatrics</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-white">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-white">Careers</span>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <span className="text-white">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2 text-white">
              <li>
                <span>Santa Rosa CA 94559, US</span>
              </li>
              <li>
                <span>example@gamil.com</span>
              </li>
              <li>
                <span>+1 234 567 8901</span>
              </li>
              <li>
                <span>+1 234 567 8902</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p className="text-white">
            &copy; 2024 Bexi Hospital. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link href="#">
              <FacebookIcon className="text-2xl text-white" />
            </Link>
            <Link href="#">
              <InstagramIcon className="text-2xl text-white" />
            </Link>
            <Link href="#">
              <XIcon className="text-2xl text-white" />
            </Link>
            <Link href="#">
              <LinkedInIcon className="text-2xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
