import styled, { css, keyframes } from 'styled-components'
import { TfiClose } from 'react-icons/tfi'
import Button from './UI/Button'

export interface IModal {
  type: string
  /** 모달에 들어갈 컴포넌트 */
  children?: any //ReactNode
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void
}

const Modal = ({ type, children, visible, onClose }: IModal) => {
  if (!visible) {
    return null
  }

  return (
    <>
      <BackgroundStyle visible={visible} onClick={onClose} />
      <ModalSectionStyle visible={visible}>
        <HeaderStyle>
          <CloseButton type="button" onClick={onClose}>
            <TfiClose />
          </CloseButton>
          <div>{type}</div>
        </HeaderStyle>
        <ContentStyle>{children}</ContentStyle>
      </ModalSectionStyle>
    </>
  )
}

export default Modal

// animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

// components
const modalSettings = (visible: boolean) => css`
  visibility: ${visible ? 'visible' : 'hidden'};
  z-index: 15;
  animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
  transition: visibility 0.15s ease-out;
`

const BackgroundStyle = styled.div<{ visible: boolean }>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  ${(props) => modalSettings(props.visible)}
`

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  div {
    font-size: 1.75rem;
    font-weight: 700;
  }
`

const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    margin: 0;
  }
`

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const ModalSectionStyle = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 40%;
  height: 90%;
  border-radius: 1rem;
  border: 1px solid var(--color-primary);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  color: var(--color-primary);
  ${(props) => modalSettings(props.visible)}
  ${HeaderStyle} {
    height: 10%;
  }
  ${ContentStyle} {
    height: 90%;
  }
`
