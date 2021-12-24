import { useCallback, useState } from "react";
import { createTweet } from "../lib/twitter";

type Props = {
  tweetIds: readonly string[];
  row: number;
};

export const EmbeddedTweetListMultiRow: React.VFC<Props> = ({
  tweetIds,
  row = 2,
}) => {
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
        [...Array(row)].forEach(() => {
          node.appendChild(document.createElement("div"));
        });
        tweetIds.forEach((tweetId, i) =>
          createTweet(node.children[i % row] as HTMLDivElement, tweetId).then(
            () => setCount((c) => c + 1)
          )
        );
      }
    },
    [tweetIds, row]
  );

  return (
    <div>
      <p>count: {count}</p>
      <p>row: {row}</p>
      {loading && <p>loading...</p>}
      <div style={{ opacity: loading ? 0 : 1 }}>
        <div ref={ref} style={{ display: "flex" }} />
      </div>
    </div>
  );
};
