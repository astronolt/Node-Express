const http = require('http')

const server = http.createServer(
   (req, res)=>{
      const pageTitle = '<title>Noje - Express</title>';
      const pageHome = '<h1>welcome to the home page</h1>';
      const pageHistory = '<h1>Here is our short history</h1>';
      const pageError = `
      <center>
         <h1>Error 404</h1>
         We cant seem to find the page you are looking for </br>
         <a href='/'>Home</a>
      </center>`;
      //res.write('welcome to the home page')
      //or
      //res.end('welcome to the home page')
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200, {'Content-Type': 'text/html'});
      if(req.url === '/'){
         res.end(`
         ${pageTitle}
         ${pageHome}
         `)
      }
      else if(req.url === '/about'){
         res.end(`
         ${pageTitle}
         ${pageHistory}
         `)
      }else{
         res.end(`
         ${pageTitle}
         ${pageError}
         `)
      }
   }
)

server.listen(5000)