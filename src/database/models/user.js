const createUser = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: 'Users'
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'id', as: 'user'
    })
  }
  return User;
};

module.exports = createUser;
