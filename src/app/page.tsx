import HeroSection from "@/UI/Components/HeroSection";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <section className="max-w-7xl w-full">
        <HeroSection />
      </section>
    </main>
  );
}
