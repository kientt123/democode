const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))


var ds = [
        {name: 'Zoro', picURL : 'https://vn-live-01.slatic.net/p/d697be00768c8a388df5fb59aaa3cf72.jpg',price :4000},
        {name: 'Doraemon', picURL : 'https://cf.shopee.vn/file/4295db33ca4b40492af3fc5cf7c23bc9',price: 3200},
        {name: 'Xe cuu hoa', picURL :'https://docuabeyeu.com/wp-content/uploads/2019/04/xe-cuu-hoa-1-cho-ngoi-2.png?fbclid=IwAR0PUzuy8YevU1ZNrXLJKadMl-VQW3jPHCcpYpTukpyjTMyeZcHfRT4G1bA',price: 2500}
    ]

app.post('/save',(req,res)=>{
    var name = req.body.txtName
    var picURL = req.body.txtPictureURL
    var price = req.body.txtPrice
    ds.push({name:name,picURL:picURL,price:price})
    res.redirect('/')

}) 

app.get('/new',(req,res)=>{
    res.render('new')
})

app.get('/',(req,res)=>{
    var today = new Date();
    var name = "Tran Trung Kien"
    res.render('index',{ht:today,name: name,ds:ds})
})

app.get('/help',function (req,res){
    res.render('help')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running!")