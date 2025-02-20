import React, { useEffect, useState } from 'react';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import { useNavigate } from 'react-router-dom';

function NotFound(): React.ReactNode {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 15000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [navigate]);

  return (
    <article className='h-[80vh] relative flex flex-col gap-4 items-center justify-center'>
      <h1 className='text-h1 uppercase'>Página não encontrada</h1>
      <p className='text-body-1 text-black dark:text-white'>Redirecionando em {countdown} segundos...</p>
      <ButtonCustom 
        link='/' 
        text='Voltar para o início' 
        variant='primary' 
        width='button-large'
      />
    </article>
  );
}

export default NotFound;
