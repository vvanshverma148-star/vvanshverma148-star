const https = require('https');
https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg', res => {
  res.pipe(process.stdout);
});
