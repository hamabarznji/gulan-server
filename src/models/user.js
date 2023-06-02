const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config'); // Assuming the config.js file is in the parent directory

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  }
);

// User.sync({ force: true })
//   .then(() => {
//     console.log('User table created');
//     process.exit(0);
//   })

module.exports = User;
