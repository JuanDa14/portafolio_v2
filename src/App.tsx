import { useContext } from 'react';
import { About, Contact, Hero, Layout, Loader, Project } from './components';
import { UIContext } from './context';

function App() {
	const { isLoading } = useContext(UIContext);

	return (
		<>
			{isLoading && <Loader />}
			<Layout>
				<Hero />
				<About />
				<Project />
				<Contact />
			</Layout>
		</>
	);
}

export default App;
