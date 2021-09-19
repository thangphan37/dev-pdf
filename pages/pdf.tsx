import * as React from 'react'
import {registerSection} from '../components/register-section'
import pdfMake from 'pdfmake/build/pdfmake'

const fonts = {
  yourFontName: {
    normal: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    bold: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    italics: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
    bolditalics: 'https://okt.s3.us-west-2.amazonaws.com/ipaexg.ttf',
  },
}
const docDefinition = {
  pageMargins: [20, 97, 20, 60] as [number, number, number, number],
  pageSize: {
    width: 595.28,
    height: 879,
  },
  content: [{...registerSection()}],
  styles: {},
  images: {
    snow: 'https://okt.s3.us-west-2.amazonaws.com/logo.png',
  },
  defaultStyle: {
    fontSize: 10,
    font: 'yourFontName',
  },
}

function ClientSidePdf() {
  function openPdf() {
    // @ts-ignore
    pdfMake.createPdf(docDefinition, null, fonts).open()
  }

  return (
    <div>
      ClientSidePdf
      <button onClick={openPdf}>Open</button>
    </div>
  )
}

export default ClientSidePdf
