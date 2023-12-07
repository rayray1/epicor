import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FormDataType } from "../types";
import { TextField } from "../uicomponents/TextField";
import { Button } from "flowbite-react";

type ContactFormProps = {
	formData: FormDataType;
	isEditing?: boolean;
	handleDeleteClick?: () => void;
	setFormData: Dispatch<SetStateAction<FormDataType>>;
};

export function ContactForm({
	formData,
	isEditing,
	setFormData,
	handleDeleteClick
}: ContactFormProps) {
  
	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const clonedFormData = { ...formData };
		clonedFormData[name as keyof FormDataType] = value;
		setFormData(clonedFormData);
	};

	return (
		<div className='space-y-3'>
			<TextField
				id='name'
				name='name'
				label='Name'
				placeholder='Name'
				value={formData.name}
				onChange={handleOnChange}
			/>
			<TextField
				id='email'
				name='email'
				label='Email'
				placeholder='Email'
				value={formData.email}
				onChange={handleOnChange}
			/>
			<TextField
				id='phone'
				name='phone'
				label='Phone'
				placeholder='Phone'
				value={formData.phone}
				onChange={handleOnChange}
			/>
			<TextField
				id='address'
				name='street'
				label='Address'
				placeholder='Address'
				value={formData.street}
				onChange={handleOnChange}
			/>
			<TextField
				id='age'
				name='age'
				label='Age'
				placeholder='Age'
				value={formData.age}
				onChange={handleOnChange}
			/>
			{isEditing && (
				<div className='space-y-3'>
					<p className='font-semibold text-black text-lg'>Danger zone</p>
					<Button color='failure' onClick={handleDeleteClick}>Delete Contact</Button>
				</div>
			)}
		</div>
	);
}
