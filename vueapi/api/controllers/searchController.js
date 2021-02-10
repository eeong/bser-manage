const fetch = require('node-fetch');
const qs = require('querystring');
const fs = require('fs');
const path = require('path')

var charList = (fs.readFileSync(path.join(__dirname,'../assets/character'), 'utf8')).split(',');
exports.read_rank = (req, res) => {
  let rankMode = req.query.m;
  fetch(`https://open-api.bser.io/v1/rank/top/1/`+rankMode, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then( ( response ) => {
  response.json().then((data) => {
    res.json(data.topRanks.slice(0,10));
  })
}).catch( function(error) {
  console.log("There has been error with fetch operation",error.message)});
};

exports.read_user_num = async (req, res) => {
    let userQ = qs.escape(req.params.user);
    await fetch(`https://open-api.bser.io/v1/user/nickname?query=${userQ}`, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then(async (response) => {
  await response.json().then( (data)=>{
    fetch(`https://open-api.bser.io/v1/user/games/${data.user.userNum}`, {
    headers: {
        'accept': 'application/json',
        'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
    }
}).then( ( response ) => {
  response.json().then((data)=>{
    for(var i in data.userGames){
      data.userGames[i].characterFile =`../assets/static/img/00.캐릭터/`+(charList[data.userGames[i].characterNum-1].slice(1,-1))
    }
    console.log( data.userGames[0].characterFile)
    res.json(data);
  })
})})
}).catch(function(error){
  res.send('api와 연결이 원활하지 않습니다. 잠시 후 시도해주세요.')
  console.log("There has been error with fetch operation",error.message);
})};

exports.read_user_rank = (req, res) => {
  console.log(req.params)
  let userQ = qs.escape(req.params.user);
  let gameMode = req.params.mode
  fetch(`https://open-api.bser.io/v1/user/nickname?query=${userQ}`, {
  headers: {
      'accept': 'application/json',
      'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
  }
}).then((response) => {

response.json().then((data)=>{
  fetch(`https://open-api.bser.io/v1/rank/${data.user.userNum}/1/${gameMode}`, {
  headers: {
      'accept': 'application/json',
      'x-api-key': 'LbuEDSHA7s4fvNCGJOcQO7ZcYuQqKdip8kF8jtIb',
  }
}).then( ( response ) => {
response.json().then((data)=>{
  data.userRank.mode = gameMode;
  console.log(data);

  res.json(data);
})
})})
}).catch(function(error){
console.log("There has been error with fetch operation",error.message);
res.send('api와 연결이 원활하지 않습니다. 잠시 후 시도해주세요.')
})};