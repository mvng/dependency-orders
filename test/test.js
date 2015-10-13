describe("Input Parsing Test", function() {
  it("Basic Splitting", function() {
    expect(parse("['KittenService: CamelCaser', 'CamelCaser: ']")[0]).toBe('KittenService:CamelCaser');
    expect(parse("['KittenService: CamelCaser', 'CamelCaser: ']")[1]).toBe('CamelCaser:');
  });
});
