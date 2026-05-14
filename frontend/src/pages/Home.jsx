import GameGrid from '../components/GameGrid'

const mockGames = [
  {
    id: 1,
    game_name: 'Elden Ring',
    description: 'An open world action RPG set in the Lands Between. Crafted by Hidetaka Miyazaki and George R.R. Martin.',
    price: '59.99',
    platform: 'PC / PS5 / Xbox',
    buy_link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
  },
  {
    id: 2,
    game_name: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Ragnarök approaches.',
    price: '69.99',
    platform: 'PS5',
    buy_link: 'https://www.playstation.com/en-us/games/god-of-war-ragnarok/'
  },
  {
    id: 3,
    game_name: 'Cyberpunk 2077',
    description: 'An open-world action adventure set in Night City, a megalopolis obsessed with power and body modification.',
    price: '39.99',
    platform: 'PC / PS5 / Xbox',
    buy_link: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/'
  },
  {
    id: 4,
    game_name: 'Hogwarts Legacy',
    description: 'An immersive open world RPG set in the world of Harry Potter. Experience Hogwarts in the 1800s.',
    price: '49.99',
    platform: 'PC / PS5 / Xbox',
    buy_link: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/'
  },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="text-center py-16 px-6 bg-gradient-to-b from-purple-950/40 to-gray-950">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Find Your Next Game
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Browse top titles across all platforms and jump straight to where you can buy them.
        </p>
      </div>

      {/* Game Grid */}
      <div id="games">
        <GameGrid games={mockGames} />
      </div>
    </div>
  )
}

export default Home