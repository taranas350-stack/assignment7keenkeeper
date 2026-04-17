import BannerPage from "@/components/Banner";
import FriendsPage from "@/components/Friends";

export default function Home() {
  return (
    <div >
      <main className="bg-[#f8fafc]">
        <BannerPage/>
        <FriendsPage/>
      </main>
    </div>
  );
}
