import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

export const abilities: {
	name: string;
	type: 'Frontend' | 'Backend' | 'Database';
	level: 'Básico' | 'Intermedio' | 'Avanzado';
	icon: string;
}[] = [
	{
		name: 'Html',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'html5',
	},
	{
		name: 'Css',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'css3-alt',
	},
	{
		name: 'JavaScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'js',
	},
	{
		name: 'TypeScript',
		type: 'Frontend',
		level: 'Avanzado',
		icon: '',
	},
	{
		name: 'Bootstrap',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'bootstrap',
	},
	{
		name: 'TailwindCss',
		type: 'Frontend',
		level: 'Intermedio',
		icon: 'tailwind-css',
	},
	{
		name: 'React',
		type: 'Frontend',
		level: 'Avanzado',
		icon: 'react',
	},
	{
		name: 'NextJs',
		type: 'Frontend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'Laravel',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'laravel',
	},
	{
		name: 'Express',
		type: 'Backend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'NodeJs',
		type: 'Backend',
		level: 'Avanzado',
		icon: 'node-js',
	},
	{
		name: 'PHP',
		type: 'Backend',
		level: 'Intermedio',
		icon: 'php',
	},
	{
		name: 'NestJs',
		type: 'Backend',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MySQL',
		type: 'Database',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'MongoDB',
		type: 'Database',
		level: 'Intermedio',
		icon: '',
	},
	{
		name: 'GraphQL',
		type: 'Backend',
		level: 'Básico',
		icon: '',
	},
];

export const projects = [
	{
		title: 'Frontend Developer',
		description:
			'Actualmente trabajo en el desarrollo de módulos en diferentes tipos de aplicaciones web para la empresa FMSAC. Aplicando buenas prácticas y asegurando la calidad del código.',
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
		technologies: ['Laravel', 'Html', 'Css', 'JavaScript', 'Bootstrap', 'MySQL'],
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
		technologies: ['React', 'JavaScript', 'TailwindCss', 'NodeJs', 'MongoDB'],
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

export const socials = [
	{
		title: 'Linkedin',
		href: 'https://www.linkedin.com/in/juan-david-morales-paredes-617342224',
		Icon: AiFillLinkedin,
	},
	{
		title: 'Github',
		href: 'https://github.com/JuanDa14',
		Icon: AiFillGithub,
	},
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/ju4ndevelop/',
		Icon: AiOutlineInstagram,
	},
	{
		title: 'Facebook',
		href: '#',
		Icon: AiFillFacebook,
	},
];

export const InitialStateContactForm = {
	name: '',
	subject: '',
	email: '',
	message: '',
};
