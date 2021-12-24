import type { NextPage } from "next";
import { EmbeddedTweet } from "../components/EmbeddedTweet";
import { EmbeddedTweetList } from "../components/EmbeddedTweetList";
import { TWEET_IDS } from "../lib/data";

const Page: NextPage = () => {
  return (
    <div>
      <h1>tweet list</h1>
      <EmbeddedTweetList tweetIds={TWEET_IDS} />
      {/* <div>
        {TWEET_IDS.map((tweetId, i) => (
          <EmbeddedTweet key={i} tweetId={tweetId} />
        ))}
      </div> */}
    </div>
  );
};

export default Page;
