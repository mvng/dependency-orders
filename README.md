## pluralsight-matthew-nguyen
##Package Installer
This will create a install order for packages with given depedency using Javascript.

##Usage: 
Installer will take in an array of strings and returns an array of strings. 
['PackageNameA: DepedencyB', 'PackageNameB: DepdencyC', 'PackageNameC: ']

and will return in this case,

['PackageNameC', 'PackageNameB', 'PackageNameA']

##Test
To run test with karma, simply install Karma, point entry files to tests/test.js and js/main.js

Test cases are available through the Jasmine framework with Karma. To see available test cases, check tests/test.js.
An HTML is also provided by Karma to easily display test case results.