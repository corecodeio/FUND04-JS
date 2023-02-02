function NamedOne(first, last) {
  // -- SHOULD be changed --
  this._firstName = first;
  this._lastName = last;

  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return this._firstName;
      },
      set: function (newFirstName) {
        this._firstName = newFirstName;
      },
    },
    lastName: {
      get: function () {
        return this._lastName;
      },
      set: function (newLastName) {
        this._lastName = newLastName;
      },
    },
    fullName: {
      get: function () {
        return `${this._firstName} ${this._lastName}`;
      },
      set: function (newFullName) {
        const newFullNameArray = newFullName.trim().split(' ');
        if (newFullNameArray.length == 2) {
          this._firstName = newFullNameArray[0];
          this._lastName = newFullNameArray[1];
        }
      },
    },
  });
}
