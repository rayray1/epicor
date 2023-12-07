import axios from "axios";
import { APIDataType, ContactsType } from "../types";

export const getContacts = () => {
	return axios.get("http://localhost:3001/contacts");
};

export const createContact = (data: APIDataType) => {
	return axios.post("http://localhost:3001/contacts", {
		...data
	});
};

export const updateContact = (data: ContactsType) => {
	return axios.put(`http://localhost:3001/contacts/${data.id}`, {
		...data
	});
};

export const deleteContact = (contactId: number) => {
	return axios.delete(`http://localhost:3001/contacts/${contactId}`);
};

const contactsApiService = {
	getContacts,
	createContact,
	updateContact,
	deleteContact
};

export default contactsApiService;
