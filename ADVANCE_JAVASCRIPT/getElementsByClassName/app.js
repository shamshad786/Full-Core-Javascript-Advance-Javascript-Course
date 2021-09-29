let result = document.getElementsByClassName("sam")
document.write(result);
console.log(result);

//isme hum agar sirf single class namr dalte hai to ye sab jagah ka class name search kar ke show karta hai
//aur agar hum 2 class name dalte hai jaise "sam container" to yeh ek hi result dega kaha isko ek hi class me dono class name mil jata h to


            // getElementsByClassName by more sopecific

// iske ander agar hume perticular class ko access karna h to hume pehle id ko get karna hoga fir uske ander class ko
            let getData = document.getElementById("container")
            let data = getData.getElementsByClassName("sam")

            document.write(data);
            console.log(data);

                        //getElementByClassName by Lenght property

   //hume kisi class name ki lenghth nikalni ho to hum lenghth property ka use kar sakte
   
   
   let newResult = document.getElementsByClassName("sam").length
   document.write(newResult);
   console.log(newResult);


                        // getElementByClassName by loop property

  // agar hume saare class name ko access karna h to hume hum loop property ka use karte hai
  
  let newData = document.getElementsByClassName("sam").length

  for (let i = 0; i < newData; i++){

    let newData2 = document.getElementsByClassName("sam")[i]
    document.write(newData2 +"<br>");
    console.log(newData2);

  }