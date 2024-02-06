import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [counter, setCounter] = useState(0);

  const handleClick = (action: 'plus' | 'minus') => {
    action === 'plus'
      ? setCounter((prev) => prev + 1)
      : setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/about'>Страница Обо мне</a>
          </li>
          <li>
            <a href='/contacts'>Страница Контакт</a>
          </li>
        </ul>
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <p>Counter: {counter}</p>
        <div style={{ display: 'flex', columnGap: '12px' }}>
          <button type='button' onClick={() => handleClick('minus')}>
            Minus
          </button>
          <button type='button' onClick={() => handleClick('plus')}>
            Plus
          </button>
        </div>
      </div>

      {children}
    </div>
  );
}
