import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row px-[3%] py-[2%] text-center items-center">
      {/* Logo */}
      <div className="flex flex-1">
        <Link href="/">
          <Image src="/logo.png" alt="VeriFund" width={50} height={50} />
        </Link>
        <Link href="/">
          <p className="text-4xl font-semibold text-emerald-700">
            Veri<span className="text-emerald-200">Fund</span>
          </p>
        </Link>
      </div>

      {/* Links */}
      <div className="flex flex-1 justify-center gap-6 text-nowrap">
        <Link href="/campaigns">Explore Campaigns</Link>
        <Link href="/how-it-works">How It Works</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Login & CTA */}
      <div className="flex flex-1 gap-4 justify-end">
        <Link
          href="/login"
          className="border text-gray-500 bg-white border-emerald-400 rounded-sm px-2 py-2"
        >
          Log in
        </Link>
        <Link href="/register" className="text-white bg-emerald-400 rounded-sm px-2 py-2">
          Start a campaign
        </Link>
      </div>
    </nav>
  );
}
