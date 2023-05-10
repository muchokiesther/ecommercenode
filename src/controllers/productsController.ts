import {Response,RequestHandler,Request} from 'express'
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from '../config'


interface iProducts {
    productid:string
    productName:string
    productDescription:string
    productImage:string
    price:number
    isDeleted: number
}

interface ExtendedRequest extends Request {
    body: {
        productName:string
        productDescription:string
        productImage:string
        price:number
    }
}


// add product
export const addProduct = async(req:ExtendedRequest, res:Response) => {
    try {
        let id = uid()
        const pool = await mssql.connect(sqlConfig)
        const {productName,productDescription, productImage,price} = req.body
        await pool.request()
        .input('productid',id)
        .input('productName',productName)
        .input('productDescription',productDescription)
        .input('productImage',productImage)
        .input('price',price)
        .execute('addproduct')

        return res.status(201).json({message:"product added successfully"})

    } catch (error:any) {
        // occurrence of server side error
        return res.status(500).json(error.message)
    }
}

// get each product
export const getProduct:RequestHandler<{productid:string}> = async(req,res) => {
    try {
        const {productid} = req.params
        const pool = await mssql.connect(sqlConfig)
        
        let product:iProducts = (await (pool.request())
        .input('productid',productid)
        .execute('getproductbyid')).recordset[0]

        // if(!product){
        //     return res.status(404).json({message:"product not exists"})
        // }
        return res.status(200).json(product)


        
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

// get all products
export const getallProducts = async(req:Request, res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        let products:iProducts[] = (await pool.request().execute('getallproducts')).recordset
        return res.status(200).json(products)
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

// update product
export const updateProduct = async(req:Request<{productid:string}>,res:Response) => {
    try {
        const pool = await mssql.connect(sqlConfig)
        const {productid} = req.params
        let product:iProducts[] = (await pool.request()
        .input('productid',productid)
        .execute('getproductbyid')).recordset

        if(!product.length){
            return res.status(404).json({message:"product not found"})
        }
        const {productName, productDescription, productImage, price} = req.body
        await pool.request()
        .input('productid',productid)
        .input('pname',productName)
        .input('pdesc', productDescription)
        .input('pimage',productImage)
        .input('price',price)
        .execute('updateproduct')
        
        return res.status(200).json({message:"product updated successful"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

export const deleleProduct = async(req:Request<{productid:string}>,res:Response)=> {
    try {
        const pool = await mssql.connect(sqlConfig)
        const {productid} = req.params
        let product:iProducts[] = (await pool.request()
        .input('productid',productid)
        .execute('getproductbyid')).recordset

        if(!product.length){
            return res.status(404).json({message:"product not exists"})
        }

        await pool.request().input('productid',productid).execute('deleteproduct')
        return res.status(200).json({message:"product deleted successfully"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}