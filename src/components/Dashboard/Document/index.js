import React from 'react'
import Order from '../Order/'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default () => {
  const printDocument = () => {
    const input = document.getElementById('divToPrint')
    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const doc = new jsPDF()
      doc.addImage(imgData, 'JPEG', 8, 0)
      // for(var i = 0; i < 4; i++){
      //   doc.addPage();
      //   doc.addImage(imgData, 'JPEG', 16, 0)
      //   //doc.text(20, 100, 'Some Text.');
      // }
      doc.output('dataurlnewwindow')
      // doc.save("download.pdf")
    })
  }

  return (
    <div>
      <button onClick={printDocument}>Print</button>
    </div>
  )
}
