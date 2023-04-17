
const streamToText = async (blob) => {
    const readableStream = await blob.getReader();
    const chunk = await readableStream.read();
    return new TextDecoder('utf-8').decode(chunk.value);
};

const bufferToText = (buffer) => {
    const bufferByteLength = buffer.byteLength;
    const bufferUint8Array = new Uint8Array(buffer, 0, bufferByteLength);
    return new TextDecoder().decode(bufferUint8Array);
};


document.getElementById('input').addEventListener('change', function(e) {

    let file = document.getElementById('input').files[0];
    (async () => {
        const fileContent = await file.text();
        // console.log('.text()', fileContent);
        document.getElementById("contents").innerText = fileContent;
        /* const fileContentStream = await file.stream();
        console.log('.stream()', await streamToText(fileContentStream));
        const buffer = await file.arrayBuffer();
        console.log('.buffer()', bufferToText(buffer));
        const fileSliceBlob = file.slice(0, file.length);
        const fileSliceBlobStream = await fileSliceBlob.stream();
        console.log('.slice() and .stream()', await streamToText(fileSliceBlobStream)); */  
    })();
    getContents();
});
const fname = [], fsize = [];
async function getContents(){
    await sleepy();      
    const allContent = document.querySelector("p").innerText;      
    let phrase = allContent.split('\n').slice(1)            
    phrase.forEach(item => {        
        const data = item.replace(/"/g,"").split(',');
        fname.push(data[0]);        
        fsize.push(parseInt(data[1]));
        //console.log(item);
    });      
    let maxi = getMax(fsize);      
    document.getElementById("largest").innerText = "largest: " + 
    fname[maxi[0]] + maxi[1];    
}
// console.log(fname);    
// console.log(fsize);    
function sleepy(){
    return new Promise(resolve =>setTimeout(resolve,2000));
}

function getMax(array){
    let myMax = 0,goodIdx=0;
    for (let idx = 0; idx < array.length; idx++) {
        // const element = array[idx];    
        if(array[idx] > myMax){     
            myMax = array[idx];
            goodIdx = idx;
        }}
        return [goodIdx, String(myMax/1024)];
}  
