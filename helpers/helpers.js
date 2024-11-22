const axios = require("axios");
const crypto = require("crypto");

const initializeTransaction = async (data) => {
  try {
    const response = await axios.post(
      `https://api.paystack.co/transaction/initialize`,
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const verifySignature = (body, signature) => {
  const hmac = crypto.createHmac("sha512", process.env.SECRET_KEY);
  const expectedSignature = hmac.update(JSON.stringify(body)).digest("hex");
  return expectedSignature == signature;
};

module.exports = {
  verifySignature,
  initializeTransaction,
};
