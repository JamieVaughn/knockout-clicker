var myViewModel = {
  personName: ko.observable('Bob'),
  personAge: 123
};

// ko.applyBindings(myViewModel);

setTimeout(() => {
  myViewModel.personName('Jamie')
  console.log(typeof myViewModel.personName)
}, 2000)


/// Button Clicker code

// const ClickCounterVM = function() {
//   this.numberOfClicks = ko.observable(0)

//   this.registerClick = function() {
//     this.numberOfClicks(this.numberOfClicks() + 1)
//   }

//   this.resetClicks = function() {
//     this.numberOfClicks(0)
//   }

//   this.hasClickedTooMuch = ko.computed(function() {
//     return this.numberOfClicks() >= 10
//   }, this)
// }

// ko.applyBindings(new ClickCounterVM())


// Dragon Clicker Challenge

const DragonVM = function() {
  let self = this
  this.dragonList = ko.observableArray([
    {
      clicks: ko.observable(0),
      type: ko.observable('Forest'),
      img: ko.observable("🐉")
    },
    {
      clicks: ko.observable(0),
      type: ko.observable('Fluffykins'),
      img: ko.observable("🐇")
    }
  ])
  
  this.incrementCount = function() {
    this.clicks(this.clicks() + 1)
  }
  
  this.currentDragon = ko.observable(this.dragonList()[1])

  this.setCurrentDragon = function () {
    self.currentDragon(this)
  }
}

ko.applyBindings(new DragonVM())
