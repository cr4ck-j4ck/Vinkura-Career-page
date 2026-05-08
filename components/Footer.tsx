import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-16 px-4 md:px-16 text-sm text-gray-500 font-body">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-hero text-xl font-bold text-black tracking-widest uppercase">
              VINKURA
            </Link>
            <p className="mt-4 max-w-xs">
              Operational Intelligence Infrastructure for India's public systems.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-black mb-4 uppercase tracking-wider">Careers</h4>
            <ul className="space-y-3">
              <li><Link href="#open" className="hover:text-black transition-colors">Open Positions</Link></li>
              <li><Link href="#hiring" className="hover:text-black transition-colors">Getting Hired</Link></li>
              <li><Link href="#students" className="hover:text-black transition-colors">Students</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-black mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/news" className="hover:text-black transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-black mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Vinkura AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-black transition-colors">Twitter / X</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
