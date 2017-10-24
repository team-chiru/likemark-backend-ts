/**
 * Module dependencies.
 */
import * as express from 'express'
import * as dotenv from 'dotenv'

// Load routes from external files
import { router as route } from './app/routes/entity'

// Load environment variables
dotenv.config()

// Declare express application and export to server
export const app = express()

// Set routes endpoint in the app
app.use('/entity', route)
