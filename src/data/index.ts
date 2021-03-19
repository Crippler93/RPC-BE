import { Sequelize } from 'sequelize'

// TODO: Move values to environment variables
const USER = 'root'
const PASSWORD = 'sample'
const PORT = '3306'

const sequelize = new Sequelize(
  `mariadb://localhost:${PORT}/rpc-db?user=${USER}&password=${PASSWORD}`
)

sequelize.sync()

export default sequelize
