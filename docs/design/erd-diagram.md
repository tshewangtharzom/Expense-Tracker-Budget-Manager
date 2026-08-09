### File 2: `docs/design/erd-diagram.md`

```markdown
# Entity Relationship Diagram (ERD)

## Entity Relationships Summary
- **User to Expense**: One-to-Many — One User logs many Expenses.
- **User to Income**: One-to-Many — One User logs many Incomes.
- **User to Budget**: One-to-Many — One User creates many Monthly Budgets.
- **User to Category**: One-to-Many — One User can define multiple custom Categories.
- **Category to Expense**: One-to-Many — One Category classifies multiple Expenses.
- **Category to Income**: One-to-Many — One Category classifies multiple Incomes.
- **Category to Budget**: One-to-Many — One Category links to Monthly Budgets.

## Visual ERD Representation (Mermaid)

```mermaid
erDiagram
    USERS ||--o{ EXPENSES : logs
    USERS ||--o{ INCOMES : logs
    USERS ||--o{ BUDGETS : creates
    USERS ||--o{ CATEGORIES : owns

    CATEGORIES ||--o{ EXPENSES : classifies
    CATEGORIES ||--o{ INCOMES : classifies
    CATEGORIES ||--o{ BUDGETS : applies_to

    USERS {
        ObjectId _id PK
        string name
        string email
        string password
        string role
    }

    CATEGORIES {
        ObjectId _id PK
        string name
        string type
        boolean isDefault
        ObjectId userId FK
    }

    EXPENSES {
        ObjectId _id PK
        ObjectId userId FK
        ObjectId categoryId FK
        number amount
        date date
        string description
    }

    INCOMES {
        ObjectId _id PK
        ObjectId userId FK
        ObjectId categoryId FK
        number amount
        date date
        string description
    }

    BUDGETS {
        ObjectId _id PK
        ObjectId userId FK
        ObjectId categoryId FK
        number monthlyLimit
        number month
        number year
    }