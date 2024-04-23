import React from "react";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

import MobileNavbar from "./mobilenavbar";

const Navbar = () => {
  return (
    <nav className="flex-between flexed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex item-center gap-1">
        <Image
          src="./icons/logo.svg"
          alt="Yoom Logo"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
