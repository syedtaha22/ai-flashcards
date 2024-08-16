'use client';

import LandingPage from "./landing-page/page";
import WaitlistPage from "./waitlist/page";

import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  if (pathname === "/waitlist") {
    return <WaitlistPage />
  }

  return <LandingPage />;
}

export default Page;