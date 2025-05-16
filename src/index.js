
import app from './app.js'
import { port } from './config.js'

app.listen(process.env.PORT || 3001); //asignar un puerto del Render o el predeterminado aquí

console.log('El servidor está escuchando por el puerto: ', port)