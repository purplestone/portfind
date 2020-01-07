# portfind
Find a port at localhost, sync or async.


## Getting Started 
Install : ``npm i portfind``


## Examples

```javascript
var portfind = require('portfind');

portfind().then(function (port) {
	console.log('Got a port:', port);
});

portfind(8080, function (err, port) {
	if (!err) {
		console.log('Got a port:', port);
	}
});

portfind(8080, 8999).then(function (port) {
	console.log('Got a port:', port);
});

var port = portfind.sync([80, 1080, 8080, 8088]);
console.log('Got a port:', port);

```




## API

* ``portfind()`` // Empty input , Random a free port

* ``portfind(start)`` // Input 1 number, End at start + 100

* ``portfind(from, end)`` // Input 2 number, Try between

* ``portfind([port1, port2 ...])`` // Input a array, Try port in array

Callback style

``portfind(args, callback)``

Promise

``portfind(args).then().catch()``

Sync

``portfind.sync(args)``


## license
ISC