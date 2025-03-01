# FullStackDev

### Architecture

In this project, the frontend was built using both Express-rendered HTML/JavaScript and an Angular-based Single-Page Application (SPA). The Express frontend handled basic server-rendered pages, while Angular made everything more dynamic, letting users interact with data without needing full-page reloads. The SPA approach made the app feel faster and smoother by reducing unnecessary server requests. On the backend, we used MongoDB because it's flexible, works well with JSON, and scales easily compared to relational databases, making it a solid choice for an API-driven app.

### Functionality

JSON is just a way to structure and send data between the frontend and backend. Unlike JavaScript, which is an actual programming language, JSON is just a format used to transfer data efficiently. In this project, JSON made it easy for Angular to communicate with Express, letting the frontend request and update data seamlessly. Throughout development, I refactored code to improve efficiency, like optimizing API calls and making UI components reusable in Angular. This made things more maintainable, reduced redundancy, and kept everything consistent across the app.

### Testing

Testing the API meant making sure GET requests retrieved data and PUT requests updated records properly. I used Postman to manually test endpoints and browser DevTools to track requests. Since authentication added another layer, I had to check that requests included the right Authorization headers and that protected routes rejected unauthorized access. Debugging API issues often came down to making sure tokens were sent correctly and that the backend was properly validating them.

### Reflection

This course helped me level up my full stack development skills, especially when it comes to integrating a frontend SPA with a backend API. I got hands-on experience managing authentication with JWT, structuring a NoSQL database, and debugging API issues. Learning how to refactor code for efficiency and reuse also made a huge difference. Overall, these skills have made me a stronger candidate for web development and software engineering roles, and I feel a lot more confident in building and troubleshooting full stack apps.
