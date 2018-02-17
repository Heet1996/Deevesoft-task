'use strict';
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'heet.shah@technovanza.org',
        pass: '23rdmay1996'
    }
});
module.exports={transporter};