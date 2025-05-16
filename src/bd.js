import { createPool } from "mysql2/promise";

import {
    bd_host,
    bd_database,
    bd_user,
    bd_password,
    bd_port,
} from './config.js'

export const conmysql = createPool({
    host: bd_host,
    database: bd_database,
    user: bd_user,
    password: bd_password,
    port: bd_port
})