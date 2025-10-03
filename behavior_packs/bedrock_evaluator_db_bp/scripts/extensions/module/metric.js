export function metricNumbers(value) {
	const types = ["", "K", "M", "B", "T", "P", "E", "Z", "Y"];
	const selectType = (Math.log10(value) / 3) | 0;
	if (selectType == 0) return value;
	let scaled = value / Math.pow(10, selectType * 3);
	return scaled.toFixed(1) + types[selectType];
  }