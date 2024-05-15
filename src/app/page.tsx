'use client'
import { CardWithForm } from "@/components/Card";
import Image from "next/image";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { login, isAuthenticated } = useAuth();
  

  return (
    <main className="flex  items-center justify-around  mt-5 flex-wrap">
    <CardWithForm/>
    <CardWithForm/>
    <CardWithForm/>
    <CardWithForm/>
    </main>
  );
}
