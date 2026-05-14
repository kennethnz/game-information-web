function GameCard({ game }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      
      {/* Game Image Placeholder */}
      <div className="bg-gray-800 h-48 flex items-center justify-center">
        <span className="text-6xl">🎮</span>
      </div>

      {/* Game Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-white font-bold text-lg">{game.game_name}</h2>
          <span className="text-purple-400 font-semibold">${game.price}</span>
        </div>

        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
          {game.platform}
        </span>

        <p className="text-gray-400 text-sm mt-3 line-clamp-3">
          {game.description}
        </p>

        <a
          href={game.buy_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          Buy Now →
        </a>
      </div>
    </div>
  )
}

export default GameCard