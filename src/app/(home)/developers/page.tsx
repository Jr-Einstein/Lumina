export default function DevelopersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Meet the Developers</h1>
      <p className="text-lg text-center max-w-3xl mb-12">
        Lumina was built with passion by a dedicated team of developers.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Alice</h2>
          <p>Frontend Engineer — designs clean, modern UIs.</p>
        </div>
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Bob</h2>
          <p>Backend Engineer — builds fast, scalable APIs.</p>
        </div>
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Charlie</h2>
          <p>AI Specialist — optimizes models for best results.</p>
        </div>
      </div>
    </main>
  )
}
