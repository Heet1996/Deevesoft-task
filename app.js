var express = require("express");
var {User}=require('./database/user_schema');
const nodemailer = require('nodemailer');
var {transporter}=require('./utility/mail');

var app = express();
var port = 3000;

var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname+'/public'));
app.post('/ContactForm', function(req, res) {
 
 var age=req.body.A;
 var gender=req.body.B;
 var life_style=req.body.C;
 var name=req.body.D;
 var other=req.body.E;
 var comfortable=req.body.F;
 var user=new User({"age":age,"gender":gender,"life_style":life_style,"name":name,"other":other,comfortable:"comfortable"});

 user.save()
 	.then(()=>{
  const user_details=`
   <p>You have a new response</p>
    <h3>Details of ${name}</h3>
    <ul>  
      <li>what is your age group?: ${age}</li>
      <li>What is your gender?: ${gender}</li>
      <li>How would you like your healthy life-style change care to be delivered?: ${life_style}</li>
      <li>Name:: ${name}</li>
      <li>Any thing else you want to specify: ${other}</li>
      <li>How comfortable are you with sharing your fitness information (in social media or focus groups): ${comfortable}</li>

    </ul>
    

  `		
  const mailOptions = {
  from: 'webadmin@email.com', // sender address
  to: 'heet.shah@technovanza.org', // list of receivers
  subject: 'User has submitted', // Subject line
  html: user_details
};
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
 		res.send("Email is sent to Administrator")});
 
   
   
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});