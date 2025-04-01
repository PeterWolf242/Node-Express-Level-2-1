import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface IPerson {
	id: number;
	name: string;
}

interface IStarship {
	id: number;
	name: string;
}


function App() {

	const [person, SetPerson] = useState<IPerson[]>([]);
	const [ship, SetShip] = useState<IStarship[]>([]);

	useEffect(() => {
		async function fetchData() {
			const resp = await axios.get("http://localhost:3000/people")
			console.log(resp.data);
			SetPerson(resp.data);
		}
		fetchData();
	}, [])

	useEffect(() => {
		async function fetchData() {
			const resp = await axios.get("http://localhost:3000/starships")
			console.log(resp.data);
			SetShip(resp.data);
		}
		fetchData();
	}, [])



	return (
		<>
			<h1>Persons</h1>
			{person.map((person) => (
				<p>{person.name}</p>
			))}
			<h1>SHIPS</h1>
			{ship.map((ship) => (
				<h2>{ship.name}</h2>
			))}
		</>
	)
}

export default App
