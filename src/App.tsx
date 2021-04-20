import './App.css';
import 'twin.macro';
import tw, { styled } from 'twin.macro';

const H1 = styled.h1(() => [
  tw`font-sans text-red-600 text-3xl font-bold`
]);

function App() {
  return (
    <div className="App">
      <H1>Hello World</H1>
    </div>
  );
}

export default App;
