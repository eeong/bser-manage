const fs = require('fs');
const path = require('path');

const getCharImg = () => {
		fs.readdir(path.join(__dirname, '../img/00.캐릭터'),'utf8',function(err,files){
			
		return files.json();
		})
	}
	
fs.readdir(path.join(__dirname, '../img/00.캐릭터'),(err,a)=>{console.log(JSON.stringify(a))});

module.export = {getCharImg}
