import Bg from './components/background';
import Header from './components/header';
import MainBg from './components/mainbg';
import Flex from './components/flexboxColReverse';

function App() {


  return (
    <>
      <Bg />
      <Flex>
      <MainBg>
      </MainBg>
      <Header/>
      </Flex>
    </>
  )
}

export default App;
