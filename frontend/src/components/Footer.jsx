function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 px-6 py-6 text-center text-gray-500 text-sm">
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-lg">🎮</span>
        <span className="text-white font-semibold">GameVault</span>
      </div>
      <p>Your one-stop destination for the best games across all platforms.</p>
      <p className="mt-2 text-gray-600">
        © {new Date().getFullYear()} GameVault. Built on AWS.
      </p>
    </footer>
  )
}

export default Footer