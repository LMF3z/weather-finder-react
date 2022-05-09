import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Layout from './components/Layout';
import Result from './components/Result';

const App = () => {
  const [weater, setWeater] = useState({});
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const requestHandler = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?q=${data.city},${data.country}&APPID=${process.env.REACT_APP_API_KEY}`
      );

      const res = await response.json();
      setWeater(res);
      setCity(data.city);
      setIsLoading(false);
    } catch (error) {
      console.log('error ->', error);
      setWeater(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex justify-center items-center">
        <Layout>
          <div className="container_card">
            <Form handleSend={requestHandler} />
          </div>
          <div className="container_card">
            <Result weater={weater} isLoading={isLoading} city={city} />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default App;
