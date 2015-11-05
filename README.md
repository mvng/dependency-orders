##Package Installer
This will create a install order for packages with given depedency using Javascript.

##Installation
```
npm install
 ```
will handle installation of any required depedencys

##Usage: 
From Commandline with node.js
node js/index.js "['PackageNameA: DepedencyB', 'PackageNameB: DepdencyC', 'PackageNameC: ']"

Installer will take in an array of strings and returns an array of strings. 
['PackageNameA: DepedencyB', 'PackageNameB: DepdencyC', 'PackageNameC: ']

and will return in this case,

['PackageNameC', 'PackageNameB', 'PackageNameA']

Example:
node js/index.js "['A: B', 'B: C', 'C: D', 'D: ']"
[ 'D', 'C', 'B', 'A' ]

##Test
To run test with karma, simply install Karma, point entry files to tests/test.js and js/main.js

Test cases are available through the Jasmine framework with Karma. To see available test cases, check tests/test.js.
An HTML is also provided by Karma to easily display test case results.

##Issues
####Testing with Karma
On some machines, the browser launcher fails to detect the certain browser, in that case manually 
open a browser preferable Chrome or Safari and direct it to the port returned by karma usually in the format
http://localhost:98xx
