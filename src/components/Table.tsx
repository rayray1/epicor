import { ContactsType } from "../types";
import { Button, Table as FBTable } from "flowbite-react";

export type TableProps = {
	contacts: ContactsType[];
	handleEditClick: (selectedContactData: ContactsType) => void;
};

export function Table({ contacts, handleEditClick }: TableProps) {
	return (
		<div className='overflow-x-auto'>
			<FBTable hoverable>
				<FBTable.Head>
					<FBTable.HeadCell>Name</FBTable.HeadCell>
					<FBTable.HeadCell>Email</FBTable.HeadCell>
					<FBTable.HeadCell>Phone Number</FBTable.HeadCell>
					<FBTable.HeadCell>Address</FBTable.HeadCell>
					<FBTable.HeadCell>Age</FBTable.HeadCell>
					<FBTable.HeadCell className='sr-only'>Edit</FBTable.HeadCell>
				</FBTable.Head>
				<FBTable.Body className='divide-y'>
					{contacts.map((contact: ContactsType, index: number) => (
						<FBTable.Row key={index} className='bg-white'>
							<FBTable.Cell>{contact.name}</FBTable.Cell>
							<FBTable.Cell>{contact.email}</FBTable.Cell>
							<FBTable.Cell>{contact.phone}</FBTable.Cell>
							<FBTable.Cell>{contact.street}</FBTable.Cell>
							<FBTable.Cell>{contact.age}</FBTable.Cell>
							<FBTable.Cell>
								<Button pill size='xs' onClick={() => handleEditClick(contact)}>
									Edit
								</Button>
							</FBTable.Cell>
						</FBTable.Row>
					))}
				</FBTable.Body>
			</FBTable>
		</div>
	);
}
