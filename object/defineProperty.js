const book = {};
Object.defineProperties(book, {
  _year: {
    value: 2014,
    writable: true,
    configurable: false,
  },
  name: {
    value: 'java',
  },
  year: {
    get() {
      return this._year;
    },
    set(newVal) {
      this._year = newVal - 1000;
    },
  },
});

const temp = Object.getOwnPropertyDescriptor(book, '_year');
console.log(temp);
// { value: 2014,
//   writable: false,
//   enumerable: false,
//   configurable: false }

Object.defineProperty(book,'_year',{
  writable: false,
});
book.year = 2000;
console.log(book.year);
