# Backend Example

This repository demonstrates best practices for building scalable backend applications using modern tools and frameworks like Prisma, Hapi, Zod, and Swagger.

## Features

- **RESTful API Endpoints**: Easily extendable endpoints for CRUD operations.
- **Database Integration**: Powered by Prisma ORM with PostgreSQL.
- **Input Validation**: Robust validation using Zod schemas.
- **API Documentation**: Auto-generated Swagger documentation.
- **Scalable Architecture**: Modular and maintainable folder structure.
- **Environment Configuration**: Secure and flexible `.env` support.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- PostgreSQL database instance

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/backend-example.git
   cd backend-example
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     DATABASE_URL=postgresql://user:password@localhost:5432/backend-example
     ```

4. **Run database migrations**:
   ```bash
   npx prisma migrate dev
   ```

## Usage

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Access the API**:
   - Base URL: `http://localhost:3000`
   - Swagger documentation: `http://localhost:3000/documentation`

## Scripts

- `npm run dev`: Start the development server with hot-reloading.
- `npm run start`: Start the production server.
- `npm run test`: Run the test suite.
- `npm run lint`: Lint the codebase.
- `npm run prisma:generate`: Generate Prisma client.
- `npm run prisma:migrate`: Run database migrations.

## Folder Structure

```
backend-example/
├── prisma/               # Prisma schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── src/                  # Application source code
│   ├── controllers/      # Route handlers
│   ├── plugins/          # Hapi plugins (e.g., Prisma, Swagger)
│   ├── routes/           # API route definitions
│   ├── services/         # Business logic and database interactions
│   ├── utils/            # Utility functions
│   ├── validations/      # Zod schemas for validation
├── .env.example          # Example environment variables
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
└── server.js             # Application entry point
```

## API Documentation

The API documentation is auto-generated using Swagger and is available at `/documentation` when the server is running. It provides detailed information about all available endpoints, including request and response schemas.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact [wittaya.wipratoom@gmail.com].
