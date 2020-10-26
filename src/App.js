import styled from 'styled-components';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./components/Document";
import Dashboard from "./components/Dashboard";
import {useState} from "react";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  border: solid 1px #ddd;
  height: 100vh;
`;

function App() {
  const [firstArticle, setFirstArticle] = useState('Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D. Quijote de la Mancha');

  return (
    <div className="App">
      <Layout>
        <Wrapper>
          <Dashboard setFirstArticle={setFirstArticle}/>
        </Wrapper>
        <Wrapper>
          <PDFViewer>
            <MyDocument firstArticle={firstArticle}/>
          </PDFViewer>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default App;
