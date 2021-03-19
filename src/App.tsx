import styled from 'styled-components'
import { GlobalStyle } from './styles/global'


const Title = styled.h1`
font-size: 64px;
color: #8525e6;
`

export function App() {
  return (
    <div className="App">
      <Title >Hello world</Title>
      <GlobalStyle/>
    </div>
  );
}

export default App;
