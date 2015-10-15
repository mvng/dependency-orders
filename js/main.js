function UserException(message) {
   this.message = message;
   this.name = "UserException";
}

function parse(packages) {

  packages = packages.replace('[', '');
  packages = packages.replace(']', '');
  packages = packages.replace(/'/g, '');
  packages = packages.replace(/ /g, '');

  packages = packages.split(",");
  return packages;
}

//singleton object of packages to install.
var packages = new function() {
  this.size = 0;
  this.installList = {};
  this.uniquePackages = [];

  this.installPackages = function() {
    var installList = [];
    var size = this.size;
    var stage = [];
    var counter = 0;
   while (this.uniquePackages.length > 0) {
     var packageName = this.uniquePackages[counter];
     var current = this.installList[packageName];

     //installs the package if it has no dependency.
      if (current.dependency === false && !current.visited && !current.installed) {
        current.visited = true;
        current.installed = true;
        stage.push(packageName);
        this.uniquePackages.splice(counter, 1);
        continue;
      } else {
      //Start to explore until no dependency package or installed
        var dependencyStage = [];
        dependencyStage.push(current.name);
        while(current.dependency != false && !current.installed && !current.visited){
          current.visited = true;
          current = this.installList[current.dependency];
          dependencyStage.push(current.name);

         }
         //Check if Dependency Trail has any Cycles by comparing the last value with everything else.
         if (dependencyStage.indexOf(current.name) != dependencyStage.length -1) {
            throw new UserException("Cycle Detected");
         }
         this.installMerge(dependencyStage, stage);
       }
   }
     return stage;
  }
  this.installMerge = function(dependencyStage, stage) {
    while(dependencyStage.length > 0) {
      var toMerge = dependencyStage.pop();
      if(this.installList[toMerge].installed) {
        continue;
      }
      this.installList[toMerge].installed = true;
      this.uniquePackages.splice(this.uniquePackages.indexOf(toMerge), 1);
     stage.push(toMerge);
    }

  }
  this.add = function(name, dependency) {
    var node;
    if (typeof dependency === 'undefined' || dependency === ' ') {
      dependency = false;
    }
    node = { 'name': name, 'dependency': dependency,'installed': false, 'visited': false};
    this.installList[name] = node;
    this.size++;
    this.uniquePackages.push(name);
  }

  this.getUniquePackages = function () {
    return this.uniquePackages;
  }
  this.getSize = function () {
    return this.size;
  }
} 
    