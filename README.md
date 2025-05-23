# Recipes App

A complete **CRUD application** for managing recipes using **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. The application follows the **MVC architectural pattern** and includes comprehensive API documentation available via **Postman**.

## Features:

- Add new recipes
- View all recipes or a single recipe
- Update existing recipes
- Delete recipes
- Structured using the MVC architecture
- Input validation and error handling
- MongoDB with Mongoose for schema-based modeling
- RESTful API design with clear endpoints
- API tested and documented via Postman
- Environment-based configuration

---

## Technologies Used:

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web Application framework for Node.js
- **MongoDB** – NoSQL database for data storage
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing and documentation
- **dotenv** – For managing environment variables

---

## API Endpoints:

| **Method** |     **Endpoint**         |    **Description**       |
|------------|--------------------------|--------------------------|
| POST       | /api/recipes/create      | Creates a new receipe    |
| GET        | /api/recipes/getdata     | Retrieves all recipes    |
| GET        | /api/recipes/getdata/:id | Retrieves a recipe by ID |
| PUT        | /api/recipes/update/:id  | Updates a recipe by ID   |
| DELETE     | /api/recipes/delete/:id  | Deletes a recipe by ID   |

---

## Packages Installed:
- express
- cors
- dotenv
- mongoose
- nodemon

---

## Error Handling & Validation:

- 404 Not Found --–> When a recipe ID does not exist.

- 500 Internal Server Error --–> For server-side issues.

- Validations are included to ensure data integrity (e.g., required fields, data types).

---

## Postman API Documentation:
- API tested and documented via Postman

- Documentation link: https://documenter.getpostman.com/view/44995020/2sB2qak2qm

---

## 🙋‍♂️ Author & Contact
- Developed by: Vignesh R
- GitHub: @VigneshRav
- Email: vignesh212000@gmail.com

---