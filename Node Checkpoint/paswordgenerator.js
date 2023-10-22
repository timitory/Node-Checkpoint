var generatePassword=require('generate-password');

function generateRandomPassword(){
    var password=generatePassword.generate({
        length:20,
        numbers:true,
        symbols:false,
        uppercase:true,
        strict:true,

    });
    return password;
}
var randomPassword=generateRandomPassword();
console.log('Our New Password is '+ ' '+ randomPassword);