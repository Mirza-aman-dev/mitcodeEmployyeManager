const url = 'https://firebasestorage.googleapis.com/v0/b/emitcode-29e46.appspot.com/o/employee_photos%2Fman.jpg?alt=media&token=6abf220e-9fa3-476a-a90f-d23e4c5eaed1'
const encodeURl = encodeURI(url)
console.log(encodeURl);
const decodec = decodeURI(encodeURl)
console.log(`DECODED URL IS : ${decodec}`);
