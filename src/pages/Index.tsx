
import { useEffect } from 'react';
import Home from './Home';

const Index = () => {
  useEffect(() => {
    document.title = "Joseph J Chalakkal | Portfolio";
  }, []);

  return <Home />;
};

export default Index;
