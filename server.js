import 'dotenv/config';
import app from './app.js';

const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${[port]}`);
});


export default server;


