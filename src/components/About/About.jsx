import './About.css';

export function About() {
  return (
    <div className='about center'>
      <h1>
        Hi, I am <span className='about__name'> Antoni Perez.</span>
      </h1>
      <h2 className='about__role'>A Full Stack Web Developer.</h2>
      <p className='about__desc'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        aliquam error voluptas eius ipsum provident, officiis mollitia autem
        ullam? Omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quaerat nihil commodi sit voluptatibus quam tempora corrupti cupiditate
        ullam delectus ratione? Quidem error cum vero aliquam vel ratione,
        repellendus nisi magni.
      </p>
      <div className='about__contact center'>
        <a href=''>
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>

        <a href='' aria-label='github' className='link link--icon'>
          {/* <GitHubIcon /> */} Github
        </a>

        <a href='' aria-label='linkedin' className='link link--icon'>
          {/* <LinkedInIcon /> */} linkedin
        </a>
      </div>
    </div>
  );
}
