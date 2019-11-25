const { Router } = require("express");
const router = Router();
const stripe = require("stripe")("SECRET_KEY");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/checkout", async (req, res) => {
  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  });
  const charge = await stripe.charges.create({
    amount: "3000",
    currency: "usd",
    customer: customer.id,
    description: "Software Securety"
  });
  console.log(" charge id", charge.id);
  //Final Response Succes or dowload.
  res.render("download");
});

module.exports = router;
