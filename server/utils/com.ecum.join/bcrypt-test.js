const bcrypt = require("bcrypt");
const saltRounds = 10;
let id = "test";
let pw = "1234";
let notpw = "4321";

bcrypt.genSalt(saltRounds, (err, salt)=>{
        //hash
        bcrypt.hash(pw, salt, (err, hash)=>{
                if(err) throw err;
                console.log("1", pw, hash);
        })
        
})
        
bcrypt.genSalt(saltRounds, async(err, salt)=>{
        //compare
        let hash = await bcrypt.hash(pw, salt);
        bcrypt.compare(pw, hash, (err, result)=>{
                console.log("2",pw, hash,  result);
        });
        
});