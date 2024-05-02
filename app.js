const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 5000; // You can change the port as needed

// Define a route to handle button click
app.get('/open-app', (req, res) => {
    // Specify the path to the application executable
    const appPath = 'C:\\Program Files\\3D Systems\\3D Sprint 5.2.0.1034\\3DSprint.exe';

    // Execute the command to open the application
    exec(`start "" "${appPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error opening application: ${error.message}`);
            return res.status(500).send('Error opening application');
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return res.status(500).send('Error opening application');
        }
        console.log(`Application opened successfully: ${stdout}`);
        res.send('Application opened successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
