const launches = new Map();

let lattestFlightNumber = 100;
const launch ={
    mission: 'mission',
    rocket: 'rocket',
    launchDate: new Date('december 5, 2024'),
    destination: 'fahfja',
    flightNumber: 100,
    customers: ['Nasa'],
    upcoming: true,
    sucess: true,

};

launches.set(launch.flightNumber, launch);

function getAllLaunches(){
    return Array.from(launches.values());
}

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function newLaunch(launch){
    lattestFlightNumber ++;
    launches.set(lattestFlightNumber, Object.assign(launch,{
        flightNumber : lattestFlightNumber,
        customers: ['Nasa'],
        upcomming: true,
        sucess: true,
    }));
};

function abortLaunch(launchId){
   const aborted = launches.get(launchId);
   aborted.upcoming = false;
   aborted.sucess = false;
    return aborted;
};
module.exports = {
    getAllLaunches,
    newLaunch,
    existsLaunchWithId,
    abortLaunch,
};