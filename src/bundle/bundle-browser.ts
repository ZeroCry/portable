/// <reference path="../typing.d.ts" />
import bundle = require("../bundle");


function bundle_browser(b: bundle.Bundle) {

    var volumes = {
        '/lib': {},
    };

    b.conf.volumes.forEach((volume) => {
        volumes[volume[0]] = b.layers.getLayer(volume[1]).toJson();
    });

    var process = {
        expose: true,
        platform: 'browser',
        env: {
            PWD: '/usr'
        },
        argv: ['/usr/app.js'],
        drives: volumes
    };

    var lines = [];
    lines.push('(function(process) { eval(process.drives["/lib"]["portable.js"])(process); })(' +
        JSON.stringify(process, null, 4) + ');\n');
    return lines.join('');
}

export = bundle_browser;