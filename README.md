# cpu-load
Get current Node.js process CPU load and overload (no external dependencies).

## Example

```JavaScript
const ProcessCpuLoad = require('cpu-load');

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

`npm install --save cpu-load`


## API

##### `ProcessCpuLoad::start(callback, resolution = 1000)`
Starts probing CPU load.

###### `callback`: function(percentage)
Called by the library at each `resolution` interval and give the percentage of CPU usage.  
If the percentage is > 100, the value is the overload percentage.
	

###### `resolution`: integer
Probe resolution in milliseconds.


##### `ProcessCpuLoad::stop()`
Stop probing CPU load.


## Caveat

The library does not take into account the other processes running on the same CPU than the node process.  
The value returned is the total CPU load on which the node process is running.  


## Credits

[Franck Freiburger](https://www.franck-freiburger.com)
