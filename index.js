//everything in javascript is an object  including function , an they are fist class objects
const data = {
  name: 'Nayan Kumar',
  age: 21,
  greet: function () {
    setTimeout(function () {
      console.log('hello', this.name);
    });
    console.log(this.name);
  },
};
const laptop = {
  brand: 'Dell',
  getModel: function () {
    const printBrand = () => {
      console.log(this); //refers to parent object laptop
    };
    console.log(this); //also refers to main object laptop
    printBrand();
  },
};
data.greet();
laptop.getModel();
