module.exports = function keyword(key) {
    switch(key) {

        case 'Hai':
            var result = 'Hai Aku Blankpagebot, aku akan membantumu. apa yang kamu mau tadi dari aku \n\n *1*. Service \n *2*. Portfolio \n\n Balas aku dengan nomor menu yang kamu pilih ya.';
            break;
            
        case 'Start':
            var result = 'Hai Aku Blankpagebot, aku akan membantumu. apa yang kamu mau tadi dari aku \n\n *1*. Service \n *2*. Portfolio \n\n Balas aku dengan nomor menu yang kamu pilih ya.';
            break;

        case '1':
            var result = 'Hai, berikut service yang kami tawarkan : \n\n *DG* : Digital Marketing \n *BR* : Branding \n *WEB* : Web Apps & Development \n *SM* : Social Media \n\n Balas aku dengan keyword di atas ya! \n\n atau balas dengan *Start* untuk kembali kemenu sebelumnya.';
            break;

        case 'DG':
            var result = 'Silahkan masuk ke link ini \n\n https://bit.ly/CredentialBlankpage \n\n karena ada banyak experience yang kita miliki, atau balas dengan *1* untuk kembali kemenu sebelumnya.'
            break;

        case 'BR':
            var result = 'Silahkan masuk ke link ini \n\n https://bit.ly/CredentialBlankpage \n\n karena ada banyak experience yang kita miliki, atau balas dengan *1* untuk kembali kemenu sebelumnya.'
            break;

        case 'WEB':
            var result = 'Silahkan masuk ke link ini \n\n https://bit.ly/CredentialBlankpage \n\n karena ada banyak experience yang kita miliki, atau balas dengan *1* untuk kembali kemenu sebelumnya.'
            break;

        case 'SM':
            var result = 'Silahkan masuk ke link ini \n\n https://bit.ly/CredentialBlankpage \n\n karena ada banyak experience yang kita miliki, atau balas dengan *1* untuk kembali kemenu sebelumnya.'
            break;
            
        case '2':
            var result = 'Berikut Porfolio kami : \n\n *CRD*: Credential Blankpage \n *QADS*: Quick Ads \n\n Balas aku dengan keyword di atas ya! \n\n atau balas dengan *Start* untuk kembali kemenu sebelumnya.';
            break;
                
        case 'CRD':
            var result = 'Silahkan masuk ke link ini \n\n https://bit.ly/CredentialBlankpage \n\n karena ada banyak experience yang kita miliki \n\n atau balas dengan *2* untuk kembali kemenu sebelumnya.'
            break;

        case 'QADS':
            var result = 'Qads merupakan platform self service adplatform atau pemasangan iklan mandiri yang di tujukan bagi para pemilik usaha UMKM untuk memasarkan produk dan jasanya di Social Media dan Google. Para pemilik usaha dapat memasang iklan dengan mudah dan terjangkau! \n\n http://qads.co.id \n\n atau balas dengan *2* untuk kembali kemenu sebelumnya.'
            break;


        default:
            var result = 'Maaf keyword yang anda masukkan tidak dapat di kenali.';
      }

    return result;
}
