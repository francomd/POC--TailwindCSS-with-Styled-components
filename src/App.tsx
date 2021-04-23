import "twin.macro";
import tw, { styled } from "twin.macro";

const H1 = styled.h1(() => [tw`font-sans text-red-600 text-3xl font-bold`]);
const Main = styled.main(() => [tw`text-`]);

function App() {
  return (
    <Main>
      <H1>Hello World</H1>
    </Main>
  );
}

export default App;
