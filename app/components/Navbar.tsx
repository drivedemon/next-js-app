import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className="z-10 p-4 text-3xl font-bold bg-slate-600  flex flex-col sm:flex-row no-underline sm:justify-between justify-center sticky gap-y-2 drop-shadow-xl">
      <h1 className="flex justify-center items-center">
        <Link href='/'><span className="text-sky-400">NEXTJS</span>🎉</Link>
      </h1>
      <Search />
    </nav>
  )
}