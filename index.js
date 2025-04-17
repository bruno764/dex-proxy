import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/top-wallets", async (req, res) => {
  try {
    const response = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await response.json();
    const top = data.pairs.slice(0, 6);
    res.json(top);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados do Dexscreener" });
  }
});

app.listen(PORT, () => {
  console.log("✅ Proxy online na porta", PORT);
});
