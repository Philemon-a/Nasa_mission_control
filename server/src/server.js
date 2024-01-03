const http = require('http');

const app = require('./app');
const { loadPlanetsData, planets } = require('./models/planets.models');


const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
async function start(){
    await loadPlanetsData();
    server.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`)
    });
}

start();