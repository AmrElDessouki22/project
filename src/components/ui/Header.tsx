import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <a className="text-3xl font-bold text-blue-600">My Note App</a>
        </Link>
      </div>
    </header>
  )
}