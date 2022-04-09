//------------------selecting the elements----------------
// getElementById  --> 1 element // live nodes
// querySelector() --> 1 element
// getElementsByClassName -> html collection  // live nodes
// getgetElementsByTagName -> html collection  //live nodes
// queryElectorAll() -> Nodelist (array fnctnc like reverse are accessible on nodelist)

const ul = document.querySelector(".ul");

//---------------------- traversing the dom //---------------------






// child
//  ul.childNodes //--> return  NodeList (text Node + element Node)
//  ul.children  // --> return htmlCollection (only element Nodes)

// ul.firstChild  //--> return  (text Node / element Node)
// ul.firstElementChild //--> return  element Node

// ul.lastChild  //--> return  (text Node / element Node)
// ul.lastElementChild //--> return  element Node

//parent
// ul.parent
// ul.parentElement
// both are same except document.documentElement.parentNode=document whereas,
//  document. documentElement.parentElement=null

// ul.closest("body") return closest ancestor body

//siblings
// ul.previousSibling  //--> return  (text Node / elementNode)
// ul.previousElementSibling  //--> return  (element Node)

// ul.nextSibling  //--> return  (text Node / elementNode)
// ul.nextElementSibling  //--> return  (element Node)

//-------------inserting and creating elemnets--------------

// -------inserting html with strings -----------
// ul.innerHTML="<p>asd</p>" // --> this will replace all the child html with new html;
// ul.insertAdjacentHTML(position,text);
// ex :   ul.insertAdjacentHTML("beforeend","<p>last elemnt in inside ul</p>")
// position -->  (beforebegin)
//                         <div>
//                                (afterbegin)
//                               .........
//                                (beforeend)
//                         </div >
//               ( afterend  )
//

//-----------inserting html with creating nodes-------
// const div=dodument.createElement("div")
// div.textContent="new div"
//prepend // => insert in first position as child elemnt
//ul.prepend(div) // text element can be passed as  args
// append / appendChild appends  as children at last position
//  ul.appendChild(div)   // --> no text is element is paased in args
//   ul.append(div)  // -> can pass text element in args
// ex ul.append("tex")
// inserting created elements adjacent
//ul.firstElementChild.before(div); // => texteleemnt accepted
// inserts before the selected node
//ul.firstElementChild.after(div); // => texteleemnt accepted
// inserts after the selected node

// insertAdjacentElement ==> same as insertAdjacentHTML but used to insert the created nodes
// ul.insertAdjacentElement("afterbegin",div);

//------------Cloning nodes ----------------
//ul.firstElementChild.cloneNode(bool) // if args true => copy child nodes also
//                                    // if args false => dont copy child nodes

//------------removing elements------------
// ul.remove() // => removes the ul element
// ul.removeChild(div)  => removes the div elemnt which is inside the ul element

//---------------------arrays and objects------------

// const obj={
//     id:[1,2,3],
//     name:"saif",
//     foo(){
//         this.id.forEach(i=>console.log(this));  // this is not binded so this = obj
//     },
//     foo2(){
//         this.id.forEach(function(i){console.log(this)});  // this is binded in function(){} so it will be pointinng to window object
//     },
//     // get pt(){
//     //     return this.__proto__;
//     // },
//     // set pt(ptObj){
//     //     this.__proto__=ptObj;
//     // }
// }

// Object.defineProperty(obj,"pt",{
//     get:function(){
//         return this.__proto__;
//     },
//     set:function(o){
//         this.__proto__=o;
//     }
// })

// // obj.foo();
// // obj.foo2()
// console.log(obj.pt);
// console.log(obj.pt={crse:"cse"});
// console.log(obj.pt);

//--------------classes-------------

// we can create private variables and fiels by putting '#'in front of their name

// class Person{
//     #myName;     // ===> private data memeber
//     constructor(name,age,sex){
//        this.#myName=name;
//         this.sex=sex;
//         this.age=age
//     }
//     world="unity";
//     getName(){return this.name}
//     getAge(){return this.age}
//     getSex(){return this.sex}
//     static getFeelings(){
//         return [
//             "joy",
//             "sad",
//             "okok"
//         ]
//     }
//     static get foo(){console.log("haha")}
//     static set foo(x){console.log(x)}
// }

// class IndianPerson extends Person{
//     constructor(name,age,sex,culture){
//         super(name,age,sex);  // ===> super is always be called at  first
//         this.culture=culture;
//     }
// }

// Person.foo=90;

// const p1=new IndianPerson("saif",21,"M",{"lang":"many"});
// //const p2=new Person("an","20","F");

//----------------

// function Person(name,age){
//         this.name=name;
//         this.age=age
//         this.foo=function(){

//         }
// }

// Person.gg=function(){console.log("static")} // not avl to the objects of Person, it is static function

// Person.prototype.getDetails=function(){
//     console.log(this.name,this.age);
// }

// Men.prototype=Object.create(Person.prototype);

