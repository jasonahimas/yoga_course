# Yoga Course

Brief project description and purpose.

## Table of Contents

- [Features](#features)
- [ModelLink](#modelLink)
- [HostedLink](#hostedlink)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Testing](#testing)


## Features
1. **Enrollment Form:**
   - Users can easily fill out the enrollment form with their name, email, age, and preferred batch.

2. **Date Picker:**
   - Utilizes a user-friendly date picker for selecting the date of birth, enhancing the user experience.

3. **Batch Selection:**
   - Provides a dropdown menu for users to choose their preferred batch timing.

4. **Backend Integration:**
   - Utilizes Node.js and Express for the backend to handle form submissions and interact with the database.

5. **Database Storage:**
   - Stores user enrollment data in MongoDB, ensuring persistence and easy retrieval of user information.

6. **Form Validation:**
     Implements server-side form 

7. **Documentation:**
    - Comprehensive documentation with setup instructions, API documentation.

## ModelLink-(https://app.eraser.io/workspace/tbgbPjb7dv2sOA7UxynI?origin=share)
   
## Hosted on (https://yogacourse.vercel.app/api/v1/users/enrollment)

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Prerequisites

Install Node.js from (https://nodejs.org/en)

Install MongoDB from (https://www.mongodb.com/docs/manual/installation/)

Install MongoDB Compass(https://www.mongodb.com/products/tools/compass)

## Installation

Provide step-by-step instructions on how to set up the project locally. Include both frontend and backend setup.

```bash
# Clone the repository
git clone https://github.com/jasonahimas/yoga_course

# Navigate to the project directory
cd your-project

# Install dependencies for frontend
cd frontend/yoga_course && npm install && npm start

# Install dependencies for backend
cd server && npm install && npm run dev

```
## Installation
1. **Enroll User**
   - **Endpoint:** `/api/v1/users/enrollment`
   - **Method:** `POST`
   - **Request Body:**
     ```json
     {
       "name": "Ahimas",
       "email": "ahimas3@example.com",
       "age": 24,
       "monthYear": "1/2024",
       "batch": "6-7am"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Enrollment successful",
     }
     ```
