// pages/index.jsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
        <Image src="/profile.jpg" alt="Profile" width={160} height={160} />
      </div>
      <h1 className="text-3xl font-bold">Your Name</h1>
      <p className="text-gray-500">📍 Your Country • 🛠️ Your Focus</p>
      <p className="mt-2">Your tagline goes here.</p>
      <div className="flex space-x-4 mt-4">
        {/* Social Media Icons */}
        <a href="https://youtube.com" target="_blank">📹</a>
        <a href="https://x.com" target="_blank">🕊️</a>
        <a href="https://linkedin.com" target="_blank">🔗</a>
        <a href="https://instagram.com" target="_blank">📷</a>
      </div>
      <button className="bg-black text-white px-4 py-2 mt-4 rounded-md">
        Select a page...
      </button>
    </div>
  );
}
