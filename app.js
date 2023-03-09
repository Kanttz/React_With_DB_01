import Express from "express";
import cors from "cors";
import supplierRoute from "./routes/supplierRoute.js";
import productRoute from "./routes/productRoute.js";

const app = Express();
const PORT = 5000;

// app.get("/", (req, res) => {
//   res.send("<h1>SAU......</h1><hr>Welcome to Express Server");
// });

app.use(cors());
app.use(Express.json());
app.use("/supplier", supplierRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log("Server running on port : " + PORT);
});
