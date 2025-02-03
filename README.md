# rewrite-links
A utility to rewrite relative links

Edit the path of extracted zip.
From is the string to find.
To is the string that will be used to replace the found string.

```
const options = {
  files: [
    '<path>/jcr_root/content/ups-pt/es/**/.content.xml',
  ],
  from: '\/content\/ups-pt\//g', 
  to : 'content/ups-stage/'
}
```
