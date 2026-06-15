const pdf = require("pdf-parse");
const fs = require("fs");

async function parseResume(path){

const dataBuffer = fs.readFileSync(path);

const data = await pdf(dataBuffer);

return data.text;

}

module.exports=parseResume;