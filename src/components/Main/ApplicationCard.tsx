import React from 'react'
import styled from 'styled-components'

const ApplicationCard = () => {
  const type = '연차'
  const name = '공혜지'
  const affiliation = '연차'
  const date = '23.01.25'
  const reason = '병원 방문'
  const status = '처리대기'
  return (
    <ApplicationCardStyle type={type}>
      <div>{type}</div>
      <div>{name}</div>
      <div>{date}</div>
      <div>{affiliation}</div>
      <div>{reason}</div>
      <div>{status}</div>
    </ApplicationCardStyle>
  )
}

export default ApplicationCard

const ApplicationCardStyle = styled.li<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border-radius: 9999px;
  padding: 0 3rem;
  background-color: var(--color-white);
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
  border-radius: 40px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.6%;
    height: 100%;
    gap: 1.5rem;
    color: var(--color-black);
    :first-child {
      color: ${({ type }) => (type === '연차' ? 'var(--color-primary)' : 'var(--color-pink)')};
      font-weight: 600;
    }
  }
`
