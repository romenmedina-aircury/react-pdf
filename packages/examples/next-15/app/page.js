'use client';

import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  Text,
  Font,
} from '@react-pdf/renderer';

export default function Home() {
  Font.register({
    family: 'Roboto, serif',
    fonts: [
      { src: 'https://fonts.cdnfonts.com/s/93317/NotoSansMath-Regular.woff' },
    ],
  });

  const doc = (
    <Document>
      <Page
        style={{
          fontFamily: 'Roboto, serif',
          padding: 40,
          paddingTop: 32,
        }}
      >
        <Text> 𝑥</Text>
      </Page>
    </Document>
  );

  return (
    <div>
      <PDFViewer className="w-full h-svh">{doc}</PDFViewer>

      <PDFDownloadLink document={doc}>Download</PDFDownloadLink>
    </div>
  );
}
