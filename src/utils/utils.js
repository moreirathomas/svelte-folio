// skills array ~ imported in index.svelte
// isHovered scoped to skill object for no global behavior during hover animation
export const skills = [
  { name: 'Html5', color: '#ee4d26', isHovered: false },
  { name: 'CSS3', color: '#42a5f5', isHovered: false },
  { name: 'Sass', color: '#f06292', isHovered: false },
  { name: 'JavaScript', color: '#ffca28', isHovered: false },
  { name: 'TypeScript', color: '#3178c6', isHovered: false },
  { name: 'RxJS', color: '#c53461', isHovered: false },
  { name: 'Node.js', color: '#6c943d', isHovered: false },
  { name: 'Express.js', color: '#b2b2b2', isHovered: false },
  { name: 'npm', color: '#b9261a', isHovered: false },
  { name: 'Git', color: '#e64a19', isHovered: false },
  { name: 'GitHub', color: '#333', isHovered: false },
  { name: 'Angular', color: '#e53935', isHovered: false },
  { name: 'React', color: '#01b4cb', isHovered: false },
  { name: 'Svelte', color: '#ea4f27', isHovered: false },
  { name: 'SQL', color: '#fff', isHovered: false },
  { name: 'MongoDB', color: '#5f9c51', isHovered: false },
  { name: 'Swift', color: '#dd5c43', isHovered: false },
  { name: 'Abode Illustrator', color: '#ee8b37', isHovered: false },
  { name: 'Abode XD', color: '#ea55bb', isHovered: false },
];

// languages array and function ~ imported in _projectCard.svelte
// get the color corresponding to the language to display in tags
export const languages = [
  { language: 'HTML', color: '#ee4d26' },
  { language: 'CSS', color: '#42a5f5' },
  { language: 'JavaScript', color: '#ffca28' },
  { language: 'TypeScript', color: '#3178c6' },
  { language: 'null', color: '#fff' },
];
export const getColor = (language) => {
  const matchingLanguage = languages.filter(
    (lang) => lang.language === language
  );
  return matchingLanguage[0].color;
};

// contact links array ~ imported in _footer.svelte
export const links = [
  { name: 'Email', url: 'mailto:moreirathomas97@gmail.com', iconClassName: 'fas fa-paper-plane', iconColor: '#fff' },
  { name: 'GitHub', url: 'https://github.com/moreirathomas', iconClassName: 'fab fa-github', iconColor: '#333' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thomas-moreira97', iconClassName: 'fab fa-linkedin', iconColor: '#007bb5' },
];
