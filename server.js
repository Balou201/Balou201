// Dans server.js, juste après les app.use(bodyParser.json());
const cors = require('cors'); // N'oublie pas de l'installer: npm install cors

// Autoriser toutes les origines (pour le développement ou si tu sais ce que tu fais)
app.use(cors());

// OU mieux, spécifier l'origine de ton frontend GitHub Pages
// app.use(cors({
//     origin: 'https://balou201.github.io/Demande-d-acces/' // Remplace par l'URL exacte de ton GitHub Pages
// }));
