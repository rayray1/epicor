import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "../types";
import { ContactForm } from "./ContactForm";

type EditContactProps = {
	formData: FormDataType;
	isEditing: boolean;
	handleDeleteClick: () => void;
	setFormData: Dispatch<SetStateAction<FormDataType>>;
};

export function EditContact({
	formData,
	isEditing,
	handleDeleteClick,
	setFormData
}: EditContactProps) {
	return (
		<ContactForm
			formData={formData}
			isEditing={isEditing}
			handleDeleteClick={handleDeleteClick}
			setFormData={setFormData}
		/>
	);
}
