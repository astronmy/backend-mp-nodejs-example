const {mercadopago} = require('../utils/mercadopago.js')

const createPreference = async(req,res) =>{
   const items = req.body.items.map(item => {
    const{title, price:unit_price, quantity} = item
    return {title, unit_price, quantity}
  })
  let preference = {
    items,
    statement_descriptor: "Camada3DH",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json(
        {global: response.body.id}
      )
    })
    .catch(function (error) {
      console.log(error);
    });
} 

module.exports = {
  createPreference
}