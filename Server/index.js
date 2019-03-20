//for mongo
const MongoDB=require('./mongodb');

//for express
const express = require('express');
const bodyParser = require('body-parser');
const port = 3004;
const app = express();

// constante //
const fruits = 'fruits';
const vegetables = 'vegetables';
const fish = 'fish';
const meat = 'meat';
const eggs = 'eggs';
const dairy = 'dairy';
// constante //


//MongoDB.probaupdatea();
// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
  next();
});

// Ruki ~~~//
app.post('/user/login', (req, res, next) => {
  console.log('/user/login');
  MongoDB.logIn(req,res);
});

app.post('/user/add', (req, res, next) => {
  console.log('/user/add');
  MongoDB.signUp(req,res);
})
app.post('/food/add', (req,res) => {
  console.log('/food/add');
  MongoDB.addFood(req);

})
app.post('/product/delete', (req, res) => {
  console.log('/product/delete');
  MongoDB.deleteProduct(req,res);

})
app.post('/product/find' ,(req, res) => {
  MongoDB.findProducts(req,res);
})
app.post('/product/update', (req, res) => {
  console.log('/product/update');
  MongoDB.updateProduct(req, res);

})
app.get('/product/all', (req, res) => {
  console.log('/product/all');
  MongoDB.allProducts(res);
})

app.post('/product/add', (req, res, next) => {
  console.log('/product/add');
  MongoDB.addProduct(req, res);
});
// Ruk kraj ~~~//
 ////////////////////////////
//// Aleksin deo pocetak////
////////////////////////////
app.post('/mongo/mealplan/addmeal', function(req, res, next){
    console.log("DOSAO DO ADD MEAL");
    console.log(req.body);
    MongoDB.addMeal(req.body);
});
app.post('/mongo/mealplan/addsnack', function(req, res, next){
  console.log("DOSAO DO ADD SNACK");
  MongoDB.addSnack(req.body);
});
app.post('/mongo/mealplan/recommendmeals', function(req, res, next){
    MongoDB.recommendMeals(req.body.type,req.body.kcals,res);
});
app.post('/mongo/mealplan/recommendsnacks', function(req, res, next){
  console.log("U RECOMMEND SNACKS");
  MongoDB.recommendSnacks(req.body.kcals,res);
});
app.post('/mongo/mealplan/addtomymeals', function(req, res, next){
  console.log("U ADD TO MY MEALS SAM");
  MongoDB.addToMyMeals(req.body,res);
});
app.post('/mongo/mealplan/addtomysnacks', function(req, res, next){
  console.log("U ADD TO MY SNACKS SAM");
  MongoDB.addToMySnacks(req.body,res);
});
app.post('/mongo/mealplan/viewmymeals', function(req, res, next){
  console.log("U view my meals sam");
  MongoDB.viewMyMeals(req.body,res);
});
app.post('/mongo/mealplan/viewmysnacks', function(req, res, next){
  console.log("U view my snacks sam");
  MongoDB.viewMySnacks(req.body,res);
});
app.post('/mongo/mealplan/deletemymeal', function(req, res, next){
  console.log("U delete my meal sam");
  MongoDB.deleteMyMeal(req.body,res);
});
app.post('/mongo/mealplan/deletemysnack', function(req, res, next){
  console.log("U delete my snack sam");
  MongoDB.deleteMySnack(req.body,res);
});
app.post('/mongo/mealplan/editmymeal', function(req, res, next){
  console.log("U edit my meal sam");
  MongoDB.editMyMeal(req.body,res);
});
app.post('/mongo/mealplan/editmysnack', function(req, res, next){
  console.log("U edit my snack sam");
  MongoDB.editMySnack(req.body,res);
});
app.post('/mongo/mealplan/requestallfood', function(req, res, next){
  console.log("U request all food");
  MongoDB.returnAllFoods(res);
});
 ////////////////////////////
//// Aleksin deo kraj///////
////////////////////////////

 ////////////////////////////
//// Selenin deo pocetak///////
////////////////////////////
app.post('/mongo/forum', function(req, res, next){
  console.log("/mongo/forum");

  MongoDB.findPosts(req, res);
});
app.post('/mongo/forum/add',function(req,res,next){
 console.log("/mongo/forum/add");
 MongoDB.addPost(req,res);

})
app.post('/mongo/forum/addComment', function(req, res, next){
  console.log("/mongo/forum/addComment");

  MongoDB.addComment(req, res);
});

app.post('/mongo/forum/addLike', function(req, res, next){
  console.log("/mongo/forum/addLike");

  MongoDB.addLike(req, res);
});


app.post('/mongo/forum/addDislike', function(req, res, next){
  console.log("/mongo/forum/addDislike");

  MongoDB.addDislike(req, res);
});



 ////////////////////////////
//// Selenin deo kraj///////
 ////////////////////////////
 
app.listen(port, function(){
    console.log('Server started on port '+port);
  });