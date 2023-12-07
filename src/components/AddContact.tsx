import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "../types";
import { ContactForm } from "./ContactForm";

type AddContactProps = {
	formData: FormDataType;
	setFormData: Dispatch<SetStateAction<FormDataType>>;
};

export function AddContact({ formData, setFormData }: AddContactProps) {
	return <ContactForm formData={formData} setFormData={setFormData} />;
}
