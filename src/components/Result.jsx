import React from 'react';
import Loading from './Loading';

const Result = ({ weater, city, isLoading }) => {
  const convertKelviToCelsius = (kelvin) => {
    const k = 273.15;
    const result = +kelvin - k;
    return result.toFixed(2);
  };

  if (isLoading) {
    return (
      <div className="card p-5 w-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="card p-5 border border-blue flex flex-col justify-center items-center space-y-5">
      {weater?.cod === '404' ? (
        <>
          <div className="w-full lg:w-4/5">
            <label className="text-xl lg:text-3xl">Sin resultados...</label>
          </div>
        </>
      ) : !weater?.cod ? (
        <div className="w-full lg:w-4/5 flex flex-col justify-center items-center space-y-10">
          <img
            src="/cloud.svg"
            alt="cloud-icon"
            className="w-32 lg:w-52 h-32 lg:h-52"
          />
          <label className="text-xl lg:text-3xl">
            Los resultados aparecerán aquí...
          </label>
        </div>
      ) : (
        <>
          <div className="w-full lg:w-4/5 flex justify-center items-center">
            <img
              src="/cloud.svg"
              alt="cloud-icon"
              className="w-32 lg:w-52 h-32 lg:h-52"
            />
          </div>

          <div className="w-full lg:w-4/5">
            <label className="text-xl lg:text-3xl">
              La temepratura en {city} es:
            </label>
          </div>
          <div className="w-full lg:w-4/5">
            <label className="text-6xl flex justify-center items-center">
              {convertKelviToCelsius(weater.main.temp)}{' '}
              <span className="text-3xl">&#8451;</span>
            </label>
          </div>
          <div className="w-full lg:w-4/5 flex justify-center items-center space-x-5">
            <label className="text-xl lg:text-3xl">
              Min: {convertKelviToCelsius(weater.main.temp_min)}{' '}
              <span className="text-sm absolute">&#8451;</span>{' '}
            </label>{' '}
            <label className="text-xl lg:text-3xl">
              Máx: {convertKelviToCelsius(weater.main.temp_max)}{' '}
              <span className="text-sm absolute">&#8451;</span>{' '}
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
