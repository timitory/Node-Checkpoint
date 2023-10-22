var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'timisquare1@gmail.com',
    auth :{
    user:'timisquare1@gmail.com',
    pass:'God1esus2Holyspirit3'
    }
});
var myMail={
    from:'timisquare1@gmail.com',
    to:'timitory111@gmail.com',
    subject:'sending A Personal Message On Node.js',
    text:'I just started my node.js Trainning!'

}
transporter.sendMail(myMail,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Message:" + info.response);
    }
});