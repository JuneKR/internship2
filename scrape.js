const request = require('request');
const cheerio = require('cheerio');
// const listName = [{
//     name : "start",
//     len : 0
// }];
// listName.forEach(el => {
//     console.log(el.len);
// });
// const listName = [];
request('https://theinternship.io/', (err, res, html) => {
    const listName = [];
    if(!err && res.statusCode == 200){ //http status code is ok
        const $ = cheerio.load(html); //make html data to obj!
        // const siteHeading = $('#section-what > div > div:nth-child(1)');
        // const output = siteHeading.find('h1').next().text();    
        // #__layout > div > div > section:nth-child(5) > div > div.columns.is-multiline > div > div > div.logo-box > a
        // #__layout > div > div > section:nth-child(5) > div > div.columns.is-multiline > div:nth-child(1) > 
        // '.partner > .logo-box > a > img'
        // const listName = [];
        $('.partner')
        .each((i, el) => {
            const item = $(el);
            const logoSrc = item.find('img').attr('src');
            const listDes = item.find('.list-company').text().length;
            // #__layout > div > div > section:nth-child(5) > div > div.columns.is-multiline > div:nth-child(1) > div > div.box-textbox > span
            //277 words
            // const str = 'บริษัท ไฟว์ลูป จำกัด เป็นผู้สร้าง Wisible Sales CRM Platform เป็นบริษัทเทคโนโลยีสัญชาติไทยที่ออกแบบและพัฒนาซอฟต์แวร์ด้วยทีมงานชาวไทย 100% ด้วยความมุ่งหวังที่จะสร้างเครื่องมือการทำงานที่เหมาะสมที่สุดกับการใช้งานของผู้ประกอบการเอสเอ็มอีในประเทศไทยและภูมิภาคเอเชียตะวันออกเฉียงใต้';
            listName.push({name : logoSrc, len: listDes});
            // console.log(listName);
            // console.log(logoSrc, listDes);
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
    // console.log(listName);
    // sort description!
    // bubbleSort(listName, 'len')
    // listName.sort();
    // console.log(listName);
})

// function bubbleSort(arr, len){
//     const arrLength = listName.length;
//     let i, j;

//     for(i = 0; i < arrLength; i++){
//         for(j = 0; j < arrLength - i; j++){
//             if(arr[j][len] > arr[j + 1][len]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }