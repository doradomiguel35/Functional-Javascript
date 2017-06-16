function doubleAll(numbers){
	var array = [];
	var result = array.map(function(numbers){
		return array.push(numbers);
	});
	return result;
}
module.exports = doubleAll; 