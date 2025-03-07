const express = require('express');
const app = express();


// Open route to anything in the public folder
// Tells express that anything in the project_home/client/public folder is automatically accessible form the site's root path url
// With this wee can now add css, js, images, etc. to the public folder (and subdirectories) and they will be accessible from the site
app.use(express.static('client/public'));

// Route to the home page
app.get('/', function (req, res) {
    res.sendFile('/index.html', {root: './client/views' })
})



app.listen(1337, () => console.log('Website listening on port 1337!'));