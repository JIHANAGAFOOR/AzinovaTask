const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const messagebird = require("messagebird")("S9wRYNL7uSCDz22DT5Gw1XQVr");
const registerModel = require("./src/model/register");
const loginModel = require("./src/model/login");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://Jihana:Jihaan%40123@cluster0.xi6vh.mongodb.net/Azinova?retryWrites=true&w=majority",
  () => {
    console.log("Database Connected");
  }
);
app.post("/a", (req, res) => {
  res.send("hai");
});
app.post("/add", (req, res) => {
  const loginItems = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };
  const login = loginModel(loginItems);
  login.save().then(() => {
    loginModel.findOne({ email: req.body.email }).then((details) => {
      var id = details._id;
      const items = {
        login_id: id,
        name: req.body.className,
        email: req.body.email,
        mobile: `+91${req.body.mobile}`,
        age: req.body.age,
        place: req.body.place,
      };
      const register = registerModel(items);
      register.save().then((RegisterData) => {
        console.log("register data is :" + RegisterData);
        res.send({ Details: RegisterData });
      });
    });
  });
});
app.post("/login", (req, res) => {
  console.log("usenme:" + req.body.email);
  registerModel.findOne({ email: req.body.email }).then((data) => {
    console.log("user dataaa" + data);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(200).json("error");
    }
  });
});
// app.get("/otp/:id",(req,res)=>{
//     const id=req.params.id
//     registerModel.findOne({_id:id}).then((data)=>{
//         console.log("dataaa"+data.mobile);
//         // messagebird.verify.create(data.mobile,{
//         //     template:"your verification code is %token"
//         // },(err,res)=>{
//         //     console.log("success"+res);
//         // })
//         var params = {
//             'originator': 'Code',
//             template : 'Your verification code is %token.',
//             'recipients': [
//             `+91${data.mobile}`,
//           ],
//             'body': 'This is a test  hellooooo message%token',

//           };

//           messagebird.messages.create(params, function (err, response) {
//             if (err) {
//               return console.log(err);
//             }
//             console.log(response);
//           });
//     })

// })
app.get("/otp/:id", function (req, res) {
  const id = req.params.id;
  registerModel.findOne({ _id: id }).then((data) => {
    console.log("dataa" + data);
    messagebird.verify.create(
      data.mobile,
      {
        originator: "Code",
        template: "Your verification code is %token.",
      },
      function (err, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(response.id);
          res.status(200).json(response.id)
        }
      }
    );
  });
});

app.listen("1235", () => {
  console.log("server is listening  http://localhost:1235");
});
