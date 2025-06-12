import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <div>

      <Container>
      <Header />
        <Input />
        <Todos />
      </Container>
    </div>
  );
}
