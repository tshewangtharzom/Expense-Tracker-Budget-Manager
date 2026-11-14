# Application Workflow

1. User opens the application.
2. User registers or logs in.
3. System verifies login details.
4. User reaches the dashboard.
5. User selects a module.
6. User adds, views, updates, or deletes information.
7. System validates the entered data.
8. Data is saved in MongoDB.
9. Dashboard and reports are updated.
10. System displays a success message.

## Workflow Summary

Start
  |
  v
Register / Login
  |
  v
Authentication Successful?
  |
  |--- No ---> Show Error Message
  |
  |--- Yes
         |
         v
      Dashboard
         |
         v
      Select Module
         |
         v
      Perform Operation
         |
         v
      Validate Data
         |
         v
      Save to MongoDB
         |
         v
      Update Dashboard
         |
         v
      Show Success Message
         |
         v
        End