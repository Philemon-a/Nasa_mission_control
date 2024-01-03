const { 
    getAllLaunches, 
    newLaunch, 
} = require('../../models/launches.models');


function httpGetAllLaunches(req,res){
    return res.status(200).json(getAllLaunches());
};


function httpAddNewLaunch(req, res){
    const launch = req.body;
    
    if (!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.destination) {
          return res.status(400).json({
            error: 'Missing required launch property',
          });
        }
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
          error: 'Invalid launch date',
        });
    }

    newLaunch(launch);
    return res.status(201).json(launch);
};

module.exports ={
    httpGetAllLaunches,
    httpAddNewLaunch,
};