  
var net = require('net');

function main(aPort, cb) {
	var server = net.createServer();
	server.unref();
	
	server.on('error', tryPort);
	tryPort();

	function tryPort() {
		var port = aPort.shift();
		if (port) {
			server.listen(port, function () {
				try {
					var port = server.address().port;
					server.close(function () { cb(null, port) });
				} catch (error) {}
			});
		}else{
			server.close(function () { cb('portfind fail.') });
		}
	}
}


function portfind (start, end) {
	var aPort = [];
	var args = [].slice.call(arguments);
	var cb = args.slice(-1)[0];
	if ({}.toString.call(cb) == '[object Function]') {
		returnPromise = false;
	}else{
		returnPromise = true;
	}
	var lenArgs = args.length - (+!returnPromise);
	if ({}.toString.call(start) == '[object Array]') {
		aPort = start;
	}else{
		if (lenArgs == 1) {
			for (var i = start; i <= start + 100; i++) {
				aPort.push(i);
			}
		}else if(lenArgs == 2){
			if (start > end) {
				var tmp = end;
				end = start;
				start = tmp;
			}
			for (var i = start; i <= end; i++) {
				aPort.push(i);
			}
		}else{
			cb('arguments of portfind error');
		}
	}

	if (returnPromise) {
		return new Promise(function (ok, cbErr) {
			main(aPort, function (err, port) {
				if (err) {
					cbErr(err);
				}else{
					ok(port);
				}
			});
		});
	}else{
		main(aPort, cb);
	}
}


module.exports = portfind;