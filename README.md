# W2V
Automation Test
steps to set up environment for running the automation test (using JavaScript)
1. go to node.js website and download node.js
2. go to protractor website and follow instaction on how to download protractor -- run this command (npm install -g protractor)
3. get an instance of a Selenium Server running using this command (webdriver-manager update)
4. Now start up a server running this command (webdriver-manager start)
5. create a folder containing the conf.js and test.js files in it
6. via the commnad line navigate to that folder
7. run this commnad inorder to run the test (protractor conf.js)
good luck.... :-)


steps to set up environment for running the automation test (using TypeScript)
1. install typescript running this command (npm install -g typescript)
2. navigate to the folder with the two files conf.js and test.js using command line
3. run the command (tsc --init) that will create for you the tsconfig.json file
  -edit the file
  -add "allowJs": true, /* Allow javascript files to be compiled. */
  -add  "outDir": "dist",  this will careate a copy of the javascript file in dist directory
4. run the command tsc --> conf and test files created in the dist directory
5. run the command (protractor dist/conf.js)
