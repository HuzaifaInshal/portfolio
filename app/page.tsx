'use client'

import dynamic from "next/dynamic";


const LandingPageView = dynamic(() => import('@/views/landing-page.view'), { ssr: false })

const page = () => {
  return <LandingPageView />;
};

export default page;
