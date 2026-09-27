import DarkModeToggle from "@/components/DarkModeToggle";
import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-5 py-10 sm:py-16">
      <div className="flex w-full justify-end">
        <DarkModeToggle />
      </div>
      <ProfileHeader />
      <LinkList />
    </main>
  );
}
