const { readFileSync, writeFileSync} = require('fs')

const folder = './file-folder/fs/'

const first = readFileSync(folder + 'read.txt', 'utf8')
console.log(first);

const fileContent = 'this is a new text file content (sync) \n'
//flag: 'a' = append
writeFileSync(
   folder + 'new.txt', fileContent, {flag: 'a'}
)