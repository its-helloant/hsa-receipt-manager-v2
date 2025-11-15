import Image from "next/image";
import { ImagePreview } from "./components/ImagePreview";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-violet-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <ImagePreview />
      </main>
    </div>
  );
}
