import { useCallback, useState } from "react";
import { createTweet } from "../lib/twitter";

type Props = {
  tweetIds: readonly string[];
};

export const EmbeddedTweetList: React.VFC<Props> = ({ tweetIds }) => {
  const [count, setCount] = useState(0);
  const loading = count < tweetIds.length;

  const ref = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        // reset
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
        setCount(0);
        // create
        tweetIds.forEach((tweetId) =>
          createTweet(node, tweetId).then(() => setCount((c) => c + 1))
        );
      }
    },
    [tweetIds]
  );

  return (
    <div>
      <p>count: {count}</p>
      {/* {loading && <p>loading...</p>} */}
      <div style={{ height: loading ? "0px" : "inherit" }}>
        <div ref={ref} />
      </div>
    </div>
  );
};
