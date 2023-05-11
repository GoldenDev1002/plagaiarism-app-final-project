const kmp = require('kmp-matcher');

const text = "aabbaaccdsbbaab fish";
const pattern = "a fish";

const matches = kmp.kmp(text, pattern);

console.log(matches); // prints [0, 1, 4, 5, 12, 13]
