import { GitHub, LinkedIn } from '@mui/icons-material';
import './About.css';

export function About() {
  const resume = 'https://flowcv.com/resume/jpnsdp9mem';
  const github = 'https://github.com/antoniPrz';
  const linked = 'https://www.linkedin.com/in/antoni-p%C3%A9rez/';
  return (
    <div className='about center' id='about'>
      <h1>
        ¡Hola!, Soy <span className='about__name'> Antoni Pérez.</span>
      </h1>
      <h2 className='about__role'>Un Desarrollador Web Full Stack.</h2>
      <p className='about__desc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        aliquam error voluptas eius ipsum provident, officiis mollitia autem
        ullam? Omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat nihil commodi sit voluptatibus quam tempora corrupti cupiditate
        ullam delectus ratione? Quidem error cum vero aliquam vel ratione,
        repellendus nisi magni.
      </p>
      <div className='about__contact center'>
        <a href={resume}>
          <span type='button' className='btn btn--outline'>
            Curriculum
          </span>
        </a>

        <a href={github} aria-label='github' className='link link--icon'>
          <GitHub />
        </a>

        <a href={linked} aria-label='linkedin' className='link link--icon'>
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}
