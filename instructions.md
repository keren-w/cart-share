# Yess Frontend Assignment

## **Building a Shared Shopping Cart for an Ecommerce Website**

### **Objective**

Create shared shopping cart functionality for an e-commerce website where multiple users can collaborate on a single cart, add items, and automatically remove items after 30 days if not purchased.

### **Requirements**

- **Main Screen**
    - Show a list of items (layout and style are flexible).
    - Each item should have a name, description, price, and a button to add the item to the cart.
    - Clicking “Add to Cart” opens the cart sidebar.
    - The main screen also has a cart button in the header that opens the cart sidebar.
- **Basic Cart functionality:**
    - When the cart is empty, it should show a placeholder.
    - The cart opens as a sidebar (on top of the main screen).
    - Clicking outside the cart sidebar should close it.
    - Users can remove items and change the quantity of each item.
    - Users see the subtotal amount (in $).
    - Users can click on “Clear Cart” or “Continue to Checkout,” which closes the shopping cart with a relevant notification (success).
    - Items should be automatically removed from the cart after 30 days if not purchased.
- **Shared Cart Functionality**:
    - Multiple users should be able to share a cart.
    - Users can add items to the shared cart and view items that others have added.

### Notes

- **Frontend**:
    - Use [Mantine](https://mantine.dev/) as the UI library.
    - Provide user-friendly interfaces for managing the shared cart, including adding items, viewing the cart, and handling item expiration.
- **Backend**:
    - Implement server-side logic to handle shared cart operations.
    - Choose any technology stack for the backend (Node.js, Python, Ruby, etc.).
    - Implement API endpoints for cart operations.
- **Database**:
    - Choose any database system (SQL, NoSQL, etc.) for storing cart data and managing item expiration.
    - Implement necessary data models for the cart, items, and user associations.
- **Additional Features (Bonus Points)**:
    - Implement authentication for users to access the shared cart.
    - Provide notifications for users when items are about to be removed (e.g., 3 days before removal).
    - Implement a way for users to leave comments on items for other users and show relevant notifications.
    - Implement real-time updates to the cart using WebSockets or similar technologies.
    - Use advanced Mantine components to enhance the UI/UX.
    - Deploy the application to a cloud platform.

### **Contact**

If you have any questions or need clarification, please reach out to [alexk@yess.ai](mailto:alexk@yess.ai) or hiring@yess.ai.

Good luck and happy coding!