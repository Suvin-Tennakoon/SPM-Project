const Review = require('../../models/Customer/UserReview');

const saveReview = async (req, res) => {

    const review = req.body;

    const newReview = new Review({ ...review, creater: req.orderId });
    console.log("Saved review: ", newReview);

    try {

        await newReview.save();
        res.status(200).json({ newReview });
    }
    catch (err) {

        res.status(400).json({ message: err.message });
    }
};

module.exports = { saveReview }