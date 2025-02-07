# Split Bills Web Application

## Overview

A web app for managing shared expenses among friends. Users can register, log in, manage friends, and track shared bills.

## Tech Stack

- **Backend (BE)**: Java, Spring Boot, PostgreSQL
- **Frontend (FE)**: ReactJS, JavaScript, HTML, CSS

## Project Structure

```
├── split_bill_4   # Backend - Spring Boot
├── splitbillsfe   # Frontend - ReactJS
```

## Features

- **User Authentication**
- **Friends & Expense Management**
- **Database Integration**

## Setup

### Backend

```sh
cd split_bill_4
mvn clean install
mvn spring-boot:run
```

Backend runs on `http://localhost:8082`

### Frontend

```sh
cd splitbillsfe
npm install
npm start
```

Frontend runs on `http://localhost:3000`



