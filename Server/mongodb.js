const mongojs=require('mongojs');
class MongoDB{
    constructor(){
        this.db=mongojs('mongodb://aleksa:aleksa13@ds213665.mlab.com:13665/healthyworld',['healthyworld','snacks','meals','breakfasts','lunches','dinners','users','allFood']);
    };
    testMyConnection()
    {
        this.db.healthyworld.find(function(err,data){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(data);
                }
            })
    }
    //Rus pocetak//
    logIn(req,res)
    {
        this.db.users.find({username: req.body.username}, (err,data) => {
            if(data[0] === undefined) {
                req.body.username = 'error';
                req.body.surname = 'USERNAME DOSE NOT EXIST!';
                res.send(req.body);
            } else {
                const mUser = data[0];
                if(req.body.password !== mUser.password){
                    req.body.username = 'error';
                    req.body.surname = 'WRONG PASSWORD!';
                    res.send(req.body);
                } else {
                    res.send(mUser);
                }
            }
        })   
    }
    signUp(req,res)
    {
        console.log(req.body);
        this.db.users.find({username: req.body.username}, (err, data) => {
            if(data[0] === undefined){
                this.db.users.insert(req.body, (err, userInMongo) => {
                if(err) throw err;
                console.log('USER-ADD-SUCCESS');
                // console.log('USER-ADD-SUCCESS: ', userInMongo)
                res.send(req.body);
                });
            } else {
                console.log('USER-ADD-UNSUCCESSFUL - USERNAME ALREADY EXISTS');
                req.body.username = 'error';
                req.body.surname = 'USERNAME ALREADY EXISTS';
                res.send(req.body);
            }
        });
    }
    addFood(req){
        this.db.allFood.find({name: req.body.name}, (err, data) => {
            if(data[0] !== undefined) { // vec postoji... :D 
      
            } else { // nije nasao nista
                this.db.allFood.insert(req.body, (err, req) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log('FOOD-ADD-SUCCESS');
                    }
                });
            }
        })
    }
    deleteProduct(req, res)
    {
        this.db.all.remove({pid: req.body.pid}, (err, resp) => {
            if(err) throw err;
            if(resp.n > 0) {
                console.log("PRODUCT-DELETE-SUCCESS");
                res.send(req.body);
            }
            else 
            {
                console.log("PRODUCT-DELETE-UNSUCCESSFUL");
                req.body.pid = 'error';
                res.send(req.body);
            }
      
        });
        this.db.users.find({username: req.body.owner}, (err,data) => {
            let user = data[0];
        
            user.products = user.products.filter(p => p.pid !== req.body.pid);
            this.db.users.update({username: user.username},user,{mulit:true}, (err, resp) => {
                if(resp.nModified > 0) {
                    console.log('OWNER-UPDATE-SUCCESS');
                } else {
                    console.log('OWNER-UPDATE-UNSUCCESSFUL');
                }
            });
        });
    }
    findProducts(req,res)
    {
        console.log('/product/find');
        let fo = req.body; // fo- findObject
        // name kasnije
        // tags kasnije
        fo.selectedCat = fo.selectedCat === 'ALL' ? {$exists: true} : fo.selectedCat;
        fo.selectedCurrency = fo.selectedCurrency.code === 'ALL' ? {$exists: true} : fo.selectedCurrency;
      
        fo.minPrice = fo.minPrice === null ? -1 : fo.minPrice;
        fo.maxPrice = fo.maxPrice === null ? 9999999 : fo.maxPrice;
      
        fo.minProteins = fo.minProteins === null ? -1 : fo.minProteins;
        fo.maxProteins = fo.maxProteins === null ? 9999999 : fo.maxProteins;
        
        fo.minCarb = fo.minCarb === null ? -1 : fo.minCarb;
        fo.maxCarb = fo.maxCarb === null ? 9999999 : fo.maxCarb;
      
        fo.minKCals = fo.minKCals === null ? -1 : fo.minKCals;
        fo.maxKCals = fo.maxKCals === null ? 9999999 : fo.maxKCals;
      
        fo.minFat = fo.minFat === null ? -1 : fo.minFat;
        fo.maxFat = fo.maxFat === null ? 9999999 : fo.maxFat;
      
        this.db.all.find(
        {
            categorie: fo.selectedCat,  
            currency: fo.selectedCurrency,  
            price:  {$gt: fo.minPrice, $lt: fo.maxPrice},
            proteins: {$gt: fo.minProteins, $lt: fo.maxProteins},
            carbohydrates: {$gt: fo.minCarb, $lt: fo.maxCarb},
            kcals: {$gt: fo.minKCals, $lt: fo.maxKCals},
            fat: {$gt: fo.minFat, $lt: fo.maxFat}
        }, (err,data) => {
            // console.log(data);
            let resData = data;
            //fo.name moze da bude name, latinName, pid
            if(fo.name !== null && fo.name !== undefined && fo.name !== '') {
                resData = resData.filter( product => {
                    return product.name.includes(fo.name) || product.latinName.includes(fo.name) || product.pid.includes(fo.name);
                });
            }
            if(fo.tags[0] !== undefined && fo.tags[0] !== null) {
                resData = data.filter(product => {
                    let bool = true; // da li postoji 
                    for(let i=0; i< fo.tags.length && bool; i++){
                        // za svaki tag koji je neko uneo ispituje da li postoji takav tag u proizvodu koji je nadjen
                        bool = product.tags.includes(fo.tags[i]);
                    }
                    return bool; // vrati false, posto je filter, ako je false nece da vrati taj objekat
                });
            }
            resData.sort((a, b) => {
                // var nameA = a.date.toUpperCase(); // ignore upper and lowercase
                // var nameB = b.date.toUpperCase(); // ignore upper and lowercase
                let nameA = a.date;
                let nameB = b.date;
                if (nameA > nameB)
                  return -1;
                if (nameA < nameB)
                  return 1;
                return 0;
              });
            //   console.log(resData);
            res.send(resData);
        })
    }
    updateProduct(req, res){
        req.body.name = req.body.name.toUpperCase();
        req.body.latinName = req.body.latinName.toUpperCase();
        req.body.place = req.body.place.toUpperCase();
      
        this.db.all.update({pid: req.body.pid},req.body,{mulit:true}, (err, resUp) => {
            if(err) {
                console.log(err);
                return;
            } else {
                console.log('PRODUCT-UPDATE-SUCCESS');
                res.send(req.body);

                // updateovanje userovog producta
                this.db.users.find({username: req.body.owner}, (err,data) => {
                    let user = data[0];
                    
                    user.products = user.products.map(p => {
                        if(p.pid === req.body.pid)
                            return req.body;
                        else
                            return p;
                    });
                    this.db.users.update({username: user.username},user,{mulit:true}, (err, resp) => {
                        if(resp.nModified > 0) {
                            console.log('OWNER-UPDATE-SUCCESS');
                        } else {
                            console.log('OWNER-UPDATE-UNSUCCESSFUL');
                        }
                    });
                });  
            }
        });
    }
    allProducts(res){
        this.db.all.find().sort({date: -1}, (err, data) => {
        // console.log({data});
        res.send(data);
    })
    }
    addProduct(req, res){
          // provera da li prozivod postoji u bazi
    this.db.all.find({
    pid: req.body.pid

    }, (err, data) => {
    if(data[0] !== undefined ) {
        console.log("SECOND-ADD");
        return;
    } else {

        this.db.all.insert(req.body, (err, docInMongo) => {  
            if(err) throw err;
            console.log('PRODUCT-ADD-SUCCESS');
            res.send(req.body);

            // insert kod usera;
        });
        // insert kod usera;
        this.db.users.find({username: req.body.owner}, (err, data) => {
            console.log(req.body.owner, req.body.nP);
            // console.log(data);
            data[0].products = [req.body, ...data[0].products];
            data[0].nP = req.body.nP;
            this.db.users.update({username: req.body.owner},data[0],{mulit:true}, (err, resp) => {
                if(resp.nModified > 0)
                    console.log('OWNER-UPDATE-SUCCESS');
                else
                    console.log('OWNER-UPDATE-UNSUCCESSFUL');
            });
        });
    }
    });
    }
    //Rus kraj//
    ////////////////////////////
    //// Aleksin deo pocetak////
    ////////////////////////////
    addSnack(snack)
    {
        this.db.snacks.insert(snack, function(err, records){
            if(err){
                console.log(err);
                return;
            }
            console.log("Record(addSnack) added as ",records);
        });
    }
    addMeal(meal)
    {
        this.db.meals.insert(meal, function(err, records){
            if(err){
                console.log(err);
                return;
            }
            console.log("Record(addMeal) added as ",records);
        });
    }
    recommendMeals(type,kcals,res)
    {
        console.log(type);
         if (type==='Breakfast')
         {
             this.recommendBreakfasts(kcals,res);
         }
        else if (type==='Lunch')
        {
            this.recommendLunches(kcals,res);
        }
        else
        {
            this.recommendDinners(kcals,res);
        }
    }
    recommendBreakfasts(kcals,res)
    {
      
        this.db.meals.find( { $and: [{type: 'Breakfast'}, {kcals: {$lt: kcals}} ] },function(err,data){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.status(200).send(JSON.stringify(data));
            }
        })
    }
    recommendLunches(kcals,res)
    {
        this.db.meals.find( { $and: [{type: 'Lunch'}, {kcals: {$lt: kcals}} ] },function(err,data){
            if(err)
            {
                console.log(err);
            }
            else
            {
            
                res.status(200).send(JSON.stringify(data));
            }
        })
    }
    recommendDinners(kcals,res)
    {
        this.db.meals.find( { $and: [{type: 'Dinner'}, {kcals: {$lt: kcals}} ] },function(err,data){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.status(200).send(JSON.stringify(data));
            }
        })

    }
    recommendSnacks(kcals,res)
    {
        this.db.snacks.find({kcals: {$lt: kcals}},function(err,data){
            if(err)
            {
                console.log(err);
            }
            else
            {  
                res.status(200).send(JSON.stringify(data));
            }
        })
    }
    addToMyMeals(body,res)
    {
        let date=body.date;
        let time=body.time;
        let user=body.user;
        let meal=body.meal;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        console.log(identifikator);
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            {  
                if(data[0].mealsbyday===undefined || data[0].mealsbyday[identifikator]===undefined)
                {
                    let niz=[];
                    niz.push(meal);
                    let stringforupdate="mealsbyday."+identifikator;
                    let mymeals={};
                    console.log(mymeals);
                    mymeals[stringforupdate]=niz; 

                    that.db.users.update({username: user.username},{ $set:  mymeals },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            console.log("DODAO");
                            
                        }
                    })
                    that.returnMyMeals(identifikator,res,user);
                }
                else
                {
                    console.log("U ELSE ");
                    let niz=[];
                   
                    let pomniz=data[0].mealsbyday[identifikator].filter(x=>x.type===meal.type);
                    if(pomniz.length>0)
                    {
                        let pomniz2=[];
                        res.status(200).send(JSON.stringify(pomniz2))
                    }
                    else 
                    {
                        data[0].mealsbyday[identifikator].forEach(x=>niz.push(x));
                        niz.push(meal);
                        let stringforupdate="mealsbyday."+identifikator;
                        let mymeals={};
                        mymeals[stringforupdate]=niz;
    
                        that.db.users.update({username: user.username},{ $set:  mymeals },function(err,data){
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {  
                                console.log("DODAO U ELSE");
                                that.returnMyMeals(identifikator,res,user);
                            }
                        })
                    }

                 
                    
                }

            }
        })
        
    }
    returnMyMeals(identifikator,res,user)
    {
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].mealsbyday===undefined || data[0].mealsbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    data[0].mealsbyday[identifikator].forEach(x=>niz.push(x));
                    res.status(200).send(JSON.stringify(niz));
                }
            }
        })
    }
    returnMySnacks(identifikator,res,user)
    {
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].snacksbyday===undefined || data[0].snacksbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    data[0].snacksbyday[identifikator].forEach(x=>niz.push(x));
                    res.status(200).send(JSON.stringify(niz));
                }

            }
        })
    }
    addToMySnacks(body,res)
    {
        let date=body.date;
        let user=body.user;
        let snack=body.snack;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        console.log(identifikator);
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            {  
                if(data[0].snacksbyday===undefined || data[0].snacksbyday[identifikator]===undefined)
                {
                    let niz=[];
                    niz.push(snack);
                    let stringforupdate="snacksbyday."+identifikator;
                    let mysnacks={};
                    console.log(mysnacks);
                    mysnacks[stringforupdate]=niz;

                    that.db.users.update({username: user.username},{ $set:  mysnacks },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            console.log("DODAO");
                     
                        }
                    })
                    that.returnMySnacks(identifikator,res,user);
                }
                else
                {
                    console.log("U ELSE ");
                    let niz=[];
                    if(data[0].snacksbyday[identifikator].length>=3){
                        let pomniz=[];
                        res.status(200).send(JSON.stringify(pomniz));
                    }
                    else 
                    {

                    data[0].snacksbyday[identifikator].forEach(x=>niz.push(x));
                    niz.push(snack);
                    let stringforupdate="snacksbyday."+identifikator;
                    let mysnacks={};
                    console.log(mysnacks);
                    mysnacks[stringforupdate]=niz;

                    that.db.users.update({username: user.username},{ $set:  mysnacks },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            console.log("DODAO U ELSE");
                          
                            that.returnMySnacks(identifikator,res,user);
                        }
                    })
                    }
                   
                }

            }
        })
    }
    viewMyMeals(body,res)
    {
        let date=body.date;
        let user=body.user;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        this.returnMyMeals(identifikator,res,user);
    }
    viewMySnacks(body,res)
    {
        let date=body.date;
        let user=body.user;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        this.returnMySnacks(identifikator,res,user);
    }
    editMyMeal(body,res)
    {
        let date=body.date;
        let user=body.user;
        let meal=body.meal;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].mealsbyday===undefined || data[0].mealsbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    let pomniz=data[0].mealsbyday[identifikator].filter(x=>{meal.name!==x.name});
                    pomniz.push(meal);
                    let mymeals={};
                    let stringforupdate="mealsbyday."+identifikator;
                    mymeals[stringforupdate]=pomniz;
                    that.db.users.update({username: user.username},{ $set:  mymeals },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            that.returnMyMeals(identifikator,res,user);
                        }
                    })


                }

            }
        })

    }
    editMySnack(body,res)
    {
        let date=body.date;
        let user=body.user;
        let snack=body.snack;
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].snacksbyday===undefined || data[0].snacksbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    let pomniz=data[0].snacksbyday[identifikator].filter(x=>{snack.name!==x.name});
                    pomniz.push(snack);
                    let mysnacks={};
                    let stringforupdate="snacksbyday."+identifikator;
                    mysnacks[stringforupdate]=pomniz;
                    that.db.users.update({username: user.username},{ $set:  mysnacks },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            that.returnMySnacks(identifikator,res,user);
                        }
                    })
                }
            }
        })
    }
    deleteMyMeal(body,res)
    {
        let date=body.date;
        let user=body.user;
        let mealname=body.mealname;
        console.log(user);
        console.log(date);
        console.log(mealname);
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].mealsbyday===undefined || data[0].mealsbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    console.log(data[0].mealsbyday[identifikator]);
                    console.log(mealname);
                    let pomniz=data[0].mealsbyday[identifikator].filter(x=>{console.log(x.name);return x.name!==mealname;});
                    console.log(pomniz);
                    let mymeals={};
                    let stringforupdate="mealsbyday."+identifikator;
                    mymeals[stringforupdate]=pomniz;
                    console.log(pomniz);
                    that.db.users.update({username: user.username},{ $set:  mymeals },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            that.returnMyMeals(identifikator,res,user);
                        }
                    })


                }

            }
        })
    }
    deleteMySnack(body,res)
    {
        let date=body.date;
        let user=body.user;
        let snackname=body.snackname;
        console.log(user);
        console.log(date);
        console.log(snackname);
        let identifikator=date[0].toString()+date[1].toString()+date[2].toString();
        let that=this;
        this.db.users.find({username: user.username},function(err,data)
        {   
            if(err)
            {
                console.log(err);
            }
            else
            { 
                let niz=[];
                if(data[0].snacksbyday===undefined || data[0].snacksbyday[identifikator]===undefined)
                {
                    res.status(200).send(JSON.stringify(niz));
                }
                else
                {
                    console.log(data[0].snacksbyday[identifikator]);
                    console.log(snackname);
                    let pomniz=data[0].snacksbyday[identifikator].filter(x=>{console.log(x.name);return x.name!==snackname;});
                    console.log(pomniz);
                    let mysnacks={};
                    let stringforupdate="snacksbyday."+identifikator;
                    mysnacks[stringforupdate]=pomniz;
                    console.log(pomniz);
                    that.db.users.update({username: user.username},{ $set:  mysnacks },function(err,data){
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {  
                            that.returnMySnacks(identifikator,res,user);
                        }
                    })


                }

            }
        })
    }
    returnAllFoods(res)
    {
        this.db.allFood.find(function(err,data){
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.status(200).send(JSON.stringify(data));
            }
        })
    }
    addBreakfast(username,breakfast)
    {

    }
    addLunch(username,lunch)
    {

    }
    addDinner(username,dinner)
    {

    }
    addSnackOne(username,snackone)
    {

    }
    addSnackTwo(username,snacktwo)
    {

    }

    updateBreakfast(username,breakfast)
    {

    }
    updateLunch(username,lunch)
    {

    }
    updateDinner(username,dinner)
    {

    }
    updateSnackOne(username,snackone)
    {

    }
    updateSnackTwo(username,snacktwo)
    {

    }
    deleteBreakfast(username,breakfast)
    {

    }
    deleteLunch(username,lunch)
    {

    }
    deleteDinner(username,dinner)
    {

    }
    deleteSnackOne(username,snackone)
    {

    }
    deleteSnackTwo(username,snacktwo)
    {

    }
    ////////////////////////////
    //// Aleksin deo kraj///////
    ////////////////////////////


       ////////////////////////////
    //// Selenin deo pocetak///////
    ////////////////////////////
    findPosts(req, res){
       
        console.log(req.body.category);
        this.db.posts.find({category:req.body.category},function(err,data){
          if(err)
          {
              console.log(err);
              const errorObj = {'error': 'There is no posts of that category!'};
              res.status(422).send(errorObj);
          }
          else
          {
              console.log(data);
              res.status(200).send(JSON.stringify(data));
           //   res.status(200).send(JSON.stringify(req.body.category));
          }
      })
  
      }

      addPost(req,res){
        console.log(req.body);
        var that=this;
        this.db.posts.insert(req.body,function(err,data){;
        if(err)
        {
            console.log(err);
            const errorObj = {'error': 'Post isnt add!'};
            res.status(422).send(errorObj);
        }

        else
        {
           // console.log(data);
          //  res.status(200).send(req.body);
         //   res.status(200).send(JSON.stringify(req.body.category));
         that.db.posts.find({category:req.body.category},function(err,data){
            if(err)
            {
                console.log(err);
                const errorObj = {'error': 'There is no posts of that category!'};
                res.status(422).send(errorObj);
            }
            else  
            {
                console.log(data);
                res.status(200).send(JSON.stringify(data));
             //   res.status(200).send(JSON.stringify(req.body.category));
            }
        })


        }
   

      })
    }
    addComment(req, res){
        console.log(req.body);
        this.db.posts.findOne({
            _id: mongojs.ObjectId(req.body._id)
        }, (err, data) => {
            console.log(req.body._id);
            console.log(data);
            data.comments = req.body.comments;
           this.db.posts.update({
            _id: mongojs.ObjectId(req.body._id)
        },data,{mulit:true}, (err, res) => {
                console.log('AD-COMMENT SUCCESSS');
                console.log(res);
           });
        });
    


    }

    addLike(req, res){
        console.log(req.body);
        this.db.posts.findOne({
            _id: mongojs.ObjectId(req.body._id)
        }, (err, data) => {
            console.log(req.body._id);
            console.log(data);
            data.comments = req.body.comments;
           this.db.posts.update({
            _id: mongojs.ObjectId(req.body._id)
        },data,{mulit:true}, (err, res) => {
                console.log('AD-LIKE SUCCESSS');
                console.log(res);
           });
        });
    }

    addDislike(req, res){
        console.log(req.body);
        this.db.posts.findOne({
            _id: mongojs.ObjectId(req.body._id)
        }, (err, data) => {
            console.log(req.body._id);
            console.log(data);
            data.comments = req.body.comments;
           this.db.posts.update({
            _id: mongojs.ObjectId(req.body._id)
        },data,{mulit:true}, (err, res) => {
                console.log('AD-DISLIKE SUCCESSS');
                console.log(res);
           });
        });
    }



        ////////////////////////////
    //// Selenin deo kraj///////
    ////////////////////////////
}
var mymongo = new MongoDB();
module.exports = mymongo;