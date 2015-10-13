var INSTALL = "['KittenService: CamelCaser', 'CamelCaser: ']";

function parse(packages) {

  packages = packages.replace('[', '');
  packages = packages.replace(']', '');
  packages = packages.replace(/'/g, '');
  packages = packages.replace(/ /g, '');

  packages = packages.split(",");
  return packages;
}