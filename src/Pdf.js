import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink,  PDFViewer } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
   
  },
  section: {
  
  }
});



// Create Document Component
const MyDocument = ({person}) => {
  if (person.name) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Name and Age: {person.name}-{person.age}</Text>

          </View>
          <View style={styles.section}>
            <Text>Position: {person.job}</Text>
          </View>
        </Page>
      </Document>
    );
  }else {
    return <Document></Document>
  }

}



const Download = ({person}) => (
  <div>
    <PDFDownloadLink document={<MyDocument person={person} />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)


export default Download;