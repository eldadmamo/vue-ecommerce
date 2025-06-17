const testing = async function(req,res){
    try{
        console.log('this is working online')  
        res.status(200).send('it works successfully motherlove')
    }  catch(error){
        console.log(`this is error ${error}`)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = 
    testing 
