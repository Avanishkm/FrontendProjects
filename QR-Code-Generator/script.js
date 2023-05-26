const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateButton = document.getElementById('generateBtn');
const downloadButton = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateButton.addEventListener('click', (e)=>{
    e.preventDefault(); // prevent to reload a page
    isEmptyInput();
});

// for sizes
sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyInput();
})

// download a image

downloadButton.addEventListener('click', (e)=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadButton.setAttribute("href", imgAtrr);
    }else{
        downloadButton.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }

});


function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCOde();
    // }else{
    //     alert("Enter the text or URL to genarate your QR code");
    // }

    qrText.value.length > 0 ? generateQRCOde() : alert("Enter the text or URL to genarate your QR code");
}


// generate a qr code in qrContainer
function generateQRCOde(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text:qrText.value,
        height: size,
        width: size,
        colorLight: '#fff',
        colorDark: '#000',

    })
}

