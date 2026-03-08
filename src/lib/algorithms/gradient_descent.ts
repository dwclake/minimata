const ALPHA = 0.01;
const EPSILON = 0.0001;

type HyperParameters = {
	alpha: number;
	epsilon: number;
};

export default function gradient_descent(
	x: number,
	y: number,
	{ alpha = ALPHA, epsilon = EPSILON }: HyperParameters
) {}
