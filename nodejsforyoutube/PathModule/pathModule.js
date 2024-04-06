const path = require("path");
console.log(path.dirname("D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule/pathModule.js"));
//output :: D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule
console.log(path.extname("D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule/pathModule.js"));
//output :: .js
console.log(path.basename("D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule/pathModule.js"));
//output :: pathModule.js
console.log(path.parse("D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule/pathModule.js"));
//output ::
// {
//     root: 'D:/',
//     dir: 'D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule',
//     base: 'pathModule.js',
//     ext: '.js',
//     name: 'pathModule'
//   }
const mypath = path.parse("D:/xampp82/htdocs/nodeJsProjects/nodejsforyoutube/PathModule/pathModule.js");
console.log(mypath.name);
console.log(mypath.ext);
//output :: 
// pathModule
//.js 