import './Skills.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'API REST',
  'Tailwind CSS',
  'Git',
  'Formik',
  'Node.js',
  'Figma',
];

export function Skills() {
  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Habilidades</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li className='skills__list-item btn btn--plain'>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
