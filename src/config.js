import { config } from "dotenv";
config()

export const bd_host = process.env.bd_host || 'dpg-d0jum3juibrs73928q7g-a'
export const bd_database = process.env.bd_database || 'base2025_database'
export const bd_user = process.env.bd_user || 'root'
export const bd_password = process.env.bd_password || 'v6nO44ibkailRFq2p5tgao0MKl4MOOY9'
export const bd_port = process.env.bd_port || 5432
export const port = process.env.PORT || 3001
