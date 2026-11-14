# MongoDB Database Design

## 1. Users Collection
- _id: Unique user ID
- name: User's full name
- email: User's email address
- password: Hashed password
- role: Admin or User

## 2. Categories Collection
- _id: Unique category ID
- userId: Reference to user
- name: Category name
- type: Income or Expense
- description: Category details

## 3. Income Collection
- _id: Unique income ID
- userId: Reference to user
- categoryId: Reference to category
- amount: Income amount
- source: Income source
- date: Income date
- description: Additional details

## 4. Expenses Collection
- _id: Unique expense ID
- userId: Reference to user
- categoryId: Reference to category
- amount: Expense amount
- title: Expense title
- date: Expense date
- description: Additional details

## 5. Budgets Collection
- _id: Unique budget ID
- userId: Reference to user
- categoryId: Optional category reference
- month: Budget month
- year: Budget year
- limit: Spending limit

## Relationships
- One user can have many categories.
- One user can have many income records.
- One user can have many expense records.
- One user can have many budgets.
- One category can be linked to many income records.
- One category can be linked to many expense records.
- One category can optionally be linked to many budgets.