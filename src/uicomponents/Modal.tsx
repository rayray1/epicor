import { ReactNode } from "react";
import { Button, Modal as FBModal } from "flowbite-react";

type ContactsModal = {
	title: string;
	openModal: boolean;
	children: ReactNode;
	submitLabel: string;
	cancelLabel: string;
	onClickSubmit: () => void;
	onClickCancel: () => void;
};

export function Modal({
	title,
	openModal,
	children,
	submitLabel,
	cancelLabel,
	onClickSubmit,
	onClickCancel
}: ContactsModal) {
	return (
		<>
			<FBModal show={openModal} onClose={onClickCancel}>
				<FBModal.Header>{title}</FBModal.Header>
				<FBModal.Body>{children}</FBModal.Body>
				<FBModal.Footer className='justify-end'>
					<Button color='gray' onClick={onClickCancel}>
						{cancelLabel}
					</Button>
					<Button color='blue' onClick={onClickSubmit}>
						{submitLabel}
					</Button>
				</FBModal.Footer>
			</FBModal>
		</>
	);
}
