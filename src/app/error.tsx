'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <h2 className="text-xl font-bold">Something went wrong!</h2>
        <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Try again
        </button>
      </div>
    </div>
  )
}