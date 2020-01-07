var portfind = require('./lib/portfind.js');



portfind([3333, 3335], (err, i) => {
	if (!err) {
		console.log(i);
	}else{
		console.log(err);
	}
});


// portfind(3333).then(port => console.log(port)).catch(err => console.log(err));


