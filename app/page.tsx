"use client";
import AnimatedLetters from "@/components/AnimatedLetters";
import ContactInfo from "@/components/ContactInfo";
import NameHeader from "@/components/NameHeader";
import ProfileImage from "@/components/ProfileImage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xl:px-4">
      <NameHeader />
      <AnimatedLetters />
      <ProfileImage />
      <ContactInfo />
    </main>
  );
}
