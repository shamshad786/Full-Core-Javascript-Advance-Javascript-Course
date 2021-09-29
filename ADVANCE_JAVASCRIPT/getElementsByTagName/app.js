let result = document.getElementsByTagName("*");
document.write(result);
//isme P tag ko use karne pr document ke ander jitne p tags hai usnke saare Node-list show karta hau fir usme hum poarticular 
//fields ko access kar ke data ko use kar skate hai

console.log(result);

//aur agar documents ke ander saare tags ko access karna h to "*" ko use karna hota hai
//eg;- document.getElement.ByTagName("*")


// aur sirf body ke ander kitne tags hai usko dekhne ke liye body ko add karna padta hai eg:-
//document.body.getElementByTagName("*"); ye body ke ander jitne tags h unko show karta hai


                    //getElementsByTagName More Specify 

//method ke ander hum kisi tag ke ander uske childs ko access karte hai 

// hum 2 tarike  likh sakte hai


//1.
let getSpanData = document.getElementById("sam");
let newData = getSpanData.getElementsByTagName("span");
document.write(newData);
console.log(newData);


//2.
let anotherData = document.getElementById("sam").getElementsByTagName("*");

document.write(anotherData);
console.log(anotherData);



                //getElementsByTagName Length Property hum isko 2 methods ke through kar skate hai

                //length me wo pure documents me kitne p tags hai unke calculate kar ke de deta hai
//1                
let LengthData = document.getElementsByTagName("p").length
console.log(LengthData);

//2
 let NewLength = document.getElementsByTagName("p");
 let datafetch =  NewLength.length;
 console.log(datafetch);


        //getEelementsByTagName by using loop

        let looplen = document.getElementsByTagName("p").length
        for (let i = 0; i<looplen; i++){
            let loopData = document.getElementsByTagName("p")[i]; 
            document.write(loopData + "<br>" +[i]);
            console.log(loopData);
        }





