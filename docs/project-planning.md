# Expense Tracker & Budget Manager - Project Planning & Requirement Analysis

## 1. Project Title
Expense Tracker & Budget Manager (Template ID: T11)

## 2. Problem Statement
Many individuals struggle with financial discipline due to manual, irregular, or non-existent record-keeping. Without an organized method to monitor cash flow, tracking daily spending and sticking to monthly savings goals becomes challenging.

The people affected include individuals, students, households, and small business owners seeking better personal finance habits. A centralized web application is needed to simplify income and expense tracking, categorize transactions, establish budget limits, monitor actual spending against allocations in real time, and gain clear visibility into spending trends through visual dashboards and automated reports.

## 3. Project Objective
To develop a web-based personal finance management application using the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables users to record income and daily expenses, organize financial transactions into custom or default categories, create monthly budgets, monitor spending limits in real time, and view interactive financial summaries through a centralized dashboard.

## 4. Target Users / Stakeholders
### Administrator
- Manages user accounts and system settings.
- Manages system-wide default income and expense categories.
- Reviews system-wide analytics, operational logs, and reports.

### Registered User
- Manages personal transactions (income and expense records).
- Creates and updates custom categories.
- Establishes and updates monthly budgets per category or overall spending limit.
- Monitors budget utilization and views financial reports.
- Manages user profile and authentication credentials.

## 5. Core Modules
1. User Management
2. Authentication & Role-Based Authorization
3. Category Management
4. Expense Management
5. Income Management
6. Budget Management
7. Reports & Dashboard Analytics

## 6. Project Scope
### Included Features
- Secure user registration and login using JWT (JSON Web Tokens).
- Protected routes and role-based access control (Administrator vs. Registered User).
- User profile management.
- Complete CRUD operations for Income and Expense records (Amount, Date, Category, Description).
- Complete CRUD operations for Categories (Custom user-defined and default categories).
- Monthly Budget creation and tracking against real-time actual spending.
- Centralized Dashboard displaying total income, total expenses, net balance, and visual budget utilization.
- Categorized income and expense analytical reports.
- Clean, responsive web UI built with modular React components.

### Excluded Features
- Live bank account sync and automatic transaction feeds.
- Online payment gateway integration.
- Investment management and stock portfolio tracking.
- Cryptocurrency transaction tracking.
- Tax estimation and official tax filing calculations.
- Dedicated native mobile applications (iOS/Android).
- Image/receipt upload optical character recognition (OCR).
- Multi-currency conversion services.

## 7. Functional Requirements
### Authentication and Users
- The system shall allow new users to register an account securely.
- The system shall allow registered users to log in and receive a secure authentication token (JWT).
- The system shall protect user data by restricting route access using JWT verification.
- The system shall restrict administrative management capabilities to Administrator accounts.
- The system shall allow users to view and update their profile credentials.

### Income and Expense Management
- The system shall allow users to log new income records with amount, date, category, and optional notes.
- The system shall allow users to log daily expenses with amount, date, category, and optional notes.
- The system shall allow users to view, update, and delete their logged transactions.
- The system shall maintain complete transaction history with date and category filters.

### Category and Budget Management
- The system shall provide default system categories for income and expenses.
- The system shall allow users to create, update, and delete custom categories.
- The system shall allow users to define monthly budget limits overall or per category.
- The system shall automatically aggregate actual spending and evaluate it against defined budget caps.

### Dashboard and Reports
- The system shall render a real-time dashboard summarizing total income, total expenses, and current net savings.
- The system shall display category-wise spending breakdowns.
- The system shall show monthly performance metrics and alert indicators when expenses near or exceed budget limits.
- The system shall generate structured financial summaries for custom date ranges or selected months.

## 8. Non-Functional Requirements
### Security
- User passwords must be hashed using bcrypt before database storage.
- All protected API routes must require a valid JWT authorization header.
- Strict input validation and sanitization must be enforced on client and server to prevent injection attacks.
- Sensitive environment variables (e.g., database URIs, JWT secrets) must be secured outside source control.

### Performance
- Transactions must log quickly, and dashboard summaries must aggregate efficiently.
- MongoDB aggregation queries should be optimized to handle growing transaction history without delay.

### Usability
- The web application must feature a clean, intuitive, and responsive UI built with React.
- Navigation between transactions, budgets, and reports must be fast and seamless.
- Form inputs must deliver clear, actionable validation messaging.

### Reliability
- The backend API must gracefully manage invalid data payloads and DB connection errors without crashing.
- Meaningful HTTP status codes and JSON error messages must be returned to the client.

### Maintainability
- Backend architecture must adhere to modular separation (Routes, Controllers, Models, Middleware).
- Frontend codebase must utilize reusable React components and predictable state management.
- Source code must be organized, clean, and documented with standard Git commit patterns.

### Scalability
- System database schema and REST API endpoints should be structured to support optional upgrades such as Cloudinary receipt uploads, recurring transactions, PDF/Excel exports, and dark mode toggling.

## 9. Expected Outcome
The Expense Tracker & Budget Manager will provide users with an accessible personal finance platform to record transactions, maintain budgets, and gain insight into personal spending habits[cite: 1]. Constructing this application gives students practical experience in MERN stack integration, RESTful API engineering, MongoDB aggregation frameworks, JWT security, component-driven frontend design, and team workflow management using GitHub[cite: 1, 2, 3].