import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { LuLogOut } from "react-icons/lu";

function Menu() {
  return (
    <div className="mt-2 text-sm">
      <div className="flex flex-col gap-2 mx-auto gap-y-2">
        <span className="p-4 text-gray-400 hidden lg:block">MENU</span>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <BiHome size={20} />
          <span className="hidden lg:block text-gray-600">Home</span>
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <BiHome size={20} />
          <span className="hidden lg:block text-gray-600">Home</span>
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <BiHome size={20} />
          <span className="hidden lg:block text-gray-600">Home</span>
        </Link>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <BiHome size={20} />
          <span className="hidden lg:block text-gray-600">Home</span>
        </Link>
        <span className="p-4 text-gray-400 hidden lg:block">OTHER</span>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <FcSettings size={20} />
          <span className="hidden lg:block text-gray-600">Settings</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 py-2 text-gray-500"
        >
          <LuLogOut size={20} />
          <span className="hidden lg:block text-gray-600">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
