// ye new method hai axios ke getch api me jo javascript me new chal rha hai

const url = "https://jsonplaceholder.typicode.com/users";

function myAxios (method,url,body=null){
 
    const headers = {
        'Content-Type': 'application/json'
    }




     // fetch me by default 'GET' request pehle se hota hai aur ye already by default promise return karta hai
    return fetch(url,{
        method:method,
        headers:headers, 
        body: JSON.stringify(body)
    }).then((data)=>{

        //ye api ke data ko text ke form me get kar leta hai 
        // return data.text();

        //but hume json format me chahiye to simply 'text' ke jagah 'json' likhna hota hai

        
        return data.json();

    });
    
}

//ye 'GET Request hai api ko get karne ke liye'

// myAxios('GET',url).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("ERROR: "+err);
// })


myAxios('POST',url,{name:'Shamshad Hussain', job:'Software Developer'}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("ERROR: "+err);
})