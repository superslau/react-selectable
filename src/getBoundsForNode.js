/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
export default node => {
	const rect = node.getBoundingClientRect();

	return {
		top: rect.top+document.body.scrollTop,
		left: rect.left+document.body.scrollLeft,
		offsetWidth: rect.width,//node.offsetWidth,
		offsetHeight: rect.height,//node.offsetHeight
	};
};
