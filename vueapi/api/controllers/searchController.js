const fetch = require('node-fetch');
const qs = require('querystring');
const fs = require('fs');
const path = require('path')


/********** Read item data ************/ 

const weapon = (JSON.parse((fs.readFileSync(path.join(__dirname,'../assets/ItemWeapon.json'), 'utf8')))).data;
const armor = (JSON.parse((fs.readFileSync(path.join(__dirname,'../assets/ItemArmor.json'), 'utf8')))).data;
const charList = (fs.readFileSync(path.join(__dirname,'../assets/character'), 'utf8')).split(',');

const getValidItem = function(item) {
  return Object.fromEntries(Object.entries(item).filter((v)=>{return v[1] !== 0})) 
}

const getItem = function(ctgr, itemcode) {
  return getValidItem(ctgr.filter((v)=>{
    if(v.code == itemcode) return v;
    else return '';
  })[0])
}


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
      data.userGames[i].item = [];
      data.userGames[i].characterSrc = charList[data.userGames[i].characterNum-1].slice(1,-1)
      for(var j in data.userGames[i].equipment){
        if (data.userGames[i].equipment[j].toString()[0] == 1 ) data.userGames[i].item[j]=(getItem(weapon, data.userGames[i].equipment[j])) ; 
        else data.userGames[i].item[j]=(getItem(armor, data.userGames[i].equipment[j])) ; 
      }
    }
    console.log(data.userGames[1].item)
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
  res.json(data);
})
})})
}).catch(function(error){
console.log("There has been error with fetch operation",error.message);
res.send('api와 연결이 원활하지 않습니다. 잠시 후 시도해주세요.')
})};