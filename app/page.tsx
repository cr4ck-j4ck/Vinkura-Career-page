import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import RoleTypes from "@/components/sections/RoleTypes";
import OpenRolesCTA from "@/components/sections/OpenRolesCTA";
import Footer from "@/components/Footer";

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-white text-black min-h-screen pt-24">
        <Hero />
        <WhoWeAre />
        <RoleTypes />
        <OpenRolesCTA />
      </main>
      <Footer />
    </>
  );
}
