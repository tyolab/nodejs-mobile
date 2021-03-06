'use strict';
const common = require('../common');
const timers = require('timers');

// delete global APIs to make sure they're not relied on by the internal timers
// code
delete global.setTimeout;
delete global.clearTimeout;
delete global.setInterval;
delete global.clearInterval;
delete global.setImmediate;
delete global.clearImmediate;

const timeoutCallback = () => { timers.clearTimeout(timeout); };
const timeout = timers.setTimeout(common.mustCall(timeoutCallback), 1);

const intervalCallback = () => { timers.clearInterval(interval); };
const interval = timers.setInterval(common.mustCall(intervalCallback), 1);

const immediateCallback = () => { timers.clearImmediate(immediate); };
const immediate = timers.setImmediate(immediateCallback);
