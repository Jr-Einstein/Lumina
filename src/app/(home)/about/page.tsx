export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">About Lumina</h1>
      <p className="text-lg text-center max-w-3xl mb-12">
        Lumina was founded with the mission to make AI accessible for everyone.  
        Our goal is to empower creators, developers, and businesses to build amazing apps faster.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>Democratize AI-powered development for all creators.</p>
        </div>
        <div className="bg-[#111] border border-gray-700 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>A world where building software is as simple as having a conversation.</p>
        </div>
      </div>
    </main>
  )
}
