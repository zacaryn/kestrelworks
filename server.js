import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (including the existing static folder)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Kestrel Works - Innovative Digital Solutions',
    page: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About - Kestrel Works',
    page: 'about'
  });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { 
    title: 'Portfolio - Kestrel Works',
    page: 'portfolio'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kestrel Works Express server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from public/ and static/`);
});

export default app; 