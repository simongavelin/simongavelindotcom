"use client";
import AnimatedLetters from "@/components/AnimatedLetters";
import ContactInfo from "@/components/ContactInfo";
import NameHeader from "@/components/NameHeader";
import ProfileImage from "@/components/ProfileImage";
import EmailIcon from "@/components/icons/EmailIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <NameHeader />
      <AnimatedLetters />
      <ProfileImage />
      <ContactInfo />
    </main>
  );
}
