function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎮</span>
        <span className="text-xl font-bold text-white tracking-wide">
          GameVault
        </span>
      </div>
      <div className="flex items-center gap-6 text-gray-400 text-sm">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <a href="#games" className="hover:text-white transition-colors">Games</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
      </div>
    </nav>
  )
}

export default Navbar