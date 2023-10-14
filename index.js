import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) =>{
    const today = new Date();
    // const day = today.getDate();
    const day = today.getDay();

  
    let type = "It's a Weekday";
    let adv = "Work Hard To Enjoy The Weekend"
    if(day === 0 || day === 6)
    {
        type = " Its Weekend";
        adv = "YOU have done a great work Take rest its a weekend";
    }
    res.render("index.ejs",{
    dayType : type,
    advice : adv,
        })
})

app.listen(port, ()=> {
    console.log(`Server has been started on ${port}`);
})