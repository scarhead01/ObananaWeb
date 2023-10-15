import React from 'react'
import styled from 'styled-components'

const Advertise = () => {
  return (
    <AdCon>
      <div className="container">
        <h5>Free Shipping Anywhere in the Philippines! Portland Cement 1,000 Bags Minimum <a href="#" > See Details </a></h5> 
      </div>
    </AdCon>
  )
}

const AdCon = styled.div`
display: flex;
  background-color: #273238;
  text-align: center;
  justify-content: center;
  align-items: center; /* Center vertically */

  .container {
    h5 {
        margin: 0;
      color: white;
      padding: 10px;
    }
  }
`

export default Advertise
