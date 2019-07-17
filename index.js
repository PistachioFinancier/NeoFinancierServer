const express = require('express'); //express module
const app = express();


const bp = require('body-parser');         
app.use(bp.json());
app.use(bp.urlencoded({ extended: false}));

const cors = require('cors');  // Cross-Origin Requests 
app.use(cors());
app.options('*', cors());
cors({credentials: true, origin: true});

const mongoose = require('mongoose');
mongoose.connect(
"mongodb://127.0.0.1:27017/Neo",
 { useNewUrlParser: true }
);

const UserRoutes = require("./routes/UserRoutes");
app.use("/user", UserRoutes);

const LenderRoutes = require("./routes/LenderRoutes");
app.use("/lender", LenderRoutes);

const AssetRoutes = require("./routes/AssetRoutes");
app.use("/asset", AssetRoutes);

app.get("/fun", function(req,res){
	res.send("hello");
});
	
app.use(cors());



app.listen(8080, function(){console.log("listening on port 8080")}); 