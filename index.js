'use strict';

const Comb = require('csscomb');

class CSScombBrunchCompiler {
    constructor(config) {
        this.config   = config.plugins.csscomb || {};
        this.encoding = this.config.encoding || 'csscomb'; // default to csscomb
        this.logConfig  = this.config.logConfig || false; // default to false

        if (this.logConfig) {
            // Use node's util.inspect(object) to print out object's structure.
            const util    = require("util");
            const obj_str = util.inspect(this.config);
            console.log(`CSScomb config: ${obj_str}`);
        }

        this.comb = new Comb(this.encoding);
    }

    compile(file) {
        const data = file.data;
        const path = file.path;
        const map  = file.map;

        try {
            this.comb.processPath(path);
            return Promise.resolve(file);
        } catch (error) {
            return Promise.reject(`CSScomb failed on ${path}: ${error}`);
        }
    }
}

CSScombBrunchCompiler.prototype.brunchPlugin = true;
CSScombBrunchCompiler.prototype.type = 'stylesheet';
CSScombBrunchCompiler.prototype.pattern = /\.(?:css|scss|sass|less)$/;

module.exports = CSScombBrunchCompiler;
