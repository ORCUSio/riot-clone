import { Link } from "react-router-dom";

const RiotGamesDropDownSiteMap = () => {
  const Data = {
    GAMES: [
      {
        title: "League of Legends",
        id: "League-of-legends",
      },
      {
        title: "Valorant",
        id: "Valorant",
      },
      {
        title: "TT",
        id: "TT",
      },
      {
        title: "LOL:WILD RIFT",
        id: "Wild-rift",
      },
    ],
    FORGE: [
      { title: "Game 1", id: "game-1" },
      { title: "Game 2", id: "game-2" },
      { title: "Game 3", id: "game-3" },
    ],
    ENTERTAINMENT: [
      { title: "Movie 1", id: "movie-1" },
      { title: "Movie 2", id: "movie-2" },
      { title: "TV Show 1", id: "tv-show-1" },
    ],
    ESPORTS: [
      { title: "Tournament 1", id: "Tournament-1" },
      { title: "Tournament 2", id: "Tournament-2" },
    ],
    BUSINESS: [
      { title: "Product 1", id: "product-1" },
      { title: "Product 2", id: "product-2" },
      { title: "Product 3", id: "product-3" },
    ],
  };

  // const sitemapHeadings = Object.keys(sitemapData);
  const HeadingData = Object.keys(Data); // I dont really understand this line

  return (
    <div className="grid grid-flow-col grid-rows-2 w-2/4">
      {HeadingData.map((heading, index) => (
        <div key={index} className="mx-1 mb-4">
          {/* Render the heading */}
          <div className="bg-slate-100 rounded-lg px-2 leading-6">
            {heading} {/* Display the heading */}
          </div>
          {/* Map through items under the current heading */}
          {Data[heading].map((items, itemIndex) => (
            <Link
              to={`/${items.id}`}
              key={itemIndex}
              className="block px-2 cursor-pointer leading-6 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 text-black no-underline"
            >
              {items.title} {/* Display the item title */}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RiotGamesDropDownSiteMap;
