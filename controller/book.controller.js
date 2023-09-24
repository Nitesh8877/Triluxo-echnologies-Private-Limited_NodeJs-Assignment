const db=require('../model');

const Book=db.books

/**
 * Create and save new Books Items
 * 
 */

exports.create=(req,res)=>{

   const book={
    title:req.body.title,
    author:req.body.author,
    published:req.body.published,
    publisher:req.body.publisher
   }
   Book.create(book)
   .then(books=>{
        res.status(201).send({
            message:"Book add successfully!",
            data:books
        });
   })
   .catch(err=>{
    res.status(500).send({
        message:"something went wrong"
    })
   })    
}


/**
 * Get all Books items
 */

exports.findAll=(req,res)=>{

    let promise=Book.findAll();

    promise
    .then(books=>{
        res.status(201).send({
            message:"Get all books successfully",
            data:books
        });
   })
   .catch(err=>{
    res.status(500).send({
        message:"some internal error"
    })
   })


}

/**
 * Get a Book based on the id
 */


exports.findOne=(req,res)=>{
    const bookId=req.params.id;

    Book.findByPk(bookId)
    .then(book => {
        if(!book){
            return res.status(400).json({
                message:"Book not found"
            })
        }
        res.status(200).send({
            message:"Book get successfully",
            data:book
        });
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the book based on id"
        })
    })
}



/**
 * update the Book items by id
 */

exports.update=(req,res)=>{

    const book={
        title:req.body.title,
        author:req.body.author,
        published:req.body.published,
        publisher:req.body.publisher
       }
       const bookId = req.params.id

       Book.update(book, {
           where: {id: bookId}
       })
       .then(bookDetails => {
           Book.findByPk(bookId)
           .then(book => {
               if(!book){
                   res.status(402).send({
                       message:"book not found for given id "
                   })
               }
               res.status(200).send({
                message:"Book update succesfully",
                data:book
               });
           })
           .catch(err => {
               res.status(500).send({
                   message: "something went wrong while fetching the book based on id"
               })
           })
       })
       .catch(err => {
           res.status(500).send({
               message: "something went wrong while updating the book based on id"
           })
       })

}


/**
 * Delete the book by id
 */
exports.Delete=(req,res)=>{
    const bookId=req.params.id;
    Book.destroy({
        where:{
            id:bookId
        }
    })
    .then(result=>{
        if(!result){
             res.status(403).send({
                message:"book not found for given id"
            })
        }
        res.status(200).send({
            message:"successfully deleted the book"
        })
    })
    .catch(err=>{
        res.status(500).send({
            message:"something went wrong"
        })
    })

}