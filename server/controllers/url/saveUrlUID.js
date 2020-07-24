import { Url } from "../../models/url.model";
import { encodeURL, cleanUrl, setUniqueSerializer } from "./helpers";

/**
 * This method will create an Id,
 * will check whether it exists in the db
 * and regenerate it if it's positive, otherwise, save it to db.
 * @param {*} req
 * @param {*} res
 */

export const saveUrlUID = async (req, res) => {
  // req.input is the input string the user wants to save
  let newUrl = {
    url: req.body.url,
    serializer: encodeURL(cleanUrl(req.body.url)),
  };

  try {
    const userUrlExists = await Url.findOneAndUpdate(
      { ...newUrl },
      { $set: { ...newUrl, timeStamp: Date.now() } },
      { useFindAndModify: true }
    );

    if (userUrlExists)
      return res.json({ ...userUrlExists.toObject(), exists: true });

    cleanUrl(newUrl.url);

    const uniqueUrl = await setUniqueSerializer(newUrl);

    return res.json(uniqueUrl);
  } catch (err) {
    return err;
  }
};
