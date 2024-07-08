import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen gap-10 ">
      <div className="flex flex-row border-[1px] rounded-lg shadow-md mt-10">
        <Link
          href="/"
          className={`${
            router.pathname === "/" && "bg-[#00467A] text-white"
          } rounded-lg px-5 py-2 text-lg font-semibold cursor-pointer`}
        >
          Single Card
        </Link>
        <Link
          href="/multipleIdCards"
          className={`${
            router.pathname === "/multipleIdCards" && "bg-[#00467A] text-white"
          } rounded-lg px-5 py-2 text-lg font-semibold cursor-pointer`}
        >
          Multiple Cards
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
