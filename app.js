const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))


var ds = [
        {name: 'Yasuo', picURL : 'https://cdn-onshop.cdn.vccloud.vn/images/figroom/w_2000,h_2000/yasuo-a3.jpg'},
        {name: 'Doraemon', picURL : 'https://backstage.vn/wp-content/uploads/2019/02/271aa6497c884cc38a2ce23b91adc3a4-750x375.jpg'},
        {name: 'Xe cuu hoa', picURL :'https://docuabeyeu.com/wp-content/uploads/2019/04/xe-cuu-hoa-1-cho-ngoi-2.png?fbclid=IwAR0PUzuy8YevU1ZNrXLJKadMl-VQW3jPHCcpYpTukpyjTMyeZcHfRT4G1bA'}
    ]

app.post('/save',(req,res)=>{
    var name = req.body.txtName
    var picURL = req.body.txtPictureURL
    ds.push({name:name,picURL:picURL})
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