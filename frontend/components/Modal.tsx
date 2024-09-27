import React, { FunctionComponent, useRef } from "react";
import useOnClickOutside from "@/hooks/useClickOutside";
import clsx from "clsx";

interface ModalPropsInterface {
	onClick?: () => void; // Updated from 'any' to a specific function type
    children: React.ReactNode;
	open: boolean;
	header?: string;
	className?: string
}

const Modal: FunctionComponent<ModalPropsInterface> = ({ children, onClick, open, className }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useOnClickOutside(modalRef, () => {
        if (onClick) {
            onClick();
        }
    });

	return (
		<>
			{open && (
				<div className="modal-background fixed top-0 left-0 right-0 bottom-0 bg-scroll-black bg-opacity-70 z-[90]">
					<div className="flex p-2 items-center justify-around min-w-44 h-screen">
						<div
							ref={modalRef}
							className={clsx(
								"items-center align-middle max-w-3xl w-full bg-white rounded",
								className
							)}
						>
							<div className={`modal-body w-full ${className}`}>{children}</div>
						</div>
					</div>
				</div>
			)}
		</>

	);
};

export default Modal;
