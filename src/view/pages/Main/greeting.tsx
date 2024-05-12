import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/common/Button/MyButton';

function Greeting() {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <section className="greeting main-section">
      <div className="text-content">
        <p className="title">Welcome to &quot;Galactic Exclusive&quot;</p>
        <p className="subtitle">
          &quot;Galactic Exclusive&quot; – your ultimate destination for premium real estate in the
          universe! We offer the most exclusive properties in the galaxy for the most discerning
          clients. From luxurious islands to futuristic asteroids – you&apos;ll find everything for
          your exclusive life in space.
        </p>
        <MyButton type="button" className="btn-center" onClick={goToCatalog}>
          Go...
        </MyButton>
      </div>
    </section>
  );
}

export default Greeting;
