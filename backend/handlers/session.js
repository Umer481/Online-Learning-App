const { db } = require("../util/admin");

const { isValidParamId } = require("../util/validators");

exports.createSession = (req, resp) => {
  const obj = [];

  return resp.status(200).json(obj);
};

exports.getSession = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const obj = [];
  return resp.status(200).json(obj);
};

exports.deleteSession = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const obj = [];
  return resp.status(200).json(obj);
};

exports.updateSessionStatus = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const obj = [];
  return resp.status(200).json(obj);
};
