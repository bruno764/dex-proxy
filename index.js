const express = require("express");
const cors = require("cors");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await response.json();
    const result = data.pairs.slice(0, 6);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados do Dexscreener" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
