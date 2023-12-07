import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { Table } from "./components/Table";
import { Modal } from "./uicomponents/Modal";
import { PageContainer } from "./uicomponents/PageContainer";
import { TitleAndActions } from "./uicomponents/TitleAndActions";
import {
	getContacts,
	createContact,
	updateContact,
	deleteContact
} from "./api/ContactsApi";
import {
	APIDataType,
	ContactsType,
	FormDataType,
	SnackbarVariantType
} from "./types";
import { EditContact } from "./components/EditContact";
import { AddContact } from "./components/AddContact";
import { LoadingSkeleton } from "./uicomponents/LoadingSkeleton";
import { useSnackbar } from "notistack";

const INITIAL_FORM_DATA = {
	name: "",
	street: "",
	email: "",
	phone: "",
	age: ""
};

function App() {
	const { enqueueSnackbar } = useSnackbar();
	const [contacts, setContacts] = useState<ContactsType[]>([]);
	const [openModal, setOpenModal] = useState(false);
	const [formData, setFormData] = useState<FormDataType>(INITIAL_FORM_DATA);
	const [isEditing, setIsEditing] = useState(false);
	const [selectedContactData, setSelectedContactData] = useState<
		ContactsType | undefined
	>();
	const [isContactsLoading, setIsContactsLoading] = useState(false);
	const [loadDataError, setLoadDataError] = useState<string | null>(null);

	const fetchContacts = async () => {
		try {
			const { data } = await getContacts();
			setContacts(data);
			setLoadDataError(null);
		} catch (e) {
			setLoadDataError("Unable to fetch data. Please try again");
		} finally {
			setIsContactsLoading(false);
		}
	};

	useEffect(() => {
		setIsContactsLoading(true);
		fetchContacts();
	}, []);

	const handleAddContact = () => {
		setFormData(INITIAL_FORM_DATA);
		setOpenModal(true);
	};

	const handleEditClick = (data: ContactsType) => {
		setIsEditing(true);
		setSelectedContactData(data);
		const formDataToSet: FormDataType = {
			name: data.name,
			street: data.street,
			email: data.email,
			phone: data.phone,
			age: String(data.age)
		};
		setFormData(formDataToSet);
		setOpenModal(true);
	};

	const handleCancelClick = () => {
		setIsEditing(false);
		setFormData(INITIAL_FORM_DATA);
		setOpenModal(false);
	};

	const renderSnackBar = (variant: SnackbarVariantType, message: string) => {
		enqueueSnackbar(message, { variant });
	};

	const clearStateAfterApiCall = async () => {
		await fetchContacts();
		setIsEditing(false);
		setFormData(INITIAL_FORM_DATA);
		setOpenModal(false);
	};

	const handleCreateContact = async () => {
		const data: APIDataType = { ...formData, age: parseInt(formData.age) };
		try {
			await createContact(data);
			clearStateAfterApiCall();
			renderSnackBar("success", "Contact created successfully");
		} catch (e) {
			renderSnackBar("error", "Something went wrong. Please try again");
		}
	};

	const handleUpdateContact = async () => {
		try {
			const updatedData: ContactsType = {
				...formData,
				age: parseInt(formData.age),
				id: selectedContactData?.id || 0
			};

			await updateContact(updatedData);
			clearStateAfterApiCall();
			renderSnackBar("success", "Contact updated successfully");
		} catch (error) {
			renderSnackBar("error", "Something went wrong. Please try again");
		}
	};

	const handleSubmitClick = () => {
		const isFormValid = Object.values(formData).every(
			value => value !== null && value !== ""
		);

		if (isFormValid) {
			isEditing ? handleUpdateContact() : handleCreateContact();
		} else {
			renderSnackBar("error", "Please fill in all the required fields");
		}
	};

	const handleDeleteClick = async () => {
		const contactId = selectedContactData?.id || 0;
		if (window.confirm("Are you sure you want to delete this contact?")) {
			try {
				await deleteContact(contactId);
				clearStateAfterApiCall();
				renderSnackBar("success", "Contact deleted successfully");
			} catch (e) {
				renderSnackBar("error", "Something went wrong. Please try again");
			}
		}
	};

	if (isContactsLoading) return <LoadingSkeleton barCount={5} />;

	if (loadDataError)
		return (
			<PageContainer>
				<div style={{ textAlign: "center", marginTop: "20px" }}>
					<p style={{ color: "red", fontSize: "18px", marginBottom: "10px" }}>
						{loadDataError}
					</p>
					<Button
						color='blue'
						style={{ padding: "10px 20px", fontSize: "16px", margin: "0 auto" }}
						onClick={() => fetchContacts()}
					>
						Try Again
					</Button>
				</div>
			</PageContainer>
		);

	return (
		<PageContainer>
			<TitleAndActions
				title='Contacts'
				actions={[
					<Button color='blue' key='add-contact' onClick={handleAddContact}>
						Add Contact
					</Button>
				]}
			/>

			<Table contacts={contacts} handleEditClick={handleEditClick} />

			<Modal
				submitLabel='Submit'
				cancelLabel='Cancel'
				openModal={openModal}
				onClickSubmit={handleSubmitClick}
				onClickCancel={handleCancelClick}
				title={isEditing ? "Edit Contact" : "Add Contact"}
			>
				{isEditing ? (
					<EditContact
						formData={formData}
						isEditing={isEditing}
						setFormData={setFormData}
						handleDeleteClick={handleDeleteClick}
					/>
				) : (
					<AddContact formData={formData} setFormData={setFormData} />
				)}
			</Modal>
		</PageContainer>
	);
}

export default App;
