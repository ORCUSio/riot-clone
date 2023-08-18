const RiotGamesDropDownSiteMap = () => {
  const sitemapData = {
    GAMES: ["LOL", "VAL", "TT", "LOL:WILD RIFT"],
    FORGE: ["Game 1", "Game 2", "Game 3"],
    ENTERTAINMENT: ["Movie 1", "Movie 2", "TV Show 1"],
    ESPORTS: ["Tournament 1", "Tournament 2"],
    BUSINESS: ["Product 1", "Product 2", "Investment"],
  };

  const sitemapHeadings = Object.keys(sitemapData); // I dont really understand this line
  console.log(sitemapHeadings);

  return (
    <div className="grid grid-flow-col grid-rows-2 w-2/4">
      {sitemapHeadings.map((heading, index) => (
        <div key={index} className="mx-1 mb-4">
          <div className="bg-slate-100 rounded-lg px-2 leading-6">
            {heading}
          </div>
          {sitemapData[heading].map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="px-2 cursor-pointer leading-6 hover:bg-gray-300"
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RiotGamesDropDownSiteMap;
