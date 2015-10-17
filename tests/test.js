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

    it("Example Case A - Testing Package Functionality", function() {
      var expectedOutput = ['CamelCaser', 'KittenService'];
      packages.add('KittenService', 'CamelCaser');
      packages.add('CamelCaser', ' ');
      var output = packages.installPackages();
      expect(output).toEqual(expectedOutput);  
    });

        it("Example Case B - Testing Package Functionality", function() {
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

     it("z - a - Testing Package Functionality", function() {
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

    it("Correct Install on Input", function(){
      var expectedOutput = [ 'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a' ];
      var output = installer(['x: y', 'y: z', 'z: ', 'q: r', 'r: s', 's: t', 't: u', 'u: v', 'v: w', 'w: ', 'k: l', 'l: m', 'm: n', 'n: o', 'o: p', 'p: ', 'a: b', 'b: c', 'c: d', 'd: e', 'e: f', 'f: g', 'g: h', 'h: i', 'i: j', 'j: ']);
      expect(output).toEqual(expectedOutput);
    })

     it("z - a pairs - Testing Package Functionality", function() {
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

     it("x - c majority mix - Testing Package Functionality", function() {
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

  it("installer A", function() {
    var expectedOutput = [ 'C', 'B', 'A' ];
    var output = installer(['A: B', 'B: C', 'C: ']);

    expect(output).toEqual(expectedOutput);
  });
  
  it("installer A", function() {
    var expectedOutput = [ 'C', 'B', 'A' ];
    var output = installer(['A: B', 'B: C', 'C: ']);

    expect(output).toEqual(expectedOutput);
  });
  
  it("installer B", function() {
    var expectedOutput = [ 'b', 'a', 'c', 'd', 'e', 'f', 'g', 'h' ];
    var output = installer(['a: b', 'c: b', 'd: b', 'e: b', 'b: ', 'f: b', 'g: b', 'h: b']);

    expect(output).toEqual(expectedOutput);
  });

    it("installer C", function() {
    var expectedOutput = [ '89', '100', 'b', 'a', 'c', 'd', 'e', 'f', 'g', 'h', '2', '1', 'x', '9', '5' ];
    var output = installer(['a: b', 'c: b', 'd: b', 'e: b', 'b: 100', 'f: b', 'g: b', 'h: b', 'x: 1', '1: 2', '5: 9', '9: c', '2: 100', '100: 89', '89: ']);

    expect(output).toEqual(expectedOutput);
  });
});

describe("Error Input Testing", function() {
  it("Multiple :", function() {
    expect( function() {
       installer(['B::::', 'A: ']);
      }
      ).toThrow();
  })
  it("No :", function() {
    expect( function() {
       installer(['B', 'A: ']);
      }
      ).toThrow();
  })
  it("No : After an Install", function() {
    expect( function() {
       installer(['B: A', 'A: ', 'CA']);
      }
      ).toThrow();
  })
  it("No : Completely", function() {
    expect( function() {
       installer(['B', 'A', 'C']);
      }
      ).toThrow();
  })
});

describe("Cycle Catching",  function() {
   it("Example Cycle - Testing Package Functionality", function() {
    packages.add('KittenService', ' ');
    packages.add('Leetmeme', 'Cyberportal');
    packages.add('Cyberportal', 'Ice');
    packages.add('CamelCaser', 'KittenService');
    packages.add('Fraudstream', ' ');
    packages.add('Ice', 'Leetmeme');

    expect( function(){ packages.installPackages(); }).toThrow();
  });
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

      expect( function(){ packages.installPackages(); }).toThrow();
  });

  it("Basic Cycle Case A", function() {
    packages.add('A', 'B');
    packages.add('B', 'A');

    expect( function(){ packages.installPackages(); }).toThrow();
  });

  it("Basic Cycle Case B", function() {
    expect( function(){ installer(['A: B', 'B: C', 'C: A']) 
     }).toThrow();
  });
});

