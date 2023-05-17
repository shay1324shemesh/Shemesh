import { saveAs } from 'file-saver';
import useMediaQuery from '../common/Header/mediaQuery';
import './cardCreator.css'
function downloadVcfFile() {


  // Define the vCard data
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:שמש קבלן רשום;אברהם;;;
FN:אברהם שמש
TEL;TYPE=WORK,VOICE:(+972) 50-866-9944
EMAIL;TYPE=PREF,INTERNET:avraham1962@gmail.com
END:VCARD`;

  // Convert the vCard data to a Blob
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });

  // Use file-saver to save the Blob as a file
  saveAs(blob, 'Avraham-Shemesh.vcf');
}


function VCardCreator() {
  return (
    <div className='vCardCreatorMain'>
      <h2 onClick={downloadVcfFile}
      style={ {fontSize:'25px'}}
      >אברהם שמש</h2>
    </div>
  );
}

export default VCardCreator;
