import { ModalContent, ModalContentProps, ModalRoot } from '../modal'

type CommonModalProps = {
  modalTitle?: string
  onCloseHandler?: () => void
} & ModalContentProps

export const CommonModal = ({
  children,
  modalTitle,
  onCloseHandler,
  ...restProps
}: CommonModalProps) => {
  return (
    <ModalRoot {...restProps}>
      <ModalContent modalTitle={modalTitle} onCloseHandler={onCloseHandler}>
        {children}
      </ModalContent>
    </ModalRoot>
  )
}
