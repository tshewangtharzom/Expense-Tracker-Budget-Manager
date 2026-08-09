### File 3: `docs/design/wireframes.md`

```markdown
# Application Page Wireframes

## Page 1: Login & Registration Page
```text
+--------------------------------------------------------------+
|                    EXPENSE TRACKER APP                       |
+--------------------------------------------------------------+
|                                                              |
|                     [ Login / Register ]                     |
|                                                              |
|   Email Address:    [____________________________]           |
|   Password:         [____________________________]           |
|                                                              |
|                     [  Submit / Login  ]                     |
|                                                              |
|   Don't have an account? Register here                       |
+--------------------------------------------------------------+
## Dashboard Overview Page
+--------------------------------------------------------------+
| ExpenseTracker | Dashboard | Income | Expense | Budgets | [User]
+--------------------------------------------------------------+
| OVERVIEW METRICS                                             |
| +------------------+  +------------------+  +--------------+ |
| | Total Income     |  | Total Expenses   |  | Net Balance  | |
| | $5,400.00        |  | $2,150.00        |  | +$3,250.00   | |
| +------------------+  +------------------+  +--------------+ |
|                                                              |
| CATEGORY BREAKDOWN                     RECENT TRANSACTIONS   |
| +--------------------------+          +--------------------+ |
| | [Bar/Pie Chart Layout]   |          | Food    -$45.00    | |
| | - Food & Dining: 35%     |          | Salary +$3,000.00  | |
| | - Rent & Utilities: 45%  |          | Fuel    -$60.00    | |
| +--------------------------+          +--------------------+ |
+--------------------------------------------------------------+
## Transaction List Page (Expense / Income History)
+--------------------------------------------------------------+
| ExpenseTracker | Dashboard | Income | Expense | Budgets | [User]
+--------------------------------------------------------------+
| EXPENSE TRANSACTIONS                           [ + Add New ] |
|                                                              |
| Filter by Month: [ August 2026 v ]   Category: [ All v ]      |
|                                                              |
| Date       | Category       | Description       | Amount     |
| -----------|----------------|-------------------|----------- |
| 2026-08-01 | Grocery        | Weekly Supplies   | $120.00    |
| 2026-08-03 | Utilities      | Electricity Bill  | $85.50     |
| 2026-08-05 | Entertainment  | Movie Night       | $30.00     |
|                                                              |
| [Previous] Page 1 of 3 [Next]                                |
+--------------------------------------------------------------+
## Add / Edit Transaction Form
+--------------------------------------------------------------+
| ExpenseTracker | Dashboard | Income | Expense | Budgets | [User]
+--------------------------------------------------------------+
| ADD NEW EXPENSE                                              |
|                                                              |
| Amount ($):       [ 120.00                     ]             |
| Category:         [ Select Category        v ]             |
| Date:             [ 2026-08-09                 ]             |
| Description:      [ Weekly groceries           ]             |
|                                                              |
|                   [ Save Transaction ]  [ Cancel ]           |
+--------------------------------------------------------------+
## Budget Management Page
+--------------------------------------------------------------+
| ExpenseTracker | Dashboard | Income | Expense | Budgets | [User]
+--------------------------------------------------------------+
| MONTHLY BUDGET PLANNER                         [ + Set Limit]|
|                                                              |
| Category: Food & Dining                                      |
| Budget Limit: $500.00 | Spent: $350.00 | Remaining: $150.00   |
| [=======================------------] 70% Utilized           |
|                                                              |
| Category: Entertainment                                      |
| Budget Limit: $100.00 | Spent: $110.00 | EXCEEDED BY $10.00  |
| [===================================!] 110% OVER BUDGET      |
+--------------------------------------------------------------+