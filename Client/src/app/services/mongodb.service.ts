import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/store';
import { Meal } from '../models/meal';
import { Snack } from '../models/snack';
import { User } from '../models/user';
const mongoURL = "http://localhost:3004/mongo";
const mongodbURL3004 = 'http://localhost:3004';



@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(
    private store$:Store<State>
  ) { }
  postObjectNoResp = async (obj: any, path) => {
    const strObj = JSON.stringify(obj);
    fetch(mongodbURL3004 + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
  }
  postObject = async (obj: any, path) => {
    // console.log("postObject()",obj);
    
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongodbURL3004 + path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    return content;
  }

  get = async (path: string) => {
    const res = await fetch(mongodbURL3004 + path);
    const content = await res.json();
    
    return content;
  }
  logInUser = async (user: User) => {
    console.log("logInUser()");

    const strObj = JSON.stringify(user);
    const rawResponse = await fetch(mongodbURL3004 + '/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    return content;
  }
  addUser = async(user) =>  {
    console.log("addUser()");
    const strObj = JSON.stringify(user);
    const rawResponse = await fetch(mongodbURL3004 + '/user/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    return content;
  }
  addProduct = async(user) =>  {
    console.log("addProduct()");
    const strObj = JSON.stringify(user);
    const rawResponse = await fetch(mongodbURL3004 + '/product/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    // const content = await rawResponse.json();
    // return content;
  }
  addMeal= async (meal: Meal) => {
    console.log('addMeal()');
    
    const strObj = JSON.stringify(meal);
    console.log({strObj});
    const rawResponse = await fetch(mongoURL + '/mealplan/addmeal', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
  }
  addSnack= async (snack: Snack) => {
    console.log('addMeal()');
    
    const strObj = JSON.stringify(snack);
    console.log({strObj});
    const rawResponse = await fetch(mongoURL + '/mealplan/addsnack', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
  }
  recommendMeals=async (type:String,kcals:number)=>{
    let obj={
      "type":type,
      "kcals":kcals
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/recommendmeals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  recommendSnacks=async (type:String,kcals:number)=>{
    let obj={
      "type":type,
      "kcals":kcals
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/recommendsnacks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  addToMyMeals=async (meal:Meal,user:User,date:Number[],time:Number[])=>{
    let obj={
      "meal":meal,
      "user":user,
      "date":date,
      "time":time
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/addtomymeals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  addToMySnacks=async (snack:Snack,user:User,date:Number[])=>{
    let obj={
      "snack":snack,
      "user":user,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/addtomysnacks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  viewMyMeals=async (user:User,date:Number[])=>{
    let obj={
      "user":user,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/viewmymeals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  viewMySnacks=async (user:User,date:Number[])=>{
    let obj={
      "user":user,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/viewmysnacks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  deleteMyMeal=async (user:User,mealname:String,date:Number[])=>{
    let obj={
      "user":user,
      "mealname":mealname,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/deletemymeal', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  deleteMySnack=async (user:User,snackname:String,date:Number[])=>{
    let obj={
      "user":user,
      "snackname":snackname,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/deletemysnack', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  editMyMeal=async (user:User,meal:Meal,date:Number[])=>{
    let obj={
      "user":user,
      "meal":meal,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/editmymeal', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }
  editMySnack=async (user:User,snack:Snack,date:Number[])=>{
    let obj={
      "user":user,
      "snack":snack,
      "date":date
    }
    console.log(obj);
    const strObj = JSON.stringify(obj);
    const rawResponse = await fetch(mongoURL + '/mealplan/editmysnack', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }

  requestAllFood=async ()=>{
    let obj="string"
;    console.log(obj);
    const strObj = JSON.stringify({obj});
    const rawResponse = await fetch(mongoURL + '/mealplan/requestallfood', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: strObj
    });
    const content = await rawResponse.json();
    console.log(`Response status: ${rawResponse.status}`);
    if (rawResponse.status > 400) {
      console.log("Refresh unsuccessful");
      console.log(content.error);
      return content;
    } else {
      console.log({content});
      return content;
    }
  }

  ///Selenaa

getAllPosts=async (category:string)=>{
  console.log("getAllPosts()");
  (console.log(category));
  const strObj = JSON.stringify({category});
  const rawResponse = await fetch(mongoURL + '/forum', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body:strObj
  });

  const content = await rawResponse.json();
  console.log(`Response status: ${rawResponse.status}`);
  if (rawResponse.status > 400) {
    console.log("Log in unsuccessful");
    console.log(content.error);
    
    // this.store$.dispatch(new LogInSuccess(new User("422",'error', 'Log in unsuccessful','','','', 422), false));
   // return new User("422",'error', 'Log in unsuccessful','','','', 422);

  } else {
    console.log("PostsSuccess");
    console.log({content});

    // this.store$.dispatch(new LogInSuccess(content, true));
    return content;
  }



}

addPost=async(post) =>  {
  console.log("addPost()");
  const strObj = JSON.stringify(post);
  console.log(post);
  const rawResponse = await fetch(mongoURL+ '/forum/add', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: strObj
  });
  const content = await rawResponse.json();
  return content;




}
addComment=async(post) =>{

  console.log("addComment()");
  const strObj = JSON.stringify(post);
  console.log(post);
  const rawResponse = await fetch(mongoURL+ '/forum/addComment', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: strObj
  });
  const content = await rawResponse.json();
  return content;



}
addLike=async(post) =>{

  console.log("addLike()");
  const strObj = JSON.stringify(post);
  console.log(post);
  const rawResponse = await fetch(mongoURL+ '/forum/addLike', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: strObj
  });
  const content = await rawResponse.json();
  return content;



}

addDislike=async(post) =>{

  console.log("addDislike()");
  const strObj = JSON.stringify(post);
  console.log(post);
  const rawResponse = await fetch(mongoURL+ '/forum/addDislike', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: strObj
  });
  const content = await rawResponse.json();
  return content;



}

}




