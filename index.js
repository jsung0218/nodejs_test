const fs = require('fs')

console.log('파일을 생성합니다.')
fs.writeFile('./sample.txt', 'hello, world!', function(err) {
  // 만일 에러가 발생했다면 에러를 호출해줍니다.
  if (err) throw err
  console.log('파일이 생성되었습니다!')
})
console.log('파일 생성 중!')