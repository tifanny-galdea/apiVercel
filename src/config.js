import { config } from "dotenv";
config()

export const bd_host = process.env.bd_host || 'localhost'
export const bd_database = process.env.bd_database || 'base2025'
export const bd_user = process.env.bd_user || 'root'
export const bd_password = process.env.bd_password || '8471TfG*M'
export const bd_port = process.env.bd_port || 3306
export const port = process.env.port || 3001
