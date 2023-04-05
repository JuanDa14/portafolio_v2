export const abilities = [
	{
		name: 'Html',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/html.svg',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/react.svg',
	},
	{
		name: 'NextJs',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/nextjs.svg',
	},
	{
		name: 'NestJs',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/nest.svg',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/bootstrap.svg',
	},
	{
		name: 'Express',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/express.png',
	},
	{
		name: 'MongoDB',
		type: 'Database',
		level: 'Intermedio',
		imageUrl: '/icons/mongodb.svg',
	},
	{
		name: 'Css',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/css.svg',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/javascript.svg',
	},
	{
		name: 'Styled Components',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/styled-components.png',
	},
	{
		name: 'Laravel',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/laravel.png',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		imageUrl: '/icons/typescript.svg',
	},
	{
		name: 'NodeJs',
		type: 'Backend',
		level: 'Avanzado',
		imageUrl: '/icons/nodejs.svg',
	},
	{
		name: 'PHP',
		type: 'Backend',
		level: 'Intermedio',
		imageUrl: '/icons/php.svg',
	},
	{
		name: 'GraphQL',
		type: 'Backend',
		level: 'Básico',
		imageUrl: '/icons/graphql.svg',
	},
	{
		name: 'MySQL',
		type: 'Database',
		level: 'Intermedio',
		imageUrl: '/icons/mysql.png',
	},
	{
		name: 'Sass',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/sass.png',
	},
	{
		name: 'TailwindCss',
		type: 'Frontend',
		level: 'Intermedio',
		imageUrl: '/icons/tailwind-css.png',
	},
];

export const projects = [
	{
		title: 'Frontend Developer',
		description:
			'Actualmente trabajo en el desarrollo de módulos en diferentes aplicaciones web para la empresa FMSAC.',
		technologies: ['PHP', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.fmsac.com/es',
		updatedAt: `${new Date().getDate()}`,
		byMe: false,
	},
	{
		title: 'Freelancer',
		description:
			'Brinde mantenimiento a una aplicación web, mejorando su rendimiento, agregando nuevas funcionalidades y asegurando la seguridad de la misma.',
		technologies: ['Laravel', 'PHP', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
		imageUrl: 'proyecto-2',
		githubUrl: '#',
		websiteUrl: 'https://www.yahuahbible.com',
		updatedAt: '2022-12-12',
		byMe: false,
	},
	{
		title: 'Fullstack Developer',
		description:
			'Creación de una aplicación de gestión de proyectos. Permite crear proyectos, agregar tareas, asignarlas a usuarios y cambiar su estado.',
		technologies: [
			'React',
			'JavaScript',
			'TailwindCss',
			'NodeJs',
			'MongoDB',
			'Google Auth',
			'Facebook Auth',
		],
		imageUrl: 'proyecto-1',
		githubUrl: 'https://github.com/JuanDa14/calendar-front',
		websiteUrl: 'https://calendario-app.vercel.app',
		updatedAt: '2022-12-13',
		byMe: true,
	},
	{
		title: 'Fullstack Developer',
		description:
			'Aplicación web que permite crear enlaces de árbol, es decir, enlaces que se pueden compartir con otras personas y que al hacer click en ellos, se puede ver el árbol genealógico de la persona que lo creó.',
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
		imageUrl: 'proyecto-2',
		githubUrl: 'https://github.com/JuanDa14/treelink-frontend',
		websiteUrl: 'https://treeliink.vercel.app',
		updatedAt: '2022-12-12',
		byMe: true,
	},
];

export const InitialStateContactForm = {
	name: '',
	subject: '',
	email: '',
	message: '',
};
