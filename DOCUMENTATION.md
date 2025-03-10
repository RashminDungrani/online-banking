# Online Banking System Documentation

## Project Overview
This is an online banking system with two main components:
- Admin Dashboard (`/admin`) - For bank administrators
- Customer Site (`/site`) - For bank customers

## System Requirements

### Required Software
1. XAMPP (Version 7.4 or higher)
   - Apache
   - MySQL
   - PHP
2. Node.js (Version 12 or higher)
3. npm (Node Package Manager)
4. Web Browser (Chrome/Firefox recommended)

## Installation Steps

### 1. Setup XAMPP
1. Download and install XAMPP from [Apache Friends](https://www.apachefriends.org/)
2. Start XAMPP Control Panel
3. Start Apache and MySQL services

### 2. Project Setup
1. Navigate to XAMPP's web root directory:
   ```
   C:\xampp\htdocs\   # Windows
   /opt/lampp/htdocs/ # Linux
   ```

2. Create a new directory called `online-banking`:
   ```
   mkdir online-banking
   ```

3. Copy project files:
   - Copy `admin` folder to `online-banking/admin`
   - Copy `site` folder to `online-banking/site`

### 3. Database Setup
1. Open browser and navigate to: `http://localhost/phpmyadmin`
2. Create a new database named `online_banking`
3. Import the database schema (SQL file should be provided separately)

### 4. Install Dependencies

#### For Admin Dashboard:
```bash
cd online-banking/admin
npm install
gulp
```

#### For Customer Site:
```bash
cd online-banking/site
npm install
gulp
```

### 5. Configure Database Connection
1. Open `admin/dist/connect.php` and `site/dist/connect.php`
2. Update database credentials if needed:
```php
$con = mysqli_connect("localhost", "root", "", "online_banking");
```

## Accessing the Application

### Admin Dashboard
- URL: `http://localhost/online-banking/admin/dist/`
- Default admin credentials (if any) should be provided separately

### Customer Site
- URL: `http://localhost/online-banking/site/dist/`
- Users can register or login with provided credentials

## Customization

### Changing Currency
The currency can be modified in multiple locations:

1. Database Settings:
   - Look for currency-related fields in the database tables
   - Update default currency values as needed

2. Frontend Display:
   - Search for currency symbols in PHP files
   - Update currency formatting functions
   - Common files to check:
     - Transaction pages
     - Account balance displays
     - Payment forms

### Theme Customization
The project uses Bootstrap 4 with custom themes:

1. Admin Theme:
   - Located in `admin/src/assets/scss/`
   - Modify `_variables.scss` for color schemes
   - Run `gulp` after making changes

2. Site Theme:
   - Located in `site/src/assets/scss/`
   - Modify `_variables.scss` for color schemes
   - Run `gulp` after making changes

## Development Workflow

1. Make changes in the `src` directory
2. Run `gulp` to compile and build
3. Changes will be reflected in the `dist` directory
4. Use browser's developer tools for debugging

## Common Issues & Solutions

1. Database Connection Errors:
   - Verify XAMPP services are running
   - Check database credentials in connect.php
   - Ensure database exists and is properly imported

2. Gulp Build Issues:
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: 
     ```bash
     rm -rf node_modules
     npm install
     ```

3. Permission Issues:
   - Ensure proper write permissions for storage directories
   - Check file ownership in Linux environments

## Security Recommendations

1. Change default credentials immediately
2. Use HTTPS in production
3. Regularly update dependencies
4. Implement proper input validation
5. Use prepared statements for database queries
6. Enable error logging in production
7. Regular security audits
