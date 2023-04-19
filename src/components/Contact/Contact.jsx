import './Contact.css';

export function Contact() {
  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <a href='mailto:antoni.protoni@gmail.com'>
        <span type='button' className='btn btn--outline'>
          Envíame un email
        </span>
      </a>
    </section>
  );
}
