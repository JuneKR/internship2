const request = require('request');
const cheerio = require('cheerio');

request('https://theinternship.io/', (err, res, html) => {
    const listName = [];
    if(!err && res.statusCode == 200){ //http status code is ok
        const $ = cheerio.load(html); //load html data!
        $('.partner')
        .each((i, el) => {
            const item = $(el);
            //logo src!
            const logoSrc = item.find('img').attr('src');
            //logo description!
            const listDes = item.find('.list-company').text().length;
            listName.push({name : logoSrc, len: listDes});
        })

        //sort by sort method!
        listName.sort(function(a, b){
            return a.len - b.len;
        });
        listName.forEach(el =>{
            console.log(el.name);
        });
        // console.log(listName);

    } 
    else{
        console.log(err);
    }  

})
