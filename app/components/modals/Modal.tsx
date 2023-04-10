"use client";
import React, { useCallback, useEffect, useState } from "react";

// React Icons
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: Props) => {
  const [showModal, setShaowModal] = useState(isOpen);
  useEffect(() => {
    setShaowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShaowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;
  return (
    <div className="fixed bg-neutral-800/50 w-full h-full top-0 z-50 flex justify-center items-center">
      <div
        className={`bg-white rounded-md  relative w-5/6 md:w-3/6 lg:w-2/6 transition duration-300 ${
          showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex justify-center items-center border-b p-3">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={handleClose} className="absolute left-4">
            <IoMdClose size={18} />
          </button>
        </div>
        {/* Body */}
        <div className="p-5 relative">{body}</div>
        {/* Footer */}
        <div className="px-5 pb-5 flex flex-col ">
          {secondaryAction && secondaryActionLabel && (
            <Button
              outline
              label={secondaryActionLabel}
              disabled={disabled}
              onClick={handleSecondaryAction}
            />
          )}
          <Button
            label={actionLabel}
            disabled={disabled}
            onClick={handleSubmit}
          />

          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
