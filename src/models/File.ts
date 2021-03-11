import { DataTypes } from 'sequelize';

import sequelize from '../data';

const File = sequelize.define('File', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

export default File;
