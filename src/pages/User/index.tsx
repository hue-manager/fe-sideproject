import Member from '../../components/Admin_user/Member'
import React, { useState } from 'react'
import Non_Member from '../../components/Admin_user/Non_Member'
import styled from 'styled-components'

type Props = {}

const index = (props: Props) => {
  const [member, setMember] = useState(true)
  return (
    <Wrapper>
      <Selected>
        <p
          onClick={() => {
            setMember(true)
          }}
          className={member ? 'active' : 'inactive'}
        >
          일반
        </p>
        <p
          onClick={() => {
            setMember(false)
          }}
          className={!member ? 'active' : 'inactive'}
        >
          관리자
        </p>
      </Selected>
      {member ? <Member /> : <Non_Member />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 100px;
`
const Selected = styled.div`
  width: 100%;
  display: flex;
  padding: 0 80px;
  p {
    cursor: pointer;
    width: 100%;
    padding: 15px 0;
    border-bottom: 2px solid var(--color-black10);
    text-align: center;
    border-radius: 20px 20px 0 0;
    color: var(--color-black50);
    :hover {
      border-bottom: 2px solid var(--color-primary);
      transition: 0.2s;
      color: var(--color-black);
    }
  }
  .active {
    border-bottom: 2px solid var(--color-primary);
    transition: 0.2s;
    color: var(--color-black);
  }
`

export default index
