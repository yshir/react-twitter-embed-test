import { useEffect, useRef } from "react";
import { createTweet } from "../lib/twitter";

type Props = {
  tweetId: string;
};

export const EmbeddedTweet: React.VFC<Props> = ({ tweetId }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      createTweet(ref.current, tweetId);
    }
  }, [tweetId]);

  return <div ref={ref} />;
};
