import { ReactNode } from "react";

export type TitleAndActionsProps = {
	title: string;
	actions?: ReactNode | ReactNode[];
};

export const TitleAndActions = ({ title, actions }: TitleAndActionsProps) => {
	return (
		<div className='flex justify-between'>
			<h1 className='font-semibold text-xl md:text-2xl text-black'>{title}</h1>
			{actions && <div className='flex space-x-3'>{actions}</div>}
		</div>
	);
};
