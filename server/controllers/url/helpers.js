import hash from "hash36";
import { Url } from "../../models/url.model";

/**
 * EncodeURL:
 * I am using a hash to try and avoid collisions. Of any hash,
 * SHA256 is the one that would provide with lowercase alphanumeric digits
 * and I take the first 8 characters.
 * Because of its encoding, I also am avoiding collision even if the url's
 * start with the same characters (google.com/asdfasdf, google.com/12340asASDF should give
 * different sbstr.)
 * @param {string} value: is the users url to encode.
 */
export const encodeURL = (value) => hash.sha256(value).substr(0, 8);

/**
 * CleanURL:
 * is the function I want to use to clean the url to enconde with no
 * http // https // www
 * @param {string} newUrl url input by the user
 */
export const cleanUrl = (inputUrl) =>
  inputUrl.replace(/(http|https):\/\//, "").replace(/www\./, "");

/**
 * SetUniqueSerializer:
 * will keep trying to create unique serializers if it finds
 * a duplicate.
 * @param {string} userInput: this is the part we want to save, the serialized
 * URL.
 */
export const setUniqueSerializer = async (newUrl) => {
  // req.input would potentially be the input string the user wants to save
  let url = new Url(newUrl);

  return url.save().catch((error) => {
    if (error.code === 11000) {
      return setUniqueSerializer({
        ...newUrl,
        serializer: encodeURL(cleanUrl(newUrl.url) + Date.now()),
      });
    }
    return Promise.reject(error);
  });
};
