import styled from "styled-components"


export const Container = styled.div`
   height: 100vh;
   display: grid;
   flex-direction: column;
`

export const BackgroundContainer = styled.div`
   height: 50vh;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
`

export const ImgContainer = styled.div`
   width: 100%;
   height: 50vh;
   position: absolute;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const ClockContainer = styled.div`
   width: 20%;
   height: 44%;
   position: relative;
   margin-top: 6%;

   img {
      width: 100%;
      height: 100%;
   }
   `

export const LogoContainer = styled.div`
   width: 20%;
   height: 52%;
   margin-top: 6%;
   position: relative;
   
   img {
      width: 100%;
      height: 100%;
   }
`

export const PurpleBackground = styled.div`
   height: 40vh;
   display: flex;
   
`

export const BoardContainer = styled.div`
   width: 50%;
   height: 70%;
   display: flex;
   flex-direction: row;
   position: absolute;
   margin-right: 50%;
`

export const ImgPurpleContainer = styled.div`
   width: 100%;
   height: 50vh;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const ImgBoardContainer = styled.div`
   width: 56%;
   height: 50%;
   margin-top: 8%;
   margin-left: 20%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-end;

   img {
      width: 100%;
      height: 100%;
   }
`

export const LadyContainer = styled.div`
   width: 47%;
   height: 65%;
   margin-bottom: 7%;
   position: absolute;

   img {
      width: 100%;
      height: 100%;
   }
`
export const BoardTitle = styled.div`
   width: 20%;
   height: 10%;
   position: absolute;
   text-align: center;
   margin-bottom: 16%;
   margin-right: 8%;
`
export const BoardButton = styled.div`
   width: 35%;
   height: 10%;
   position: absolute;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   text-align: center;
   margin-bottom: 2%;
`

export const ButtonContainer = styled.div`
   width: 20%;
   height: 80%;
   display: flex;
   justify-content: space-between;
   align-items: center;

   button {
      width: 100%;
      height: 100%;
      background: var(--background);
      border: 0;
      border-radius: 10px;
   }

   img {
      height: 2rem;
   }
`