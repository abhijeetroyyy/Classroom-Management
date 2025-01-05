# Classroom Management System

A simple Classroom Management web application built using **Node.js**, **Express**, and **MongoDB (Mongoose)** to manage classes, students, and enrollments. This application provides RESTful APIs for CRUD operations and supports middleware for logging and error handling.

---

## Features

### Core Features:
1. **Class Management**
   - Create, view, update, and delete classes.
2. **Student Management**
   - Register, view, update, and delete students.
3. **Enrollment Management**
   - Enroll students in classes.
   - List students in a specific class.
4. **Middleware**
   - Logging middleware for tracking requests.
   - Global error-handling middleware.
5. **Validation (Optional)**
   - Validate incoming data for classes and students.
6. **Pagination and Filtering** (Optional)
   - Filter and paginate results.

### Enhancements (Optional):
- Authentication and Authorization.
- Attendance Tracking.
- Search by class name or teacher name.

---

## Installation

### Prerequisites:
- Node.js (v16+ recommended)
- MongoDB (locally installed or cloud-based MongoDB Atlas)

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/abhijeetroyyy/classroom-management.git
2. Navigate to the project directory:
    ```bash
   cd classroom-management

3. Install dependencies:
    ```bash
    npm install
4. Create a .env file in the root directory:
    ```bash
    PORT=port
    MONGO_URI=mongodburl
5. Start the server:
    ```bash
    npm start

6. Test the endpoints using tools like Postman or cURL.



### Folder Structure:
    ```bash
    ├── controllers
    │   ├── classController.js
    │   ├── studentController.js
    ├── models
    │   ├── Class.js
    │   ├── Student.js
    ├── routes
    │   ├── classRoutes.js
    │   ├── studentRoutes.js
    ├── middlewares
    │   ├── logger.js
    │   ├── errorHandler.js
    ├── config
    │   ├── db.js
    ├── .env
    ├── app.js
    ├── server.js
    ├── README.md



## API Documentation

### Classes

#### Create a Class
**Endpoint:** `POST /api/classes`

**Request Body:**
```json
{
  "name": "Mathematics",
  "subject": "Algebra",
  "teacherName": "Mr. Smith",
  "startDate": "2024-01-01",
  "endDate": "2024-05-31"
}
```

---

#### List All Classes
**Endpoint:** `GET /api/classes`

---

### Students

#### Register a Student
**Endpoint:** `POST /api/students`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

---

#### List All Students
**Endpoint:** `GET /api/students`

---

### Enrollments

#### Enroll a Student in a Class
**Endpoint:** `POST /api/classes/:classId/enroll`

**Request Body:**
```json
{
  "studentId": "60f1a0b8c4a3d52614c6f842"
}
```

---

#### List Students in a Class
**Endpoint:** `GET /api/classes/:classId/students`

---

### Error Handling
All API responses return consistent error messages when issues occur:
- **400 Bad Request:** Invalid input.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** Server-side error.

---

### Dependencies
- **Server Framework:** Express
- **Database:** MongoDB (Mongoose)
- **Environment Variables:** dotenv
- **Logging:** Morgan
- **Validation (optional):** Joi

---

### Future Enhancements
- Add Authentication & Authorization.
- Implement search and pagination.
- Track attendance and assignment submissions.

---

### Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

### Author
Abhijeet Roy  
**GitHub:** [abhijeetroy](https://github.com/abhijeetroy)