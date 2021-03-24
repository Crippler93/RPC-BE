import { Sequelize } from 'sequelize'

import env from '../enviroment'

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_PORT } = env

const sequelize = new Sequelize(
  `mariadb://localhost:${MYSQL_PORT}/rpc-db?user=${MYSQL_USER}&password=${MYSQL_PASSWORD}`,
)

sequelize.sync()

export default sequelize
