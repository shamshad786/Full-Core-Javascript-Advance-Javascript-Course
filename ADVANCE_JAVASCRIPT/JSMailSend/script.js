let btn = document.querySelector("button")
let inputs = document.querySelector("form")

btn.addEventListener('click',()=>{

   // ye code kam kar rha hai aur mail send ho rha hai
// humne yaha pr https://mailtrap.io/ ka email service use kiya hai
    Email.send({
        // Host: "smtp.mailtrap.io",  ye bhi kam kar rha h but source code me username dekh sakte hai isliye securetoke se secure karenge
        // Username: "b009d91b070ab2",
        // Password: "bd6adc4e7f4278",
        SecureToken : "9e8203e1-1724-4bf4-b3fd-83b9bf732d34 ", // hum HOST,Username,Password ko bycrypt kar diya hai yaha
        From:inputs.elements["email"].value,
        Subject: "Mail send from form page",
        Body: inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value +"<br>"+inputs.elements["messsage"].value
    }).then(msg =>alert("The mail successfully send"))
}) 

//complete  wroking SMTP mail sending working

