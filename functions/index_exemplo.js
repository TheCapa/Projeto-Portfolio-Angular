const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp();


const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(
  bodyparser.urlencoded({ extended: true })
);
app.use(
  bodyparser.json()
);



let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "SEU EMAIL AQUI",
    pass: "SENHA PARA APP DO SEU EMAIL"
  }
});



exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const motivo = req.body.motivo;
    const msg = req.body.msg;
    //res.send("sucess");
    const mailOptions = {
      to: "Site <EMAIL PARA ONDE SERA ENCAMINHADO A MSG>",
      from: "Formulario Contato <COLOCO POR PADRAO O MSM EMAIL>",
      subject: "Contato",
      html: `            
            <p>&nbsp;</p>
            <p><a href="http://www.rafaelsouza.dev" target="_blank" rel="noopener"> <img style="margin-left: 5%; float: left;" src="https://firebasestorage.googleapis.com/v0/b/portifolio-rsouza.appspot.com/o/logo.png?alt=media&amp;token=c80cfd10-ece6-480a-8f42-394863ba04f9" width="70" height="50" /> </a></p>
            <div style="margin-left: 15%; margin-right: 15%; text-align: center; margin-top: 1%;">
            <p style="font-size: 20px; font-family: Verdana;"><strong><em>Formulário Contato</em></strong></p>
            </div>
            <div style="background-color: #ebebeb; text-align: center; height: 55px; margin-top: 5px;">
            <p style="font-size: 25px; color: blabk; font-family: Verdana; height: 7px;"><strong>`+ nome + `</strong></p>
            <a href="mailto:`+ email + `?cc=EMAIL PARA ONDE SERA ENCAMINHADO A MSG"; style="font-size: 15px; font-family: Verdana;">` + email + `</p>
            </div>
            <div text-align: center; margin-right: 5%; margin-top: 5px;">
            <p>Motivo do contato: `+ motivo + `
            <p>Telefone para Contato: `+ telefone + `
            <p>`+ msg + `
            </div>
            <div style="background-color: #ebebeb; text-align: center; height: 25px; margin-top: 5px;"></div>
           `
    };
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      //return res.send('Sended');
    });
  });
});
