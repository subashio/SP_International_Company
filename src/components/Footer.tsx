import Logo from "@/components/Logo";
import {
  footerSvg,
  Links,
  Links2,
  Links3,
  Links4,
  Links5,
} from "@/constants/detailes";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowUpFromDot } from "lucide-react";

export default function Footer() {
  return (
    <MaxWidthWrapper className="">
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <nav>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                products
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links4.map((item) => (
                  <li key={item.id} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Services
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links5.map((item) => (
                  <li key={item.id} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Help center
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links2.map((item) => (
                  <li key={item.id} className="mb-4">
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links.map((item) => (
                  <li key={item.id} className="mb-4">
                    <Link href={item.href} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h3 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links3.map((item) => (
                  <li key={item.id} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="text-center">
            <Link
              href="#"
              className="mb-5 flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                src="/logos/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Landwind Logo"
              />
              SP INTERNATIONALS SERVICES
            </Link>
            <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
              © 2021-2026. All Rights Reserved.
            </span>
            <ul className="mt-5 flex justify-center space-x-5">
              {footerSvg.map((item) => (
                <li>
                  <Link
                    key={item.id}
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Logo d={item.d} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
