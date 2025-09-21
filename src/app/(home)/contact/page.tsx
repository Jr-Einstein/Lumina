export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mb-12">
        Have questions or feedback? We’d love to hear from you.
      </p>

      <div className="text-center space-y-4">
        <p>Email: <a href="mailto:support@lumina.ai" className="text-blue-500">support@lumina.ai</a></p>
        <p>Twitter: <a href="https://twitter.com" className="text-blue-500">@LuminaAI</a></p>
        <p>GitHub: <a href="https://github.com" className="text-blue-500">github.com/lumina</a></p>
      </div>
    </main>
  )
}
