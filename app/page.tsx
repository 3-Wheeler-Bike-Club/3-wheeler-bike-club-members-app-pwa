import { Header } from "@/components/landing/header";
import { Login } from "@/components/landing/login";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <Login/>
    </div>
  );
}
