module.exports = {
    eApi: {
        getTest: (req, res) => console.log("/exchange url test OK"),
        
        // getTest3: (req, res) => console.log("/user url test ok")
    },
    
    wApi: {
        getTest: (req, res) => console.log("/mywallet url test ok")
    }
    
};