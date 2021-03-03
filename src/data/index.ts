import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mariadb://localhost:3306/rpc-db?user=root&password=sample')

sequelize.sync({ force: true });

export default sequelize;