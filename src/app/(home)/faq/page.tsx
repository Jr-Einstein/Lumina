export default function FAQPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="max-w-3xl space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Is Lumina free to use?</h2>
          <p className="text-gray-400">Yes, you can start for free. Paid plans unlock more features.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Do I need coding skills?</h2>
          <p className="text-gray-400">No — Lumina generates projects from your prompts.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can I deploy my projects?</h2>
          <p className="text-gray-400">Yes, you can deploy directly or export your code.</p>
        </div>
      </div>
    </main>
  )
}
