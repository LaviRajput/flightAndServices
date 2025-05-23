# ✈️ Airline Booking System (WIP) In Progress Not Complete Yet
This project is a backend system for managing airline bookings, built using **Node.js**, **Express**, and **Sequelize**.

> ⚠️ **Status:** Work in Progress  
> 🚧 Features and modules are under active development.

---

## 🛠️ Features (Planned & In Progress)

- [x] RESTful API structure
- [x] City Management (Create cities)
- [ ] Airport Management
- [ ] Flight Search & Booking
- [ ] Seat Management
- [ ] User Authentication & Authorization
- [ ] Admin Panel for managing flights and cities

---

## 🧱 Tech Stack

- **Node.js**
- **Express**
- **Sequelize ORM**
- **MySQL / PostgreSQL**
- **Nodemon** (for development)
- **Body-parser**

---

## 📁 Folder Structure

```
.
├── src
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── repository/
│   ├── routes/
│   ├── services/
│   ├── index.js
├── .env
├── README.md
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/airline-booking-system.git
cd airline-booking-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file and define:

```
PORT=3000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=localhost
```

### 4. Start the Development Server
```bash
npm run dev
```

---

## 🧪 API Testing

You can use tools like **Postman** or **Thunder Client** to test the endpoints.

Example endpoint to create a city:

```
POST /api/cities
Content-Type: application/json

{
  "name": "Delhi"
}
```

---

## 🗓️ Roadmap

- ✅ Basic server setup
- ✅ City routes
- ⏳ Add airport, flight, and booking models
- ⏳ Implement flight search logic
- ⏳ Add middleware for validation and error handling

---

