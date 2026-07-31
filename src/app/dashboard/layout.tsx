import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* {LEFT DIV} */}
      <div className="w-1/6 md:w-[8%] lg:w-1/6 xl:w-1/6 bg-blue-100">
      <Link href="/" className="flex items-center gap-2 p-4">
      <span className="hidden lg:block">Make Math Simple</span></Link>
      <Menu />
      </div>
      {/* RIGHT DIV */}
      <div className="w-5/6 md:w-[92%] lg:w-5/6 xl:w-5/6 overflow-scroll">
      <Navbar />
      {children}
      </div>
      </div>

  );
}
