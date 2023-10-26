import express from "express";
import { Books } from "../models/bookmodels.js";

const router=express();
//Route to save a new book
router.post('/',async (req,res)=>
{
    try{
        if(
            !req.body.title||!req.body.author||!req.body.publishYear
        ){
            return res.status(400).send({
                message:'Send all required fields:title author publishyear'
            });
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book=await Books.create(newBook);
        return  res.status(201).send(book);
    }
    catch (error){
        console.log("An error occured:"+error.message);
        res.status(500).send({message:error.message})
    }

})

//Route for getting all books from mongodb
router.get('/',async (req,res)=>
{
    try{
        const books=await Books.find({});
        return  res.status(201).send({
            count:books.length,
            data:books
        });
    }
    catch (error){
        console.log("An error occured:"+error.message);
        res.status(500).send({message:error.message})
    }
}

)

//Route for getting one books from mongodb
router.get('/:id',async (req,res)=>
{
    try{
        const {id}=req.params;
        const book=await Books.findById(id);
        return  res.status(201).send(book);
    }
    catch (error){
        console.log("An error occured:"+error.message);
        res.status(500).send({message:error.message})
    }
}
)
//Route for Update a book
router.put('/:id',async (req,res)=>
{
    try{
        if(
            !req.body.title||!req.body.author||!req.body.publishYear
        ){
            return res.status(400).send({
                message:'Send all required fields:title author publishyear'
            });
        }
        const {id}=req.params;
        const result=await Books.findByIdAndUpdate(id,req.body);
        if(!result)
        {
            return res.status(400).send({message:"Book Not Found"})
        }
        return res.status(200).send({message:"Book Updated Successfully"})
    }
    catch (error){
        console.log("An error occured:"+error.message);
        res.status(500).send({message:error.message})
    }
}
)

//Route for Deleting a book
router.delete('/:id',async (req,res)=>
{
    try{
        const {id}=req.params;
        const result=await Books.findByIdAndDelete(id);
        if(!result){
            return res.status(400).send({message:"Book Not Found"})
        }
        return res.status(200).send({message:"Book Deleted Successfully"})
    }
    catch (error){
        console.log("An error occured:"+error.message);
        res.status(500).send({message:error.message})
    }
}
)

export default router;