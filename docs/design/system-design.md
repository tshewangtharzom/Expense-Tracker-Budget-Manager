# Expense Tracker & Budget Manager - System Design Documentation

## 1. System Modules
1. **User Management & Authentication**: User registration, login, JWT issuance, and profile updates.
2. **Category Management**: System default categories and custom user-defined categories (CRUD).
3. **Expense Management**: Add, update, delete, view, and filter daily expense records.
4. **Income Management**: Add, update, delete, view, and filter income transactions.
5. **Budget Management**: Establish monthly budget caps, track real-time utilization, and display warnings.
6. **Reports & Dashboard Analytics**: Aggregate total income, total expenses, net balance, and category breakdowns.

---

## 2. MongoDB Database Collections & Field Definitions

### Collection: `users`
- `_id`: ObjectId (Primary Key)
- `name`: String (Required)
- `email`: String (Required, Unique)
- `password`: String (Required, Hashed with bcrypt)
- `role`: String (Enum: ['Admin', 'User'], Default: 'User')
- `createdAt`: Date
- `updatedAt`: Date

### Collection: `categories`
- `_id`: ObjectId (Primary Key)
- `name`: String (Required)
- `type`: String (Enum: ['Income', 'Expense'], Required)
- `isDefault`: Boolean (Default: false)
- `userId`: ObjectId (Ref: `users`, Null if system default)
- `createdAt`: Date

### Collection: `expenses`
- `_id`: ObjectId (Primary Key)
- `userId`: ObjectId (Ref: `users`, Required)
- `categoryId`: ObjectId (Ref: `categories`, Required)
- `amount`: Number (Required)
- `date`: Date (Required, Default: Date.now)
- `description`: String (Optional)
- `createdAt`: Date

### Collection: `incomes`
- `_id`: ObjectId (Primary Key)
- `userId`: ObjectId (Ref: `users`, Required)
- `categoryId`: ObjectId (Ref: `categories`, Required)
- `amount`: Number (Required)
- `date`: Date (Required, Default: Date.now)
- `description`: String (Optional)
- `createdAt`: Date

### Collection: `budgets`
- `_id`: ObjectId (Primary Key)
- `userId`: ObjectId (Ref: `users`, Required)
- `categoryId`: ObjectId (Ref: `categories`, Required)
- `monthlyLimit`: Number (Required)
- `month`: Number (Required, e.g., 1-12)
- `year`: Number (Required, e.g., 2026)
- `createdAt`: Date

---

## 3. Application Navigation Flow

### Administrator Navigation Flow
```text
Login
  │
  ├── Administrator Dashboard
  │     ├── User Management (View Users / Toggle Roles)
  │     ├── Category Management (System Defaults)
  │     ├── System Analytics & Activity Logs
  │     └── Profile & Account Settings
  └── Logout