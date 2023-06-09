import { SVGProps, useId } from 'react';

type Props = Pick<SVGProps<SVGSVGElement>, 'className' | 'fill' | 'lang'> & {
	width?: number;
	height?: number;
	alt: string;
};

export default function Logo({ width = 88, height = (35 / 88) * width, fill = 'currentColor', alt, ...props }: Props) {
	const id = useId();
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill={fill}
			viewBox="0 0 88 35"
			role="img"
			aria-labelledby={id}
			{...props}
		>
			<title id={id}>{alt}</title>
			<path d="M15.19 11c2.62 0 4.71.88 6.25 2.64 1.55 1.74 2.32 4.1 2.32 7.07V34H15.8V21.77c0-1.3-.34-2.32-1.02-3.05a3.47 3.47 0 0 0-2.72-1.14c-1.2 0-2.13.38-2.8 1.14a4.31 4.31 0 0 0-1.02 3.05V34H.28V11.2h7.96v3.26A8.43 8.43 0 0 1 15.19 11ZM32.15 9.1a5 5 0 0 1-3.41-1.15 3.84 3.84 0 0 1-1.26-2.92c0-1.2.42-2.18 1.26-2.97.87-.78 2-1.17 3.41-1.17 1.38 0 2.5.39 3.33 1.17.87.79 1.3 1.78 1.3 2.97 0 1.16-.43 2.14-1.3 2.92a4.78 4.78 0 0 1-3.33 1.14Zm3.94 2.1V34h-7.96V11.2h7.96ZM39.33 22.58c0-2.35.49-4.41 1.46-6.17a10.12 10.12 0 0 1 4.07-4.07 12.48 12.48 0 0 1 6-1.42c2.9 0 5.35.8 7.32 2.4A10.83 10.83 0 0 1 62 19.94h-8.45c-.49-1.49-1.44-2.23-2.84-2.23-1 0-1.8.42-2.4 1.26-.57.8-.85 2.01-.85 3.61s.28 2.82.85 3.66a2.8 2.8 0 0 0 2.4 1.26c1.43 0 2.38-.75 2.84-2.24H62a10.98 10.98 0 0 1-3.82 6.63 11.26 11.26 0 0 1-7.31 2.4c-2.25 0-4.25-.48-6.01-1.43a10.12 10.12 0 0 1-4.07-4.06 12.63 12.63 0 0 1-1.46-6.22ZM87.09 22.34c0 .62-.04 1.24-.12 1.87H71.89c.08 1.24.42 2.18 1.02 2.8.62.6 1.4.9 2.36.9 1.32 0 2.27-.6 2.84-1.8h8.5a9.97 9.97 0 0 1-2.08 4.23 10.5 10.5 0 0 1-3.82 2.89 12.2 12.2 0 0 1-5.12 1.05c-2.25 0-4.25-.47-6.01-1.42-1.74-.95-3.1-2.3-4.1-4.06A12.63 12.63 0 0 1 64 22.58c0-2.38.49-4.44 1.46-6.17a10.12 10.12 0 0 1 4.07-4.07 12.57 12.57 0 0 1 6.05-1.42c2.25 0 4.24.46 5.97 1.38a9.92 9.92 0 0 1 4.07 3.98 12 12 0 0 1 1.46 6.06Zm-8.13-2a2.8 2.8 0 0 0-.97-2.27 3.57 3.57 0 0 0-2.44-.85c-.98 0-1.77.27-2.4.81a3.76 3.76 0 0 0-1.22 2.32h7.03Z" />
		</svg>
	);
}
