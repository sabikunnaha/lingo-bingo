import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-10 pb-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-3">Lingo Bingo</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lingo Bingo is your fun and interactive vocabulary learning app.
            Expand your communication skills and enjoy learning a new language
            in an engaging way.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Email: <a href="mailto:support@lingobingo.com" className="hover:text-indigo-400">support@lingobingo.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-400">+1 (234) 567-890</a></li>
            <li>Address: 123 Learning Lane, Knowledge City</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-blue-400" aria-label="Facebook"><Facebook /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400" aria-label="Twitter"><Twitter /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400" aria-label="Instagram"><Instagram /></a>
            <a href="#" className="text-gray-500 hover:text-blue-400" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t bg-blue-400 border-white mt-10 pt-6 text-center items-center pb-2 text-sm text-white">
        © {new Date().getFullYear()}Lingo Bingo. All rights reserved. Made with ❤️ for Japanese learners.
      </div>
    </footer>
  );
};

export default Footer;