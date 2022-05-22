import { useState } from 'react';

const Form = ({ handleSend }) => {
  const [formState, setFormState] = useState({
    city: '',
    country: 'none',
  });

  const handleChange = ({ target }) =>
    setFormState({ ...formState, [target.name]: target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend(formState);
    e.target.reset();
    setFormState({
      city: '',
      country: 'none',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-5 flex flex-col justify-center items-center space-y-5"
    >
      <div className="input-wrapper w-full lg:w-4/5">
        <input
          className="input text-blue"
          name="city"
          value={formState.city}
          placeholder="Ciudad"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper w-full lg:w-4/5">
        <select
          name="country"
          value={formState.country}
          onChange={handleChange}
        >
          <option select={'true'} value="none">
            Seleccione pais
          </option>
          <option value="VE">Venezuela</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="COL">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="CL">Chile</option>
        </select>
      </div>
      <div className="w-full lg:w-4/5">
        <button type="submit" className="button">
          Consultar
        </button>
      </div>
    </form>
  );
};

export default Form;
