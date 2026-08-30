const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles)
{

    if(config.phases === ""){
        console.log("No phases found");
    }
    else if(config.fault === "true")
    {
        console.log("Faulted phase!");
    }
    else if(cycles <= 0)
    {
        console.log("Inavlid phase detected");
    }
    else{
        console.log(`Switching to ${config.phases.color} and ${config.phases.duration}`);
    }
}

function generateTimeline(config, cycles)
{
    
}