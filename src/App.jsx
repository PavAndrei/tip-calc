import { Calculator } from "./components/Calculator/Calculator";
import { Container } from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { Tips } from "./components/Tips/Tips";
import { TipProvider } from "./context/TipContext";

function App() {
  return (
    <TipProvider>
      <Container>
        <Calculator>
          <Form />
          <Tips />
        </Calculator>
      </Container>
    </TipProvider>
  );
}

export default App;
