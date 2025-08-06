const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//This is how we can serve static files from the 'public' directory
//Express automatically serving static files like HTML, CSS, JS, 
// images, etc., much easier and cleaner compared to the
//  manual approach you posted.

//Express will handle the file path, MIME types, reading files, 
// and error management internally.

//public is like the middle ware so it can have css images etc. index html is default