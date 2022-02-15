import Bg from './components/background';
import Header from './components/header';
import Main from './components/main';
import Flex from './components/flexboxColReverse';

function App() {
  return (
    <div className="absolute flex justify-around w-full h-full bg-gray-300 -z-20">
      <div style={{ width: '375px', height: '812px' }}>
        <Bg />
        <Flex>
          <Main />
          <Header />
        </Flex>
      </div>
    </div>
  );
}

export default App;
