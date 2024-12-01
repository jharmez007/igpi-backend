const wakeServer = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      throw new Error('Missing URL in request body');
    }

    res.status(200).json({
      success: true,
      message: `Server is awake!`,
      data: url,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  wakeServer,
};
