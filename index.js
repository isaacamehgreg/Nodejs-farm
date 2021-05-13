const http =require('http');
const fs =require('fs');
const url = require('url');

const replaceValue =  require('./module/replaceValue');


const templateOverview  =fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const templateCard  =fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const templateProduct  =fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const data  =fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

const dataobj =JSON.parse(data);







 
const server=http.createServer((req,res)=>{
   //   pathname = req.url;
   //   console.log(pathname);
  // console.log(url.parse(req.url));
     const{query,pathname} = url.parse(req.url, true)  
     //console.log(url.parse(pathname,true))

     
//overview
     if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type':'text/html'});
        //const cardHtml = dataobj.map(el => replaceTemplate(templateCard, el)).join('');

        //conventional way
      //   const cardHtml = dataobj.map( function(product){
      //       return replaceValue(templateCard,product);      
      //   })

      //ES6 method
        const cardHtml = dataobj.map(fruit => replaceValue(templateCard,fruit)).join('');

        const output = templateOverview.replace('{%PRODUCT_CARDS%}',cardHtml);
        //console.log(cardHtml); 
        res.end(output);



// product        
     }else if(pathname === '/product'){
      const fruit = dataobj[query.id];
  
   

     const output = replaceValue(templateProduct, fruit);

      //console.log(output);


        res.end(output);
        
     }
//api
     else if(pathname === '/api'){
      
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(dataobj);
     }
//     
     else{
         res.writeHead(404,{
             'Content-type': 'text/html'
         });
         res.end('<h1>page not found</h1>');
     }
 });
server.listen(process.env.PORT || 8000,'localhost',()=>{console.log('listening to request');});
