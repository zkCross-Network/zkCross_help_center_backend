import express,{Application,Request,Response} from "express";
import formRouter from "./route/form";
import cors from "cors";
const app: Application = express();

const PORT: Number = 5000;

app.use(express.json());
app.use(cors());

app.use("/form",formRouter);

app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
});