
const config=require("../config/db.config.js")
const Sequelize=require('sequelize');

/*
 * Creating the db connection
*/

const sequelize=new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host:config.HOST,
        dialect:config.diealect
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
const db={  
};
sequelize.sync()
  .then(() => {
    console.log('Tables have been created (if not exist) successfully.');
  })
  .catch((err) => {
    console.error('Unable to synchronize tables:', err);
  });
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.books=require('./book.model.js')(db.sequelize,Sequelize)

module.exports=db;