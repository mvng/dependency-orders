var INSTALL = "['KittenService: CamelCaser', 'CamelCaser: ']";

function parse(packages) {

  packages = packages.replace('[', '');
  packages = packages.replace(']', '');
  packages = packages.replace(/'/g, '');
  packages = packages.replace(/ /g, '');

  packages = packages.split(",");
  return packages;
}

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

function testSuite() { 
console.log('Testing.... '); 
  assert(parse("['KittenService: CamelCaser', 'CamelCaser: ']")[0] === "KittenService:CamelCaser", 'Failed Split Initial String');
  assert(parse("['KittenService: CamelCaser', 'CamelCaser: ']")[1] === "CamelCaser:", 'Failed Split Initial String');
  console.log('Passed!');
}

// testSuite();



function main () {

  console.log('Main Task ...');
}


main();