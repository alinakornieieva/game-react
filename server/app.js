const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
const PORT = 5000;

const app = express()
app.use(express.json())
app.use(cors())

const configuration = new Configuration({
    apiKey: process.env.CHATBOT_KEY,
})

const openai = new OpenAIApi(configuration);
app.post("/request", async (req, res) => {
    try {
        const { prompt } = req.body;
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
        });
        res.send(completion.data.choices[0].text)
    } catch (e) {
        res.status(500).json({ message: "Something went wrong" })
    }
})

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))