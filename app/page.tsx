import Link from 'next/link'

export default function Home() {
  return (
    <main className="text-white">
      <h1>Home Page</h1>
      <p>
        <Link href='/about'>Go to ABOUT PAGE</Link>
      </p>
      <p>
        <Link href='/users'>Go to USERS PAGE</Link>
      </p>
    </main>
  )
}
