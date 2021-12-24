declare global {
  interface Window {
    twttr: any;
  }
}

// The code snippet below will insert Tweet into a page
// inside an element with a unique ID of container.
// ref. https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-javascript-factory-function
export const createTweet = (
  target: HTMLElement,
  tweetId: string
): Promise<void> => {
  if (window?.twttr) {
    return window.twttr.widgets.createTweet(tweetId, target);
  }
  return Promise.reject();
};
