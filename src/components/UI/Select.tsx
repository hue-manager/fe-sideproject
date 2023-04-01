import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface ISelect {
  options?: string[] | number[]
  initial: string | number
  value?: string | number
  unit?: any
  width?: string
  height?: string
  borderRadius?: string
  borderColor?: string
  fontSize?: string
  arrowImg?: string
  topPosition?: string
  isClickDefault?: boolean
  isDisabled?: boolean
  type?: string
  bgColor?: string
  color?: string
  onChange?: React.ChangeEventHandler<HTMLLIElement>
  onClick?: React.MouseEventHandler<HTMLLIElement>
}

const Select = ({
  options,
  initial,
  value,
  unit,
  width = '128px',
  height = '43px',
  borderRadius = '8px',
  borderColor = '',
  isClickDefault = true,
  isDisabled = false,
  fontSize = '14px',
  topPosition = '48%',
  arrowImg = '/images/selectBtn2.png',
  type = '',
  bgColor = 'var(--color-white)',
  color = 'var(--color-primary)',
  onChange,
  onClick,
}: ISelect) => {
  const [currentValue, setCurrentValue] = useState(initial)
  const [showOptions, setShowOptions] = useState(false)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setShowOptions(false))

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { innerText } = e.target as HTMLLIElement
    setCurrentValue(innerText)
  }

  return (
    <SelectBoxStyle
      width={width}
      height={height}
      borderRadius={borderRadius}
      borderColor={borderColor}
      show={showOptions}
      arrowImg={arrowImg}
      topPosition={topPosition}
      bgColor={bgColor}
      color={color}
      type={type}
      isClickDefault={isClickDefault}
      isDisabled={isDisabled}
      onClick={() => !isDisabled && setShowOptions((prev) => !prev)}
    >
      <LabelStyle fontSize={fontSize} isDisabled={isDisabled} bgColor={bgColor} color={color}>
        {currentValue} {!currentValue.toString().includes(unit) && unit}
      </LabelStyle>
      <SelectOptionsStyle
        show={showOptions}
        ref={ref}
        borderRadius={borderRadius}
        borderColor={borderColor}
        bgColor={bgColor}
        color={color}
        type={type}
      >
        {options?.map((option) => (
          <OptionStyle
            type={type}
            bgColor={bgColor}
            color={color}
            width={width}
            height={height}
            fontSize={fontSize}
            key={option}
            value={value}
            onClick={isClickDefault ? (e) => handleOnChangeSelectValue(e) : onClick}
            onChange={onChange}
          >
            {option} {unit}
          </OptionStyle>
        ))}
      </SelectOptionsStyle>
    </SelectBoxStyle>
  )
}

export default Select

const SelectBoxStyle = styled.div<{
  isClickDefault: boolean
  borderColor: string
  borderRadius: string
  width: string
  height: string
  isDisabled: boolean
  show: boolean
  arrowImg: string
  topPosition: string
  type: string
  bgColor: string
  color: string
}>`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 600;
  line-height: 1.2;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 16px;
  border-radius: ${({ borderRadius }) => borderRadius};
  /* background-color: ${({ isDisabled }) =>
    isDisabled ? 'var(--color-primary)' : 'var(--color-white)'}; */
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-color: ${({ show, borderColor }) => (show ? 'transparent' : borderColor)};
  &::before {
    content: '';
    background-image: ${({ arrowImg }) => `url(${arrowImg})`};
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 16px;
    height: 16px;
    top: ${({ topPosition }) => topPosition};
    right: 16px;
    transform: translateY(-50%);
    font-size: 30px;
  }
`

const LabelStyle = styled.label<{
  fontSize: string
  isDisabled: boolean
  bgColor: string
  color: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  /* color: ${({ isDisabled }) => isDisabled && 'var(--color-primary)'}; */
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};
`

const SelectOptionsStyle = styled.ul<{
  show: boolean
  borderColor: string
  borderRadius: string
  bgColor: string
  color: string
  type: string
}>`
  position: absolute;
  list-style: none;
  top: ${({ type }) => (type === 'bgPrimary' ? '1px' : '-1px')};
  left: -1px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${({ show }) => (show ? '300px' : '0')};
  border: ${({ show }) => (show ? `1px solid var(--color-primary)` : 'none')};
  border-color: ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};
  z-index: 10;
  box-sizing: content-box;
`

const OptionStyle = styled.li<{
  width: string
  height: string
  fontSize: string
  bgColor: string
  color: string
  type: string
}>`
  font-size: ${({ fontSize }) => fontSize};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${({ color, type }) =>
      type === 'bgPrimary' ? 'var(--color-primary)' : color};
    color: ${({ bgColor, type }) => (type === 'bgPrimary' ? 'var(--color-white)' : bgColor)};
  }
`
