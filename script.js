//below is the code for the understanding of the process.argv function

// let n=5;

// for(let i=0;i<n;i++){
//     console.log("hello,",i);
// }
// console.log("bye!");

// let args=process.argv;
// for (let i=2;i<args.length;i++){
//     console.log("hello to ",args[i]);
// }

// below is the code for the understanding of the export function in the same directory in files

const math=require("./math");

console.log(math.sum(2,2));
console.log(math.PI);

// below is the code for exporting data from files in different directory
 const info=require("./fruits");

 console.log(info);