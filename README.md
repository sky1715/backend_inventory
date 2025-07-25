
# backend_inventory# backend_inventory_management
This is a backend REST API for a simple Inventory Management Tool, built using Node.js, Express, and MongoDB. It supports user authentication, product management, and inventory tracking.

🚀 Features
🔐 User Authentication (Login with JWT)

➕ Add Products to inventory

🔄 Update Product Quantity

📦 Get Product List with pagination support

📄 Swagger/OpenAPI Documentation

🧪 Includes API Test Script (Python)

✅ Secured using best practices

🛠️ Tech Stack
Node.js with Express.js

MongoDB using Mongoose

JWT for secure authentication

Swagger for API documentation

Setup Instructions

1. Clone the repository

git clone [ https://github.com/sky1715/backend_inventory.git ]

cd inventory-management-backend

2. Install dependencies

npm install

3. Configure environment variables
   
Create a .env file in the root directory and add:

env

PORT=5000

MONGODB_URI=mongodb://localhost:27017/inventorydb

JWT_SECRET=your_jwt_secret_key

4. Start the server

npm start

Sample API Endpoints
🔐 Login
bash

POST /login
{
  "username": "string",
  "password": "string"
}

➕ Add Product

POST /products
Headers: Authorization: Bearer <token>
{
  "name": "string",
  "type": "string",
  "sku": "string",
  "image_url": "string",
  "description": "string",
  "quantity": number,
  "price": number
}

🔄 Update Quantity

PUT /products/:id/quantity

Headers: Authorization: Bearer <token>
{
  "quantity": number
}

📦 Get Products
pgsql

GET /products?page=1&limit=10

Headers: Authorization: Bearer <token>

API Documentation (Swagger UI)

This project includes interactive API documentation via Swagger UI.

🔗 Access it at:

http://localhost:5000/api-docs


Once your server is running, visit the link to:

See all available endpoints

View request/response structures

Try out APIs with built-in forms

Authenticate using JWT token by clicking "Authorize" 🔒

POST http://localhost:5000/api/auth/register

{
  "username": "your_username",
  "password": "your_password"
}


<img width="1346" height="876" alt="Screenshot 2025-07-25 203944" src="https://github.com/user-attachments/assets/b40a23d5-3a15-495e-9c7d-32b49c03c4b7" />

POST http://localhost:5000/api/auth/login

{
  "username": "your_username",
  "password": "your_password"
}


<img width="1346" height="888" alt="Screenshot 2025-07-25 204218" src="https://github.com/user-attachments/assets/397ed07b-034c-4d32-8bee-1a2c9c911eed" />

 Add Product
Endpoint:
POST http://localhost:5000/api/products/
Headers:

pgsql

Authorization: Bearer <access_token>
Content-Type: application/json
Request Body:
json

{
  "name": "Product Name",
  "type": "Category or Type",
  "sku": "SKU-12345",
  "image_url": "https://example.com/image.jpg",
  "description": "Product description here",
  "quantity": 10,
  "price": 199.99
}
<img width="1344" height="873" alt="Screenshot 2025-07-25 205531" src="https://github.com/user-attachments/assets/2daeba8b-a908-48bf-9dc9-5f2ae47b978a" />

Update Product Quantity
Endpoint:

PUT http://localhost:5000/api/products/:id

Headers:

Authorization: Bearer <access_token>
Content-Type: application/json
<img width="1349" height="870" alt="Screenshot 2025-07-25 205700" src="https://github.com/user-attachments/assets/2f13be18-1749-434c-af74-99b661199bc7" />

<img width="1345" height="884" alt="Screenshot 2025-07-25 210325" src="https://github.com/user-attachments/assets/d72940b4-fdad-44b1-a276-fd8ebf48d8b6" />








