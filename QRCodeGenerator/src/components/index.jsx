import React, { useState } from 'react'
import QRCode from 'react-qr-code'



export default function QRCodeGenerator() {
    const[QRCode, setQrCode] = useState('');
    const[input, setInput] = useState('');

    function handleGenerateQr-Code (){
        setQrCode(input)
    }
    return (
        <div>
                 <h1>QR Code Generator</h1>
        <div>
             <input onChange={(e)=> setInput(e.target.value)} type="text"
                      name="qr-code"
                     placeholder='Enter your Value' />
         
             <button disabled=[input && input.trin() !== ? false:true] onClick={handleGenerateQr-Code}>Generate</button>
        </div>
        </div>
        <QRCode 
        id='qr-code-value'
        value=(QRCode)
        size={420}
        bgColor="#fff"
        />
      )
}