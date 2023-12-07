export type ContactsType = {
	id: number;
	name: string;
	street: string;
	email: string;
	phone: string;
	age: number;
};

export type FormDataType = {
	name: string;
	street: string;
	email: string;
	phone: string;
	age: string;
};

export type APIDataType = {
	name: string;
	street: string;
	email: string;
	phone: string;
	age: number;
};

export type SnackbarVariantType =
	| "default"
	| "error"
	| "success"
	| "warning"
	| "info"
	| undefined;
