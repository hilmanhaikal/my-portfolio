import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <Image
        src="/favicon.ico"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold mt-4">Your Name</h1>
      <p className="text-lg text-gray-500 mt-2">📍 Your Country • 🛠️ Tech Enthusiast</p>
      <p className="mt-4 max-w-md">
        I am a Rust developer who loves coding and sharing tech knowledge.
      </p>
      <a
        href="/tech"
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
      >
        Explore Tech
      </a>
    </main>
  );
}
