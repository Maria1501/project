let option = {
	width: 1024,
	height: 1024,
	name:"test"
};
console.log(option.name);
option.bool = false;
option.color = {
	border: "black",
	bg:"red"
};
delete option.bool;
console.log(option);

for (let key in option) {
	console.log('Свойство '+ key + ' имеет значение ' + option[key]);
}

console.log(Object.keys(option).length);

let arr = ['first', 2, 3, 'four', 5];
arr.forEach(function(item, i, mass){
	console.log(i + ': ' + item + "(массив:"+ mass + ')');
});

/* for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
} */
console.log(arr);

/* let mass = [1, 3, 4, 6, 7];
for(let key of mass){
	console.log(key);
} */
let ans = prompt("", "");
	arr = [];
arr = ans.split(',');
console.log(arr);