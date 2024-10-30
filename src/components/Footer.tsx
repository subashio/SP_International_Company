"use client";
import Logo from "@/components/ui/Logo";
import {
  footerSvg,
  Links,
  Links2,
  // Links3,
  Products,
  Services,
} from "@/constants/detailes";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
          <div className="grid grid-cols-2 place-content-center gap-8 md:grid-cols-3 lg:grid-cols-4">
            <nav>
              <h1 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                products
              </h1>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Products.map((item) => (
                  <li key={item.id} className="mb-4">
                    <Link
                      href={
                        item.name
                          ? `/Products/${encodeURIComponent(item.name)}`
                          : item.href
                      }
                      className="hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h1 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Services
              </h1>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Services.map((item) => (
                  <li key={item.id} className="mb-4">
                    <Link
                      href={
                        item.name
                          ? `/Services/${encodeURIComponent(item.name)}`
                          : item.href
                      }
                      className="hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <h1 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Help center
              </h1>
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
              <h1 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h1>
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
            {/* <nav>
              <h1 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h1>
              <ul className="text-xs text-gray-500 dark:text-gray-400">
                {Links3.map((item) => (
                  <li key={item.id} className="mb-4">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav> */}
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="text-center">
            <Link
              href="/"
              className="mb-5 flex items-center justify-center font-semibold text-gray-900 dark:text-white sm:text-2xl"
            >
              <img
                src="/logos/logo.png"
                className="mr-3 h-6 sm:h-8"
                alt="Landwind Logo"
              />
              <span className="font-bootle self-center whitespace-nowrap font-medium tracking-wide sm:text-xl">
                <span className="text-[18px] sm:text-[22px]"> SP </span>
                INTERNATIONAL SERVICES
              </span>
            </Link>
            <span className="block text-center text-sm text-gray-500 dark:text-gray-400">
              © 2024. All Rights Reserved.
            </span>
            <ul className="mt-5 flex justify-center space-x-5">
              {footerSvg.map((item) => (
                <li key={item.id}>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Logo d={item.d} className="border-none" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
