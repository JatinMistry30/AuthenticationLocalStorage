# Authentication with LocalStorage - Setup Instructions

## Step-by-Step Guide to Setup

### Step 1: Download the Repository
1. Clone the repository or download the zip file:
   - Clone: `git clone https://github.com/JatinMistry30/AuthenticationLocalStorage`
   - Download ZIP: Click "Download ZIP" from the GitHub repository

### Step 2: Install Node.js
1. Download Node.js from [Node.js website](https://nodejs.org/)
2. Install it by following the instructions
3. Confirm installation by running:
   ```bash
   node -v
   npm -v
   ```

### Step 3: Open the Project in VS Code
1. Open VS Code on your computer
2. Navigate to the Project Folder:
   - In VS Code, go to File > Open Folder
   - Select the folder where you downloaded or cloned the project
   
*Tip: Ensure that you have all files and folders visible in the VS Code explorer*

### Step 4: Start XAMPP (For Database)
1. Open XAMPP Control Panel on your computer
2. Start Apache and MySQL:
   - Click Start next to Apache to start the web server
   - Click Start next to MySQL to start the database server

### Step 5: Create Database
1. Open phpMyAdmin: Go to http://localhost/phpmyadmin in your web browser
2. Create a New Database:
   - In phpMyAdmin, click on Databases at the top
   - Name the database `auth_localstorage_db` and click Create

### Step 6: Set up Database Schema and Tables
1. Create the users table:
   - In phpMyAdmin, select the `auth_localstorage_db` database
   - Click on the SQL tab and paste the following query:
   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
2. Click Go to execute the query and create the table

### Step 7: Set up Backend (Node.js)
1. Go to the backend folder
2. In the terminal, run:
   ```bash
   npm install
   ```

### Step 8: Set up Frontend (React)
1. Go to the frontend folder
2. In the terminal, run:
   ```bash
   npm install
   ```

### Step 9: Configure Backend API
1. In the backend folder, configure the database credentials in config.js or .env:
   ```javascript
   module.exports = {
       DB_HOST: 'localhost',
       DB_USER: 'root',
       DB_PASSWORD: '',
       DB_NAME: 'auth_localstorage_db'
   };
   ```

### Step 10: Start the Backend Server
1. In the backend folder, run:
   ```bash
   npm start
   ```
2. The backend will be running at http://localhost:5000

### Step 11: Start the Frontend Application
1. In the frontend folder, run:
   ```bash
   npm start
   ```
2. The frontend will be accessible at http://localhost:3000

### Step 12: Test the Authentication Flow
1. Open http://localhost:3000 in your browser
2. Test the authentication features (register, login) and check if LocalStorage is being used properly
