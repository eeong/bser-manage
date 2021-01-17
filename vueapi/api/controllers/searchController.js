const fetch = require('node-fetch');
const { response } = require('express');
const qs = require('querystring');


exports.read_user_num = async (req, res) => {
  console.log(req);
    let userQ = qs.escape(req.params);
    await fetch(`https://open-api.bser.io/v1/user/nickname?query=${userQ}`, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then((response) => {
  response.json().then((data)=>{
    console.log(data)
    res.json(data);
  })
}).catch(function(error){
  console.log("There has been error with fetch operation",error.message);
})}
