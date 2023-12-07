import { ChangeEventHandler } from "react";

type TextFieldProps = {
	id: string;
	name: string;
	label: string;
	value: string;
	placeholder: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const labelStyles = "block mb-2 text-sm font-medium text-gray-900";
const inputStyles =
	"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";

export function TextField({
	id,
	name,
	label,
	value,
	placeholder,
	onChange
}: TextFieldProps) {
	return (
		<div>
			<label htmlFor={id} className={labelStyles}>
				{label}
			</label>
			<input
				id={id}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={inputStyles}
			/>
		</div>
	);
}
