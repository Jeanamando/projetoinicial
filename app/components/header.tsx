'use client'
import { styled } from "styled-components"
import { displayPartsToString } from "typescript"
import Register from "../register/page"

export default function Header(){
    return (
     <Wrapper>
        <div>
          <img src="" alt="" />
          <h1>
            One Piece Wiki
          </h1>
        </div>
      
        <div className="nav1">
          
            <ul>
            <button><a href="/register">Register</a></button>
            <span>login</span>
            </ul>
          
          
          

        </div>
      </Wrapper>
    
    
    
      
     
     
    )
  }

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1{
      font-size: 30px;
      
    }
    
    .nav1
    {
      display: flex;
      flex-direction: row-reverse;
      font-size: 20px;
      margin-top: 10px;
    
    }

    `
   