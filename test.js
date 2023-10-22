import axios from "axios"; //alternate for using https module to get api data
import express from "express";
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log(`Server running on port 8000 : `);
});
