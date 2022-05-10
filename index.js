var sppull = require("sppull").SPPull;

var context = {
    siteUrl: process.env.SITE_URL,
    username: process.env.USER,
	password: process.env.PASSWD
};

var options = {
    spRootFolder: process.env.LIB_FOLDER,
    dlRootFolder: process.env.TARGET_FOLDER
};

if (process.env.FILTER) {
	options.strictObjects = process.env.FILTER.split(';');
}

sppull.download(context, options)
    .then(function(downloadResults) {
        console.log("For more, please check the results", JSON.stringify(downloadResults));
    })
    .catch(function(err) {
        console.log("Core error has happened", err);
		process.exit(1);
    });