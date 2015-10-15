describe("Input Parsing Test", function() {
  it("Basic Splitting", function() {
    var message = parse("['KittenService: CamelCaser', 'CamelCaser: ']");
    
    expect(message[0]).toBe('KittenService:CamelCaser');
    expect(message[1]).toBe('CamelCaser:');
  });
});

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
});

describe("Cycle Catching",  function() {
  it("Basic Cycle Case A", function() {
  packages.add('A', 'B');
  packages.add('B', 'C');
  packages.add('C', 'A');
  //expect( function(){ parser.parse(raw); } ).toThrow(new Error("Parsing is not possible"));

  expect( function(){ packages.installPackages(); }).toThrow(new UserException("Cycle Detected"));
  });

});

