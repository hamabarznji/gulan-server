const bcrypt = require('bcrypt');
const pass = bcrypt.hashSync('11111111', 10);


const users = [
    {
      username: 'gulan',
      password: pass,
      role: 'admin',
      themeColor: true,
    },
    {
      username: 'hama',
      password: pass,
      role: 'admin',
      themeColor: true,
    },
    {
      username: 'sivan',
      password: pass,
      role: 'user',
      themeColor: true,
    },
  ];

  export default users;

