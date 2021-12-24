import type { NextPage } from "next";
import { TWEET_IDS } from "../lib/data";
import { useState } from "react";
import { EmbeddedTweetListMultiRow } from "../components/EmbeddedTweetListMultiRow";

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomElement = (arr: readonly any[]) =>
  arr[randomInt(0, arr.length - 1)];

const Page: NextPage = () => {
  const [row, setRow] = useState(2);
  const [tweetIds, setTweetIds] = useState([
    randomElement(TWEET_IDS),
    randomElement(TWEET_IDS),
  ]);

  const changeRow = () => {
    setTweetIds([...TWEET_IDS]);
    setRow(randomInt(1, 3));
  };

  const changeTweetIds = () => {
    setTweetIds([
      randomElement(TWEET_IDS),
      randomElement(TWEET_IDS),
      randomElement(TWEET_IDS),
    ]);
  };

  return (
    <div>
      <h1>tweet list</h1>
      <button onClick={changeTweetIds}>Change Tweet Ids</button>
      <button onClick={changeRow}>Change Row</button>
      <EmbeddedTweetListMultiRow tweetIds={tweetIds} row={row} />
    </div>
  );
};

export default Page;
