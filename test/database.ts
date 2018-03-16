/**
 * Module dependencies.
 */

import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { Likemark } from '../src/models/Likemark'

// Load environment variables
dotenv.config()

/**
 * Get .env value to put in the connection.
 */
const database = process.env.SQLITE_DB as string
const storage = process.env.SQLITE_PATH as string

/**
 * Initialise SQLITE database connection in memory.
 */
export const connection = new Sequelize({
  database: database,
  dialect: 'sqlite',
  username: 'username',
  password: 'password',
  storage:  ':memory:',
  logging: true
})

// Create Likemark table in memory.
connection.getQueryInterface().createTable('Likemark',
  {
    id: {
      type: Sequelize.TEXT,
      primaryKey: true
    },
    parentId: {
      type: Sequelize.TEXT
    },
    title: {
      type: Sequelize.TEXT
    },
    url: {
      type: Sequelize.TEXT
    }
  })

connection.addModels([Likemark])
