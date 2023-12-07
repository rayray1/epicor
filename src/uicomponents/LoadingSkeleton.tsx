type BarProps = {
	width?: number;
	delay?: number;
};

export const Bar = ({ width, delay }: BarProps) => {
	return (
		<div
			className='h-4 animate-pulse rounded bg-gray-200'
			style={{
				width: `${width}%`,
				animationDelay: `${delay}ms`,
				animationDuration: "0.5s"
			}}
		/>
	);
};

type LoadingSkeletonProps = {
	barCount?: number;
	minBarwidth?: number;
	maxBarwidth?: number;
};

export const LoadingSkeleton = ({
	barCount = 2,
	minBarwidth = 40,
	maxBarwidth = 100
}: LoadingSkeletonProps) => {
	return (
		<div className='space-y-3'>
			{Array.from(Array(barCount), (_, i) => {
				const delay = i * 50 + 200;
				const randomWidth =
					Math.random() * (maxBarwidth - minBarwidth) + minBarwidth;
				return <Bar width={randomWidth} delay={delay} key={i} />;
			})}
		</div>
	);
};
