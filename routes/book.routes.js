
const {create,Delete,update,findAll,findOne}=require("../controller/book.controller");
const {bookValidation}=require('../middleware/book.middleware')
module.exports=function(app){
    app.post('/api/book',bookValidation,create);

    app.get('/api/book',findAll);

    app.get('/api/book/:id',findOne);

    app.put('/api/book/:id',update);

    app.delete('/api/book/:id',Delete);
}