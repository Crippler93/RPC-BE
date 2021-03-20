import { Sequelize } from 'sequelize'

import env from '../enviroment'

const { USER, PASSWORD, PORT } = env

const sequelize = new Sequelize(
  `mariadb://localhost:${PORT}/rpc-db?user=${USER}&password=${PASSWORD}`,
)

sequelize.sync()

export default sequelize
