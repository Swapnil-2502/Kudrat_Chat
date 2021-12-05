// let camelcase = (s) => (s[0].toLowerCase() + s.slice(1)).replace(/[^A-Z]/g, '').length + 1;
// console.log(camelcase('AngadTest'));

s = 'acxz';

let sRev = s.split('').reverse().join('');
let nums1 = [];
let nums2 = [];
for (let i = 0; i < s.length; i++) {
	nums1.push(s.charCodeAt(i));
	nums2.push(sRev.charCodeAt(i));
}

console.log(nums1);
console.log(nums2);

let x = 0;

for (let i = 0; i < nums1.length - 1; i++) {
	if (Math.abs(nums1[i] - nums1[i + 1]) !== 1 && Math.abs(nums2[i] - nums2[i + 1]) !== 1) {
		x += 1;
	}
}

if (x !== 0) {
	console.log('Not Funny');
} else {
	console.log('Funny');
}
