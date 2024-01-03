const fs = require('fs');
const path = require('path');

exports.onPostBuild = () => {
  fs.copyFileSync(
    path.join(__dirname, '404.html'), 
    path.join(__dirname, 'public', '404.html')
  );
};
