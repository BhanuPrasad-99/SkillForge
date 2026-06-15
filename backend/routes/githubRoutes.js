const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/:username", async (req, res) => {

  try {

    const username = req.params.username;

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    const repos = response.data.map(repo => ({
      name: repo.name,
      language: repo.language
    }));

    res.json(repos);

  } catch (error) {

    res.status(500).json({ message: "GitHub API Error" });

  }

});

module.exports = router;