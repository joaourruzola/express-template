## Tech Stack

Node.js
Express
Express-Handlebars
MySQL
Bootstrap
dotenv

## Installation ⚙️

Clone the repository:

```
git clone https://github.com/your-username/your-project.git
cd your-project
```

Install dependencies:

```
npm install
```

Create a .env file in the root directory:
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
```

Start the server in development mode:
```
npm run dev
```

## Project Structure 📁

```
.
├── /public/           # Static files (CSS, JS, Images)
├── /views/            # Handlebars templates
│   ├── layouts/       # Main layouts
│   ├── partials/      # Reusable components
│   └── pages/         # Page views
├── /routes/           # Express routes
├── /config/           # Database / env configs
├── /controllers/      # App logic
├── app.mjs            # Entry point
├── package.json
└── .env
```
