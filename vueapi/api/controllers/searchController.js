const fetch = require('node-fetch');
const { response } = require('express');

exports.read_user_num = (req, res) => {
    fetch('https://open-api.bser.io/v1/user/nickname?query=%EB%8D%AB%EC%97%86%EB%8A%94%EC%82%AC%EB%9E%8C', {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb'
    }
}).then((response) => {
  response.json().then((data)=>{
    console.log(data)
    res.json(data);
  })
})}
