
const { readFile, writeFile}= require('fs').promises;

const FILE_NAME = './data.json';

let sum = 0;
let sum2 = 0;

(async()=>
    {
        const readedJSON= await readFile(FILE_NAME,'utf-8');

        const readed = JSON.parse(readedJSON);

        readed.forEach(element => {
            sum += element.length;

            if (element.angle <10)
                sum2 += element.length;
        });
         console.log("Total Length of All Parts: "+sum);
        
         console.log("Total Length of Parts with Angle Less Than 10 Degrees: "+sum2);

    }

)();
