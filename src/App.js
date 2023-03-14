import React, { Suspense } from 'react'
import styled from 'styled-components';
import { fetchData } from "./fetchData";


const StyledBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: white;
  background-color: black;
`;

const StyledH1 = styled.h1`
  background-color: green;
`;

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function App() {
  const data = apiData.read();

  return (
    <StyledBg>
      <StyledH1>Render as you Fetch</StyledH1>
      <Suspense fallback={<div>Loading</div>}>
        <ul>
          {data?.map((user)=>(
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </Suspense>
    </StyledBg>
  );
}

export default App;
