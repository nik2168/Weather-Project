const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://noxweatherfrontend.vercel.app/",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

module.exports = corsOptions;
