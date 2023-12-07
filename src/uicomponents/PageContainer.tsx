import { ReactNode } from "react";

export type PageContainerProps = {
	children?: ReactNode | ReactNode[];
};

export const PageContainer = ({ children }: PageContainerProps) => {
	return (
		<div className='space-y-6 p-8 h-screen'>{children && <>{children}</>}</div>
	);
};
