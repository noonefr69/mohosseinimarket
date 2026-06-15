import Hero from "@/components/landing/hero";
import Info from "@/components/landing/info";
import Container from "@/components/landing/asyncing/container";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container />
      <Info />
    </div>
  );
}
