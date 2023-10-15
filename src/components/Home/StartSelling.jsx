import React from 'react'
import styled from 'styled-components'
import map from '../../assets/hero/map.png'



const StartSelling = () => {
    const info =
     [
        { title:'Suppliers',
          description: '2,000++ Top Suppliers in the Philippines and Asia'
         },
         { title:'Customers',
         description: '10,000++ across the Philippines and Asia'
        },
        { title:'Payment Gateways',
        description: '20++ Payment Gateways'
       }
     ];
  return (
   <Con>
    <div className="container">
        <div className="main">
        <div className="upper">
    <h1>Start Selling using the 1st secured B2B Platform in the Philippines </h1>
    <h6> Have access and provide supply to top corporations in the Philippines and Asia</h6>
    </div>
    <div className="button">
        <button>Start Selling</button>
        <button>Talk With Contestant</button>
    </div>
    <div className="info">
        {info.map((item, index) => (
            <div className='item' key={index}>
            <div className="title"> 
            <h3>{item.title}</h3> 
            </div>
            <div className="description">
                <h5>{item.description}</h5>
            </div>
            </div>
        ))}
    </div>
    </div>
    </div>
   </Con>
  )
}

const Con = styled.div`
height: 100vh;

    .container{
        background-image: url(${map}); /* Use 'url()' to specify the image path */
        background-size: cover; /* Adjust as needed */
        background-repeat: no-repeat;
        background-position:center;
        width: 100%;
        height: auto;

        .main{
        width: 50%;
        display: flex;
        justify-content: center;
        .upper{
            margin-bottom: 10%;
            h1{
                font-weight:bold  ;
            }
        }
        .button{
            display: flex;
            flex-direction: row;
            margin-bottom: 10%;
            button{
                margin: 10px;
                border-radius: 30px;
            }
        }
        .info{
            .item{
                .title{
                   
                }
                .description{
                        color: Orange;
                    }
            }
        }
    }
    }
   
`;

export default StartSelling