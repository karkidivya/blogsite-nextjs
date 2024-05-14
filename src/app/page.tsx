import { CardWithForm } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  items-center justify-around  mt-5 flex-wrap">
    <CardWithForm/>
    <CardWithForm/>
    <CardWithForm/>
    <CardWithForm/>
    </main>
  );
}
