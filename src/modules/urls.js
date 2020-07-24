import config from "../config";

export const sendUrl = (url) => {
  return fetch(config.saveUrl, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url: url,
    }),
  }).then((res) => res.json());
};
