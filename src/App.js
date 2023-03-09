import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log('***hendleSubmit', data)

  }

  console.log('***formValues', formValues);
  
    return ( 

    <form onSubmit={handleSubmit}>
    <div>
      <h1>Formulário</h1>
    </div>
    <input type="text" name="name" placeholder="name" onChange={handleInputChange} value={formValues.name || ''}/>

    <input type="email" name="email" placeholder="seuemail@dominio.com" onChange={handleInputChange} value={formValues.email || ''} />
  
    
    <input type="tel" name="telefone" placeholder="(00) 0 0000-0000" onChange={handleInputChange} value={formValues.telefone || ''}/>
      
      <div className='radios'>
          <label>

          <input type="radio" value="whatsapp" name="contact" onChange={handleInputChange} checked={formValues.contact ==="whatsapp"}/> Whatsapp
          
          </label>
          
          <label>

          <input type="radio" value="email" name="contact" onChange={handleInputChange} checked={formValues.contact ==="email"}/> Email

          </label>
        
      </div>

        <textarea name="message" onChange={handleInputChange} value={formValues.message || ''}></textarea>

    <button type='submit'>Enviar</button>
    
    </form>
  );
  
}

export default App;
