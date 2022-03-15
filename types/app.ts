import { ReactNode } from "react";

export type ModalProps = {
  buttonName: string;
  title: string;
  modalActionName?: string;
  children: ReactNode;
};
