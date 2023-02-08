import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 p-4">
      <p
        className="font-md text-center"
      >
        Made by <Link href={'https://github.com/akhtersoyeb'} className="text-white">akhtersoyeb</Link> with ❤️
      </p>
    </footer>
  )
}
