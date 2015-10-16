describe("Basic Installs", function () {
  it("Basic Case A", function() {
      var expectedOutput = ['X', 'ayy', 'Donger', 'CamelCaser', 'KittenService', 'b', 'a'];
      packages.add('X', ' ');
      packages.add('KittenService','CamelCaser');
      packages.add('a','b');
      packages.add('CamelCaser','Donger');
      packages.add('Donger', 'ayy');
      packages.add('ayy', ' ');
      packages.add('b', ' ');
      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

    it("Example Case A", function() {
      var expectedOutput = ['CamelCaser', 'KittenService'];
      packages.add('KittenService', 'CamelCaser');
      packages.add('CamelCaser', ' ');
      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

        it("Example Case B", function() {
      var expectedOutput = ['KittenService', 'Ice', 'Cyberportal', 'Leetmeme', 'CamelCaser', 'Fraudstream'];
      packages.add('KittenService', ' ');
      packages.add('Leetmeme', 'Cyberportal');
      packages.add('Cyberportal', 'Ice');
      packages.add('CamelCaser', 'KittenService');
      packages.add('Fraudstream', 'Leetmeme');
      packages.add('Ice', ' ');


      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

     it("z - a", function() {
   var expectedOutput = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    packages.add('z', 'y');
    packages.add('y', 'x');
    packages.add('x', 'w');
    packages.add('w', 'v');
    packages.add('v', 'u');
    packages.add('u', 't');
    packages.add('t', 's');
    packages.add('s', 'r');
    packages.add('r', 'q');
    packages.add('q', 'p');
    packages.add('p', 'o');
    packages.add('o', 'n');
    packages.add('n', 'm');
    packages.add('m', 'l');
    packages.add('l', 'k');
    packages.add('k', 'j');
    packages.add('j', 'i');
    packages.add('i', 'h');
    packages.add('h', 'g');
    packages.add('g', 'f');
    packages.add('f', 'e');
    packages.add('e', 'd');
    packages.add('d', 'c');
    packages.add('c', 'b');
    packages.add('b', 'a');
    packages.add('a', ' ');

      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

     it("z - a pairs", function() {
   var expectedOutput = ['x', 'y', 'z', 'q', 'r', 's', 't', 'u', 'v', 'w', 'k', 'l', 'm', 'n', 'o', 'p', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    packages.add('z', 'y');
    packages.add('y', 'x');
    packages.add('x', ' ');

    packages.add('w', 'v');
    packages.add('v', 'u');
    packages.add('u', 't');
    packages.add('t', 's');
    packages.add('s', 'r');
    packages.add('r', 'q');
    packages.add('q', ' ');

    packages.add('p', 'o');
    packages.add('o', 'n');
    packages.add('n', 'm');
    packages.add('m', 'l');
    packages.add('l', 'k');
    packages.add('k', ' ');

    packages.add('j', 'i');
    packages.add('i', 'h');
    packages.add('h', 'g');
    packages.add('g', 'f');
    packages.add('f', 'e');
    packages.add('e', 'd');
    packages.add('d', 'c');
    packages.add('c', 'b');
    packages.add('b', 'a');
    packages.add('a', ' ');

      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

     it("x - c majority mix", function() {
   var expectedOutput = [ 'x', 'a', 'd', 'e', 'f', 'g', 'c', 'v', 'w', 'b', 'y', 'z', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' ];
    packages.add('a', 'x');
    packages.add('d', 'x');
    packages.add('e', 'x');

    packages.add('f', 'x');
    packages.add('g', 'x');
    packages.add('v', 'c');
    packages.add('w', 'c');
    packages.add('b', 'c');
    packages.add('y', 'c');
    packages.add('z', 'c');
    packages.add('x', ' ');

    packages.add('h', 'x');
    packages.add('i', 'x');
    packages.add('j', 'x');
    packages.add('k', 'x');
    packages.add('l', 'x');

    packages.add('m', 'x');
    packages.add('n', 'x');
    packages.add('o', 'x');

    packages.add('p', 'c');
    packages.add('q', 'c');
    packages.add('r', 'c');
    packages.add('s', 'c');
    packages.add('t', 'c');
    packages.add('u', 'c');
    packages.add('c', ' ');

      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

});
describe("Example Cycle Testing", function() {
 it("Example Cycle", function() {
    packages.add('KittenService', ' ');
    packages.add('Leetmeme', 'Cyberportal');
    packages.add('Cyberportal', 'Ice');
    packages.add('CamelCaser', 'KittenService');
    packages.add('Fraudstream', ' ');
    packages.add('Ice', 'Leetmeme');

    expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });
});

describe("Cycle Catching",  function() {
    it("Cycle In The Middle", function() {
    packages.add('z', 'y');
    packages.add('y', 'x');
    packages.add('x', 'w');
    packages.add('w', 'v');
    packages.add('v', 'u');
    packages.add('u', 't');
    packages.add('t', 's');
    packages.add('s', 'r');
    packages.add('r', 'q');
    packages.add('q', 'p');
    packages.add('p', 'o');
    packages.add('o', 'n');
    packages.add('n', 'm');
    packages.add('m', 'l');
    packages.add('l', 'z');

    packages.add('k', 'j');
    packages.add('j', 'i');
    packages.add('i', 'h');
    packages.add('h', 'g');
    packages.add('g', 'f');
    packages.add('f', 'e');
    packages.add('e', 'd');
    packages.add('d', 'c');
    packages.add('c', 'b');
    packages.add('b', 'a');
    packages.add('a', 'k');

    expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });

  it("Basic Cycle Case A", function() {
    packages.add('A', 'B');
    packages.add('B', 'A');

    expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });

  it("Basic Cycle Case B", function() {
    packages.add('A', 'B');
    packages.add('B', 'C');
    packages.add('C', 'A');

    expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });
  it("Dependency Problem with Cycle Case C", function() {
    packages.add('A', 'B');
    packages.add('D', 'A');

    expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });
    it("No Dependency Found", function(){
      packages.clear();
      packages.add('a','b');
      packages.add('b','c');
      packages.add('c','d'); 
    expect( function(){     
      packages.installPackages(); 
    }).toThrow(new UserException("Could Not Find Dependency for Package c"));
  });

});

