const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("./uploads"));

mongoose
  .connect(
    "mongodb+srv://spm-cake_Y3S2:pwdspmcakeY3S2@cluster0.wa4tszq.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Mongo DB Connected");
  }).catch(err=>[
    console.log(err)
  ]);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is Running");
});


const orderRoutes = require('./routes/order.router');
app.use('/api/orders', orderRoutes);

const customerRoutes = require('./routes/customer.router');
app.use('/api/customers', customerRoutes);

const shopRoutes = require('./routes/shop.router');
app.use('/api/shops', shopRoutes);

const paymentRoutes = require('./routes/payment.router');
app.use('/api/payments', paymentRoutes);