// function Men(name,age,id){
//     Person.call(this,name,age)
//     this.id=id;
// }

// const p1=new Men("saif",21,123);

//-------------------

// const mul=(firstElement)=>{
//     return (secElement)=>{
//         return firstElement*secElement;
//     }
// };

// const mulBy2=mul(2);
// const data=mulBy2(45);
// console.log(data);

// function foo()
// {
//     console.log(f)
// }
// const f=45;
// foo();

//--------recursion----------
// const person = {
//   name: "saif",
//   friends: [
//     {
//       name: "an",
//       friends: [{ name: "al", friends: [{ name: "kk" }] }],
//     },
//     { name: "annu", friends: [{ name: "snigdha" }] },
//   ],
// };

// const print=(person)=>{
//     const frnds=[]
//     if(!person.friends)
//     return frnds;
//     person.friends.forEach((friend)=>{
//         frnds.push(friend.name);
//         frnds.push(...print(friend));
//     })
//     return frnds;
// }
// console.log(print(person));

//----------------------callback,promises,async------------

// const getData=(data)=>{
//     return new Promise((res,rej)=>{
//         if(data)
//          res("got data");
//         else 
//         rej("no data");
//     })
// }

// const fetchData=(data)=>{
//     return new Promise((res,rej)=>{
//         if(data)
//          res("got data");
//         else 
//         rej("no data");
//     })
// }

// getData(false)
//         .then((res)=>console.log(res))
//         .catch(err=>console.log(err))

// const fetchData=async (dt)=>{
//     try{
//         const data=await getData(dt);
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }     

// Promise.all([getData(true),fetchData(true)])
//         .then(data=>console.log(data))
//         .catch(err=>console.log(err))



//---------------Set and Map in js--------
// const set=new Set([1,2,2,3]);
// set.add(56);
// set.add({name:"sa"});
// set.add([1,2]);
// set.add([1,2]);

// set.delete(56);

// set.forEach(el=>console.log(el))  // used to enumerate through the set

// set.has(2);  // return true if set contains the eleemnt

// set.size // return the size of set

// //set.clear() // clears the set

// const map=new Map([
//     ["name","sa"],
//     [1,3]
// ])

// const foo=()=>{console.log(foo)}

// map.set("class",foo);

// map.get("name") // to get the value...

// map.has("saif")  // return true if it has that key

// map.delete("name") // return true if map has the key and it deletes otherwise returns false

// map.keys()//
// map.values()//

//  map.clear();

// map.size;

// console.log(map)







//--------------------Data structures in js------------------

// ==>> Linked list

// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
    
//     insertAtEnd=(val)=>{
//         const node={
//             val:val,
//             next:null
//         }
//             if(!this.head)
//             this.head=node;
//             if(this.tail)
//             this.tail.next=node;
//             this.tail=node;
//     }

//     insertAtBegin(val){
//         const node={
//             val:val,
//             next:null
//         }
//             if(!this.head)
//             this.head=node;
//             else
//             {
//                 node.next=this.head;
//                 this.head=node;
//             }
//             if(!this.tail)
//             this.tail=node;
//     }

//     getNodes=()=>{
//         let temp=this.head;
//         const ll=[];
//         while(temp){
//             ll.push(temp);
//             temp=temp.next;
//         }
//         return ll;
//     }

//     deleteNode=(val)=>{
//         if(val===this.head.val&&this.tail===this.head)
//         {
//             this.head=null;
//             this.tail=null;
//             return true;
//         }
//         if(val===this.head.val)
//         {
//             this.head=this.head.next;
//             this.deleteNode(val);
//         }
//         else{
//             let prev;
//             prev=this.head;
//             while(prev.next&&prev.next.val!==val)
//             prev=prev.next;
//             if(prev.next&&prev.next.val===val)
//             {
//                 prev.next=prev.next.next;
//                 this.deleteNode(val);
//             }
//             return false;  
//         }

//     }

// }



// const list=new LinkedList();
// list.insertAtEnd(34);
// list.insertAtEnd(4);
// list.insertAtEnd(789);
// list.insertAtEnd(34);
// list.insertAtBegin(56);
// list.insertAtBegin(56);
// list.insertAtEnd(789);
// console.log(list.getNodes());
// list.deleteNode(34);
// list.deleteNode(789);
// console.log(list.getNodes());



//  ==>>>  Stack ----

// class Stack{
//     constructor(){
//         this.topEl=-1;
//         this.container=[];
//     }
//     push(val){
//         ++this.topEl;
//         this.container[this.topEl]=val;
//     }
//     pop(){
//         if(this.topEl===-1)
//         return false;
//         delete this.container[this.topEl];
//         --this.topEl;
//         return true;
//     }
//     top(){
//         if(this.topEl===-1)
//         return null;
//         return this.container[this.topEl];
//     }
//     isEmpty(){
//         return this.topEl===-1;
//     }
//     size(){
//         return this.topEl+1;
//     }
// }

