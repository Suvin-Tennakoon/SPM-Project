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

const addRate = (req, res) => {
    const number = req.params.number;

    if (number === 1) {
      Rate.findById("6349c86c9718332b76ad0489").then((x) => {
        Rate.findByIdAndUpdate("6349c86c9718332b76ad0489", {
          $set: { rate1: x.rate1 + 1 },
        });
      });
    } else if (number === 2) {
      Rate.findById("6349c86c9718332b76ad0489").then((x) => {
        Rate.findByIdAndUpdate("6349c86c9718332b76ad0489", {
          $set: { rate2: x.rate2 + 1 },
        });
      });
    } else if (number === 3) {
      Rate.findById("6349c86c9718332b76ad0489").then((x) => {
        Rate.findByIdAndUpdate("6349c86c9718332b76ad0489", {
          $set: { rate3: x.rate3 + 1 },
        });
      });
    } else if (number === 4) {
      Rate.findById("6349c86c9718332b76ad0489").then((x) => {
        Rate.findByIdAndUpdate("6349c86c9718332b76ad0489", {
          $set: { rate4: x.rate4 + 1 },
        });
      });
    } else if (number === 5) {
      Rate.findById("6349c86c9718332b76ad0489").then((x) => {
        Rate.findByIdAndUpdate("6349c86c9718332b76ad0489", {
          $set: { rate5: x.rate5 + 1 },
        });
      });
    }
  };

module.exports = { rate, addRate };
