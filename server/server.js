const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js"); 
dotenv.config(); 
const mailgun = () => mg({
     apiKey: process.env.MAILGUN_API_KEY, 
     domain: process.env.MAILGUN_DOMAIN, 
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.post("/api/email", (req, res) => { 
    const { email, subject, message } = req.body; 
//     console.log(email);
//     console.log(subject);
//     console.log(message);

    
    mailgun().messages().send({ 
        from: `${email}`, 
        to: 'nick7.dev@gmail.com', 
        subject: `${subject}`, 
        html: `<p>${message}</p>`, }, (error, body) => { 
        //     from: `ololo@mail.com`, 
        // to: 'nick7.dev@gmail.com', 
        // subject: `text`, 
        // html: '<p>text ololo</p>', }, (error, body) => { 
            if (error) { 
                console.log(error); 
                res.status(500).send({ message: "Error in sending email" }); 
                } else { 
                    console.log(body); 
                    res.send({ message: "Email sent successfully" }); 
                } 
    });
}); 





const port = process.env.PORT || 3000;



app.listen(port, () => { console.log(`App is served at port ${port}`);
});


