module.exports =(htmlFile,fruit) =>  {    //concate adding to the existing html file
    var display = htmlFile.replace(/{%IMAGE%}/g, fruit.image);
        display = display.replace(/{%PRODUCTNAME%}/g, fruit.productName);
        display = display.replace(/{%PRICE%}/g, fruit.price);
        display = display.replace(/{%FROM%}/g, fruit.from);
        display = display.replace(/{%QUANTITY%}/g, fruit.quantity);
        display = display.replace(/{%NUTRIENTS%}/g, fruit.nutrient);
        display = display.replace(/{%DESCRIPTION%}/g, fruit.description);
        display = display.replace(/{%ID%}/g, fruit.id);
        if(!fruit.organic) display=display.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
 
   // console.log(display);
   return display;
    
 }