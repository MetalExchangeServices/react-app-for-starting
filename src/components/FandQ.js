import React, {useState, useEffect} from 'react';                   
import '../CSS files/FandQ.css';

const FandQ_API = [
  {
    id: 1,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 2,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 3,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 4,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 5,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 6,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 7,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  },{
    id: 8,
    hadding: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore possimus ab facere quod doloribusneque ut! Eveniet maiores ratione cupiditate, nemo, aperiam rerum labore itaque reprehenderit estinventore minima id? Beatae, fugit. Libero animi quas consectetur. Sapiente facere rerum accusamus? Qui,deserunt vel. Vel eum, optio odio hic voluptas perferendis'
  }
];

const FandQ = () => {
  const [Sugges, setSugges] = useState('')
  useEffect(() => {
    localStorage.setItem('periouspage', (localStorage.getItem('page')));
    localStorage.setItem('page', (window.location.pathname));
})

  const clicking = (e) => {
    if (e.target.nextElementSibling.style.height === 'auto') {
      e.target.nextElementSibling.style.height = '0vw';
    } else {
      e.target.nextElementSibling.style.height = 'auto';
    };
  };
  const suggestion = (e) => {
    setSugges(e.target.value);
  };
  const submiti = () => {
    if (Sugges.length === 0) {
      alert('Please Fill The Suggestion Bar');
    } else {
      console.log(Sugges)
    }
  }

  return (
    <>
      <div className='fandq-body'>
        <main>
          <h1>F&Qs</h1>
            {FandQ_API.map((FandQs) => {
              return (
                <div key={FandQs.id}>
                <p onClick={clicking}> {FandQs.hadding} </p>
                <article> {FandQs.content} </article>
              </div> 
              )
          })}
        </main>
        <footer>
          <div className='FandQ-form' action='#' name='suggestion'>
            <input id='suggestion-input' onChange={suggestion} spellCheck='false' placeholder='Add your suggestion' type='text' autoComplete='off' required />
            <button onClick={submiti}>Send<i className='fas fa-arrow-right'></i></button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FandQ;