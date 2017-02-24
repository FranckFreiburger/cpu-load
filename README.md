# process-cpu-load
Get current Node.js process CPU load (no external dependencies).

## Example

```JavaScript
const ProcessCpuLoad = require('process-cpu-load');

var load = new ProcessCpuLoad;

load.start(function(pcent) {

	console.log('process CPU load:', pcent+'%');
});

setTimeout(function() {

	load.stop();
}, 5000);


function makeCpuLoad() {
	
	for ( var i = 0; i < 2000000; ++i )
		Math.random();
	
	setTimeout(makeCpuLoad, 0);
}

makeCpuLoad();
```

## Install

`npm install --save FranckFreiburger/process-cpu-load`


## API

##### `ProcessCpuLoad::start(callback, resolution = 1000)`
Starts probing CPU load

`callback`
	function(pcent)

`resolution`
	probe resolution in milliseconds


##### `ProcessCpuLoad::stop()`
Stop probing CPU load


## Credits

[Franck Freiburger](https://www.franck-freiburger.com)
