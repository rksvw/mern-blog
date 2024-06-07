function getTest(req, res) {
  res.json({
    message: "Api is working",
  });
}

module.exports = { getTest };