function Named(req,res){
    res.send("Named export");
}


function Default(req,res){
    res.send("Default export");
}

module.exports = Default;

module.exports = {Named};

// const add = (a, b) => {
//     return a + b;
// }
// const sub = (a, b) => {
//     return a - b;
// }
// const multi = (a, b) => {
//     return a * b;
// }
// const divide = (a, b) => {
//     return a / b;
// }

// module.exports = { add, sub, multi, divide };
// export to index.js
