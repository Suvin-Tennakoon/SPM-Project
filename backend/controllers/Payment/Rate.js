const Rate = require("../../models/Payment/Rate");

const rate = (req, res, next) => {
  const newRate = new Rate({
    rate1: 0,

    rate2: 0,

    rate3: 0,

    rate4: 0,

    rate5: 0,
  });

  newRate
    .save()
    .then((r) => {
      res.json(r);
    })
    .catch((err) => {
      res.json(err);
    });
 
};

module.exports = {rate}
