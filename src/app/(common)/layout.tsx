import Providers from "@/components/Providers/Providers";
import Footer from "@/components/shared/Footer/Footer";
import MainNavbar from "@/components/shared/Navbar/Dasktop/MainNavbar";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Providers>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          showSpinner={false}
        />
        <MainNavbar />
        {children}
        <Footer />
      </Providers>
    </div>
  );
};

export default CommonLayout;
