import {replaceInFile} from 'replace-in-file'

const options = {
  files: [
    '<path>/jcr_root/content/ups-pt/es/**/.content.xml',
  ],
  from: '\/content\/ups-pt\//g', 
  to : 'content/ups-stage/'
}

try {
  const results = await replaceInFile(options)
  console.log('Replacement results:', results)
}
catch (error) {
  console.error('Error occurred:', error)
}
