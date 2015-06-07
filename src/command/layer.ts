/// <reference path="../typing.d.ts" />
import log = require('../log');
import build = require('../build');
import layer = require('../layer');
import path = require('path');
import mkdir = require('../util/mkdir');


function cmd_layer(args, options) {
    var manifest = require('../manifest');
    var manifest = manifest.Manifest.readFile(args[0]);

    var layers = build.Builder.buildLayers(manifest);
}

export = cmd_layer;