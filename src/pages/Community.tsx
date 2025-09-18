// Import For React
import { useEffect, useState } from "react";
// Import For Hooks
import { useMediaQuery } from "../hooks/mediaScreen";
import { Footer, NavBar } from "../layouts";
// Import For Components
import { NavIcons, Publi, InsertPubli, Valoraciones } from "../components";

// Community Page
export default function Community() {
	// Responsive Constants
	const isTablet = useMediaQuery("(max-width: 768px)");

	// State
	const [textNote, setTextNote] = useState('')
	const [notes, setNotes] = useState<string[]>([])

	// Handle Change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTextNote(e.target.value)
	}

	useEffect(() => {
		const storedNote = localStorage.getItem('notes')
		if (storedNote) {
			setNotes(JSON.parse(storedNote))
		}
	}, [])

	// Handle Delete
	const onDelete = () => {
		setTextNote('')
	}

	// Handle Accept
	const onPost = () => {
		setTextNote('')
		setNotes([...notes, textNote])
		localStorage.setItem('notes', JSON.stringify([...notes, textNote]))
	}

	return (

		<>
			{/* NavBar */}
			<NavBar />
			{/* Publicaciones */}
			<Publi
				textNote={textNote}
				onChange={handleChange}
				onDelete={onDelete}
				onPost={onPost}
			/>
			{/* Insert Publicaciones */}
			<InsertPubli
				notes={notes}
			/>
			<Valoraciones
				name="Alex"
				department=" Carazo"
			/>
			{/* Footer */}
			<Footer />
			{/* Nav Icons */}
			{isTablet ? <NavIcons /> : ''}
		</>
	)
}