# template-node-api-starter

## Install dependencies

```bash
npm install
```

## Database

### Install

```bash
brew install mysql
```

### Log in to MySQL

```bash
mysql -u root -p
```

### Create a Database

```sql
CREATE DATABASE my_database;
```

### Switch to the new database

```sql
USE my_database;
```

### Create the users table;

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Insert Data into users table

```sql
INSERT INTO users (username, password, email)
VALUES ('admin', 'password123', 'admin@example.com');
```
