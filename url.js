import { URL } from 'url';
const myurl = new URL(
    'https://www.example.com:8080/products/list?category=books&sort=asc#section2'
);
console.log(myurl.protocol);
console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.pathname);
console.log(myurl.hash);
myurl.searchParams.forEach((v,k) => {
    console.log(k, '=', v);
})