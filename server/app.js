const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const adminRoutes = require('./routes/Adminroutes');

// Application-level middleware
app.use(express.json());
app.use(cors());

// Mount the admin routes
app.use('/api', adminRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
