const input = "-------------------------------";

const encode = input =>
	[...input]
		.map((x, i) => [x.charCodeAt(0), i])
		.sort()
		.flatMap(x => x)
		.join(".")
		.match(/./g)
		.flatMap((x, i) => new Array(x == "." ? 1 : 2 + x * 2).fill((1 + i) % 2))
		.join("")
		.replace(/(([01])\2*)/g, x => `${+x ? "." : "-"}${x.length}`);

const encoded = encode(input);
console.log("encode =", encoded);

const decode = input =>
	input
		.replace(/(\.|\-)(\d+)/g, (_, __, v) => (v == 1 ? "." : (v - 2) / 2))
		.match(/\d+\.\d+/g)
		.map(x => x.split("."))
		.sort((a, b) => a[1] - b[1])
		.map(x => String.fromCharCode(x[0]))
		.join("");

const decoded = decode(encoded);
console.log("decode =", decoded);
