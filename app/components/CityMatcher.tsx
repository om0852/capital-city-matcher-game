"use client";
import React, { useEffect, useState } from "react";
interface Match {
  country: string;
  capital: string;
}

//TODO:get this data from the backend
const preMatchedData = [
    { country: "Canada", capital: "Ottawa" },
    { country: "Australia", capital: "Canberra" },
    { country: "Germany", capital: "Berlin" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Brazil", capital: "Brasília" },
    { country: "Italy", capital: "Rome" },
    { country: "South Africa", capital: "Pretoria" },
    { country: "Russia", capital: "Moscow" },
    { country: "China", capital: "Beijing" },
    { country: "Mexico", capital: "Mexico City" },
  ];
  

const shuffleArray = (matchingData: Match[]) => {
  return matchingData.slice().sort(() => Math.random() - 0.5);
};
const CityMatcher = () => {
  const [shuffleMatchData, setShuffleMatchedData] =
    useState<Match[]>(preMatchedData);
  const [pairedData, setPairedData] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  useEffect(() => {
    setShuffleMatchedData(shuffleArray(preMatchedData));
  }, []);

  const handlecapitalQuick = (match: Match) => {
    if (match === selectedMatch) {
      const newPairedMatch = [...pairedData, match];
      setPairedData(newPairedMatch);
    }
    // console.log(pairedData)
    setSelectedMatch(null);
  };
  const isMatched = (match: Match) =>
    pairedData.some((paired) => paired === match);

  const win = pairedData.length === preMatchedData.length;
  return (
    <>
      {win && (
        <h2 className="absolute text-2xl font-bold text-green-500 ">
          You Win!
        </h2>
      )}{" "}
      <div className="flex gap-5 mt-[2vh] h-[100vh]">
        <div className="flex flex-col gap-2">
          {preMatchedData.map((match, index) => (
            <button
              onClick={() => {
                setSelectedMatch(match);
              }}
              className={`${
                isMatched(match)
                  ? "bg-green-500"
                  : selectedMatch == match
                  ? "bg-gray-700"
                  : "bg-gray-500"
              }  rounded px-4 py-2 text-white font-bold 
            hover:bg-gray-700  hover:scale-105 transition ease-in duration-300
            `}
              key={index}
            >
              {match.country}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {shuffleMatchData?.map((match, index) => (
            <button
              disabled={selectedMatch == null}
              onClick={() => handlecapitalQuick(match)}
              className={`${
                isMatched(match)
                  ? "bg-green-500 hover:bg-green-700 "
                  : "bg-gray-500 hover:bg-gray-700 "
              } rounded px-4 py-2 text-white font-bold 
            hover:scale-105 transition ease-in duration-300 disabled:cursor-not-allowed
            `}
              key={index}
            >
              {match.capital}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CityMatcher;
