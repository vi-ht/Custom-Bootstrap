function a (nums) {
    var funcs = [];
    for (var i = 0; i < nums.length; i++) {
        let number = nums[i];
        console.log("pre "+number)
        var getA = function (){
            console.log("in "+number)
            return number * number;
        }
        funcs.push(getA);
    }
    return funcs;
}
var re = a([1,2,3,4]);
re.forEach(b => console.log(b()));