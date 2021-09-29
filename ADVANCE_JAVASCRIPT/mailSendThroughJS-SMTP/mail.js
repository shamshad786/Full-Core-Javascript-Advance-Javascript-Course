function sendmail() {
  let name = $("#Name").val();
  let email = $("#Sender").val();
  let subject = $("#Subject").val();
  let message = $("#Message").val();

  let Body =
    "Name: " +
    name +
    "<br>Email: " +
    email +
    "<br>Subject: " +
    subject +
    "Message: " +
    message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "learnfacts01@gmail.com",
    Password: "7C869F93266CD9AD045878E1B7AA3C297869",
    To: "shamshad3300@gmail.com",
    From: "learnfacts01@gmail.com",
    Subject: "New Mail From Js Mail Sender from: " + name,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      alert("your mail has been send.");
    } else {
      console.error(message);
      alert("ERROR:" + message);
    }
  });
}
