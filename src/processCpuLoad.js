module.exports = function ProcessCpuLoad() {
	
	this._tid = 0;
	
	this.start = function(callback, resolution) {
		
		if ( resolution === undefined )
			resolution = 1000;

		var hrTime = process.hrtime();
		var cpu = process.cpuUsage();
		
		this._tid = setTimeout(function() {
			
			var hrTimeDiff = process.hrtime(hrTime);
			var cpuTimeDiff = process.cpuUsage(cpu);

			var time = Math.min((hrTimeDiff[0] * 1e6 + hrTimeDiff[1]), resolution);
			var cpuTime = (cpuTimeDiff.user + cpuTimeDiff.system) / 1e3;
			
			callback(Math.round(100 * cpuTime / time));
			this._tid = setTimeout(this.start.bind(this, callback, resolution));
		}.bind(this), resolution);
	}
	
	this.stop = function() {
		
		clearTimeout(this._tid);
	}
}