// import { Url } from "../../models/url.model";

import { Url } from "../../models/url.model";

/**
 * This method will find the URL object
 * based on a name / string input by user
 * @param
 */

export const getUrlUID = async (req, res) => {
  const recentUrlList = await Url.find();

  return res.status(200).send(recentUrlList);
};
