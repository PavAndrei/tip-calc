import { Calculator } from "./components/Calculator/Calculator";
import { Container } from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { Tip } from "./components/Tip/Tip";
import { TipProvider } from "./context/TipContext";

function App() {
  return (
    <TipProvider>
      <Container>
        <Calculator>
          <Form />
          <Tip />
        </Calculator>
      </Container>
    </TipProvider>
  );
}

export default App;
