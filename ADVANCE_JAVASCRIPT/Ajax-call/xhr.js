// fake API's ko use karne ke liye "https://jsonplaceholder.typicode.com/" is site se apis's le sakte hai. to hum is api me
// "users" ke field ko access karenge.

const url = "https://jsonplaceholder.typicode.com/users";

function myAxios(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    //is open() ke ander do parameter hote hai 1- method='GET,PUT,PATCH,DELETE' aur dusra hota hai api url 2-'URL'
    xhr.open(method, url);

    // iski jarurat hume isliye padti hai taki jab hum server pr post kare tab server usko string format change na kare usko json format key value pairs ke form me save kare
    xhr.setRequestHeader("Content-Type", "application/json");

    // ye hume ye data actual me parse format me chahiye means json format me.
    xhr.responseType = "json";

    xhr.onload = () => {
      // ye api ke response ko browser pr show karne ke liye hota hai jab api load ho jaye.
      // console.log("ok");

      // ye response console me user ke saare details show kar dega . aur ye jo abhi response dega string ke format dega ussey pehle humne response type set kar liya hai
      // console.log(xhr.response);

      //ab humne yaha condition laga diya hai taki koi error bhi aaye to hume pta lag jaye
      if (xhr.status >= 400) {
        reject(xhr.response);
        console.log("API Request fail");
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
        reject(xhr.response);
    };

    //IMPORTANT: jo bhi get put etc, if condition wagera event listner lagega to send() ke uper lagega.
    //open method karne ke baad send() bhi laga hota hota request send karne ke liye
    xhr.send(JSON.stringify(body));
  });
}

// ye api ko get karne ke liye hai
//myAxios('GET',url);

//ye api ke body me data post karne ke liye hai
myAxios("POST", url, {
  name: "Shamshad Hussain",
  job: "Software Developer",
  mobile: "9999999999",
  address: "India",
}).then((res)=>{
        console.log('Message from then block',res);
}).catch((err)=>{
    console.log('Error from catch block'+err);
});
