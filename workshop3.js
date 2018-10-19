var fullname = "John";
var obj = {
		fullname: "Jane",
		prop: {
		fullname: "Tom",
		getName: function () {
		return this.fullname;
		}
	}
};
// Copy the function
var test = obj.prop.getName;
var test2 = test.bind(obj);
// What does the console display?
console.log(obj.prop.getName());
console.log(test());
console.log(test.bind(obj.prop)());
console.log(test2());

