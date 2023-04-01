import React from 'react'
import styled from 'styled-components'

const DetailItem = () => {
  return (
    <Wrap>
      <div>
        <strong>연차</strong>
        <span>김민지(디자인팀/주임)</span>
      </div>
      <span>23.3.20 - 23.3.21</span>
    </Wrap>
  )
}

const Wrap = styled.li`
  width: 98%;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 5px 6px 10px rgba(116, 92, 242, 0.12);
  border-radius: 15px;
  color: black;

  strong {
    font-weight: bold;
    margin-right: 15px;
  }
`

export default DetailItem
