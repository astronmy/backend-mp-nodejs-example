const { mercadopago } = require('../utils/mercadopago.js')

const createPreference = async (req, res) => {
  const items = req.body.items.map(item => {
    const { title, price: unit_price, quantity, image: picture_url } = item
    const description = title
    return { title, unit_price, quantity, description, picture_url }
  })
  let preference = {
    items,
    back_urls: {
      success: "https://www.google.com",
      failure: "https://www.digitalocean.com/",
    },
    payment_methods: {
      installments: 1
    },
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json(
        { global: response.body.id }
      )
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
  createPreference
}