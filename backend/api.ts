import express from "express";
import { Request, Response } from "express";
import cors from "cors";

import { api_key } from "./constants";

// Create the api
const app = express();
app.use(cors());

// Expose it at 8080
const port = 8080;

// Endpoint
app.get("/nfts/:address", async (req: Request, res: Response) => {
  let address = req.params.address;
  try {
    let data = await fetch(
      "https://gnosisapi.nftscan.com/api/v2/account/own/all/" +
        address +
        "?erc_type=&show_attribute=false&sort_field=&sort_direction=",
      {
        method: "get",
        headers: {
          "X-API-KEY": api_key,
        },
      },
    );
    console.log(data);
    const dataToSend = await data.json();
    console.log(dataToSend);
    res.send(JSON.stringify(dataToSend));
  } catch (e) {
    console.error(e);
    res.send("{'error':'bad request'}");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
