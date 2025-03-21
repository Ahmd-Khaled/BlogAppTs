# Blog App

A simple **Blog App** built with **TypeScript**, **Express.js**, and **Node.js**, featuring **Swagger** for API documentation.

## Features

- User authentication (JWT-based)
- Create, Read, Update, and Delete (CRUD) operations for blog posts
- Comment system for posts
- API documentation using Swagger
- TypeScript for type safety and better development experience

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Static typing
- **Swagger** - API documentation
- **MongoDB / PostgreSQL** (Choose based on project requirements)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file in the project root and configure the following:

   ```env
   PORT=5000
   DB_URI=mongodb://localhost:27017/blogapp
   JWT_SECRET=your_secret_key
   ```

4. **Run the application:**
   ```sh
   npm run dev
   ```

## API Documentation

- Swagger UI is available at: `http://localhost:5000/api-docs`
- To generate/update API docs, ensure Swagger is configured in your project.

## Scripts

- **`npm run dev`** - Starts the development server
- **`npm run build`** - Builds the TypeScript files
- **`npm start`** - Runs the compiled JavaScript code
- **`npm run lint`** - Lints the code using ESLint

## Project Structure

```
📦 blog-app
├── 📂 src
│   ├── 📂 controllers
│   ├── 📂 routes
│   ├── 📂 models
│   ├── 📂 middleware
│   ├── 📂 config
│   ├── app.ts
│   ├── server.ts
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 .eslintrc.json
├── 📄 .env
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
