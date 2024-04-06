const os = require("os");

// Get System is 64 bit or 32 bit
console.log(os.arch());

// Get free Memory(RAM) of System
console.log(os.freemem()/1024/1024/1024);

// Get Total Memory(RAM) of System
console.log(os.totalmem()/1024/1024/1024);

// Get host Name of System
console.log(os.hostname());

// Get Platform of System
console.log(os.platform());
