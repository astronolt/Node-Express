const { readFile, writeFile} = require('fs')

const folder = './file-folder/fs/'

readFile(
   folder + 'read.txt', 'utf8',
   (err, result) => {
      if(err){
         console.log(err)
         return
      }
      const first = result + '\n'

      readFile(
         folder + 'read-2.txt', 'utf8',
         (err, result)=>{
            if(err){
               console.log(err)
               return
            }
            const second = result + '\n';

            fileContent = first  + second
            writeFile(
               folder + 'new-2.txt', fileContent + '\n', {flag: 'a'},
               (err, result)=>{
                  if(err){
                     console.log(err)
                     return
                  }
               }
            )
         }
      )
   }
)