// const stack=new Stack();
// stack.push(34);
// stack.push(4);
// stack.push(65);
// console.log(stack.isEmpty());




//  ==>>>>> queue

// class Queue{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//         this.len=0;
//     }
//     push(val){
//         const node={
//             val:val,
//             next:null
//         }
//         if(!this.head)
//         this.head=node;
//         if(this.tail){
//             this.tail.next=node;
//         }
//         this.tail=node;
//         ++this.len;
//     }
//     pop(){
//         if(!this.head)
//         return false;
//         this.head=this.head.next;
//         --this.len;
//         return true;
//     }
//     front(){
//         if(!this.head)
//         return null;
//         return this.head.val;
//     }
//     size(){
//         return this.len;
//     }
// }

// const q=new Queue();
// q.push(23);
// q.push(45);
// q.push(564);


// class TreeNode{
//     constructor(val){
//         this.left=null;
//         this.val=val;
//         this.right=null;
//     }
// }

// const n1=new TreeNode(34);
// n1.left=new TreeNode(54);
// n1.right=new TreeNode(688);

// const preOrder=(root)=>{
//     const res=[]
//     if(root===null)
//     return res;
//     res.push(root.val);
//     res.push(...preOrder(root.left));
//     res.push(...preOrder(root.right));
//     return res;
// }

// const postOrder=(root)=>{
//     const res=[]
//     if(root===null)
//     return res;
//     res.push(...postOrder(root.left));
//     res.push(...postOrder(root.right));
//     res.push(root.val);
//     return res;
// }

// const inOrder=(root)=>{
//     const res=[]
//     if(root===null)
//     return res;
//     res.push(...inOrder(root.left));
//     res.push(root.val);
//     res.push(...inOrder(root.right));
//     return res;
// }


// -------debouncing------- (callign network requests when there is certain time gap between 2 events)
// let c=null;
// const fetch=()=>{
//     clearTimeout(c);
//     c=setTimeout(()=>{
//         console.log("fetching");
//     },500);
// }
// document.querySelector(`input[type="text"]`).addEventListener("input",fetch)


// //-----------throttling---------- (if an event is triggered, then it will delay the trigerring of same event for an certin amount of time)

// const performAction=()=>{
//     let shootAccess=true;
//     return ()=>{
//         if(shootAccess)
//         {
//             console.log("shooting");
//             shootAccess=false;
//     setTimeout(()=>{
//         shootAccess=true;
//     },1000)
//         }
//     }
// }

// const action=performAction();

// document.querySelector("button").addEventListener("click",action);

//=======================================================

// const outer=document.querySelector(".outer");
// const inner=document.querySelector(".inner");

// outer.addEventListener("click",()=>{
//     console.log("outer");
// },true)
// inner.addEventListener("click",()=>{
//     console.log("inner");
// })


//===============================


//-------caching and memoization---------

// const memoizeCache=(fn)=>{
//     const cacheContainer={};
//     return(...args)=>{
//         const cacheArgs=JSON.stringify(args);
//         if(!cacheContainer[cacheArgs])
//         cacheContainer[cacheArgs]=fn(...args);
//         return cacheContainer[cacheArgs];
//     }
// }

// const getData=(a,b)=>{
//     for(let i=0;i<1000000;++i);
//     return a*b;
// }

// const memoizeData=memoizeCache(getData);

// console.time("start");
// console.log(memoizeData(435,5634));
// console.timeEnd("start");

// console.time("end");
// console.log(memoizeData(435,5634));
// console.timeEnd("end");

//==========Infinite curring============
// const add=(a)=>{
//     return (b)=>{
//         if(b) return add(a+b);
//         return a;
//     }
// }
// console.log(add(2)(3)());

//==========pollyfills========

// Array.prototype.myFilter=function(cb){
//     const ar=[];
//     this.forEach((el)=>{
//         if(cb(el))
//         ar.push(el);
//     })
//     return ar;
// }

// Array.prototype.myMap=function(cb){
//     const ar=[];
//     this.forEach((el)=>{
//         ar.push(cb(el));
//     })
//     return ar;
// }

// Array.prototype.myReduce=function(cb,initial=null){
//     let res=0;
//     this.forEach((el,index)=>{
//             if(!initial&&index==0)
//             {
//                 res=el;
//             }
//             else
//             {
//                 if(index==0)
//                 res=initial;
//                 res=cb(res,el);
//             }
//     })
//     return res;
// }

// Function.prototype.myBind=function(...args){
//     let context=args[0];
//     args.splice(0,1);
//     const tempArgs=args;
//     return (...args)=>{
//         this.apply(context,[...tempArgs,...args]);
//     }
// }

// const fun=function(...args){
//     console.log(this,args);
// }

// const t=fun.myBind({name:"saif"},4,5);
// t(63,5);

console.log(i)
let  i=90;


{
    let i=100;
}
console.log(i);