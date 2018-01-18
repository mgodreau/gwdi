require('dotenv').config({ silent: true });

var a = 'foo';
console.log(a);

const WDIStudent = require('./student');
console.log(WDIStudent);

var me = new WDIStudent('Riley', 'Dallas', 123456789);
console.log(me);
console.log(me.formattedSalary());

console.log(process.env.DB_CONNECTION);
console.log(process.env.MY_VARIABLE);
console.log(process.env.YET_ANOTHER_VARIABLE);
console.log(process.env);
