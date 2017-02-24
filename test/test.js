const ProcessCpuLoad = require('..');

var load = new ProcessCpuLoad;

load.start(function(pcent) {

    console.log('process CPU load:', pcent+'%');
});

setTimeout(function() {

    load.stop();
}, 20000);


function makeCpuLoad() {

    for ( var i = 0; i < 2000000; ++i )
        Math.random();

    setTimeout(makeCpuLoad, 0);
}

makeCpuLoad();
