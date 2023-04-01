import styled, { css, keyframes } from 'styled-components'
import { TfiClose } from 'react-icons/tfi'
import Select from './UI/Select'
import Button from './UI/Button'

export interface IModal {
  /** 모달에 들어갈 컴포넌트 */
  children?: any //ReactNode
  /** 모달 창 생성 여부를 컨트롤할 변수 */
  visible: boolean
  /** 닫기 버튼 혹은 백그라운드 클릭 시 실행할 함수 */
  onClose: () => void
}

const Modal = ({ children, visible, onClose }: IModal) => {
  if (!visible) {
    return null
  }

  const selectOptions = ['병원 방문', '각종 경조사', '개인 업무', '개인 사유']

  return (
    <>
      <BackgroundStyle visible={visible} onClick={onClose} />
      <ModalSectionStyle visible={visible}>
        <HeaderStyle>
          <CloseButton type="button" onClick={onClose}>
            <TfiClose />
          </CloseButton>
          <div>연차 신청</div>
        </HeaderStyle>
        <SelectBoxStyle>
          <span>신청 사유</span>
          <Select
            options={selectOptions}
            initial={'병원 방문'}
            width="100%"
            height="3rem"
            borderRadius=".5rem"
            fontSize="16px"
          />
        </SelectBoxStyle>
        <ContentStyle>{children}</ContentStyle>
        <ApplyBtnStyle>
          <Button
            width="100%"
            height="3rem"
            borderRadius="9999px"
            bgColor="var(--color-primary)"
            color="var(--color-white)"
          >
            신청하기
          </Button>
        </ApplyBtnStyle>
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
  div {
    font-size: 1.75rem;
    font-weight: 700;
  }
`

const SelectBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1rem;
    font-weight: 600;
    width: 15%;
  }
  & > div {
    width: 85%;
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

const ApplyBtnStyle = styled.div`
  display: flex;
  align-items: center;
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
  ${SelectBoxStyle} {
    height: 10%;
  }
  ${ContentStyle} {
    height: 72%;
  }
  ${ApplyBtnStyle} {
    height: 8%;
    margin-top: 1.25rem;
  }
`
