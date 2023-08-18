import React from "react";
import { Link } from "react-router-dom";

const DropDownNavbar = () => {
  const dropdownSections = [
    {
      title: "WHO WE ARE",
      items: ["About Riot", "Diversity & inclusion", "Social Impact"],
    },
    {
      title: "WORK WITH US",
      items: ["Jobs", "Benefits", "Office", "Life at Riot"],
    },
    // Add more sections here if needed
  ];
  return (
    <>
      <div className="px-6 py-2 flex">
        {dropdownSections.map((section, index) => (
          <div key={index} className="px-3 py-2 relative group">
            <div className="cursor-pointer hover:bg-slate-200 px-2 rounded-lg">
              <h2 className="text-lg font-semibold">{section.title}</h2>
            </div>
            <ul className="absolute hidden transform group-hover:block bg-gray-100 px-3 py-2 w-40">
              {section.items.map((item, itemIndex) => (
                <Link
                  to={item.replace(/\s+/g, "-")}
                  key={itemIndex}
                  className="hover:bg-slate-300 rounded-xl px-2 mb-1 text-black no-underline flex"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default DropDownNavbar;
