require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

// Serve static files from the docs directory
app.use(express.static(path.join(__dirname, "./")));
app.use(express.static(path.join(__dirname, "./public")));

// API endpoints
app.get("/api/youtube", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          channelId: YOUTUBE_CHANNEL_ID,
          eventType: "live",
          type: "video",
          key: YOUTUBE_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from YouTube API" });
  }
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
