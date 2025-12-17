import { siteName } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {siteName}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Lake Grove's premier insulation contractor providing energy-efficient solutions for residential and commercial properties. Licensed, insured, and committed to quality workmanship.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Serving Lake Grove, Stony Brook, Patchogue & surrounding Long Island communities
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#attic"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Attic Insulation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#wall"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Wall Insulation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#spray-foam"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Spray Foam
                </Link>
              </li>
              <li>
                <Link
                  href="/services#commercial"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="tel:+16315551234"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  (631) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@paramountinsulation.com"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <span>Licensed • Bonded • Insured</span>
              <span>Serving Long Island Since 2004</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
