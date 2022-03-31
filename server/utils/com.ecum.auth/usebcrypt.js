const bcrypt = require("bcrypt");
const saltRounds = process.env.bcryptsalt || 10;
module.exports = {

    gethash: async (i)=>{
        return new Promise((resolve, reject)=>{
            bcrypt.genSalt(saltRounds, async (err, salt)=>{
                resolve(await bcrypt.hash( i.toString(), salt));
               })
        })
    },
    comparehash:async(a, b)=>{
        return new Promise((resolve, reject)=>{
            bcrypt.compare(a , b, async(err, result) =>{   
                console.log("reslove pwd value :", result); 
                resolve(result);        
            })
        })
}
}