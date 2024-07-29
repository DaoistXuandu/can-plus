"use client"
import FAQ from "./components/dashboard/faq";
import Footer from "./components/dashboard/footer";
import Intro from "./components/dashboard/intro";
import Launching from "./components/dashboard/launching";
import Location from "./components/dashboard/location";
import NavBar from "./components/dashboard/navBar";
import Review from "./components/dashboard/review";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#ECF0F1", backgroundRepeat: "no-repeat"
    }} className="min-h-screen text-black background-image">
      <div className="md:p-12 md:pl-20 md:pr-20">
        <NavBar />
        <div className="flex flex-col space-y-48">
          <Intro />
          <Launching />
          <Location />
          <Review />
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}
