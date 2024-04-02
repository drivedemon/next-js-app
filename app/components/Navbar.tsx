import Link from 'next/link'
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="p-4 text-3xl font-bold bg-slate-600 text-sky-400 flex flex-col sm:flex-row sm:justify-between justify-center sticky gap-y-2">
      <h1 className="flex justify-center">
        <Link href='/'>WIKI!</Link>
      </h1>
      <Search />
    </nav>
  )
}