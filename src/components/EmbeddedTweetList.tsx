import { useEffect, useRef, useState } from "react";
import { createTweet } from "../lib/twitter";

type Props = {
  tweetIds: readonly string[];
};

export const EmbeddedTweetList: React.VFC<Props> = ({ tweetIds }) => {
  const [unloadTweetIds, setUnloadTweetIds] = useState(tweetIds);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = ref.current;
    if (parent !== null) {
      tweetIds.forEach((tweetId) => {
        const div = document.createElement("div");
        createTweet(div, tweetId).then(() => {
          setUnloadTweetIds((prev) => prev.filter((x) => x !== tweetId));
        });
        parent.appendChild(div);
      });
    }
  }, [tweetIds]);

  return (
    <div>
      <p>[debug] unloadTweetIds: {JSON.stringify(unloadTweetIds)}</p>
      {unloadTweetIds.length > 0 && <p>loading....</p>}
      <div
        ref={ref}
        style={{ display: unloadTweetIds.length > 0 ? "hidden" : "inherit" }}
      />
    </div>
  );
};
