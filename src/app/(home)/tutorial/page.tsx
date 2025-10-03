export default function TutorialPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Lumina Tutorial</h1>
      <p className="text-lg text-center max-w-3xl mb-12">
        Learn how to use Lumina step by step.
      </p>

      <ol className="list-decimal list-inside text-left max-w-2xl space-y-4">
        <li>Sign up for a Lumina account.</li>
        <li>Log in and enter your first project idea.</li>
        <li>Explore generated projects and customize them.</li>
        <li>Upgrade to Pro for advanced features and faster builds.</li>
      </ol>
    </main>
  )
}
