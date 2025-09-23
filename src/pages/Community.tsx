import { useState, useEffect } from "react";
import { useMediaQuery } from "../hooks/mediaScreen";
import { NavBar, Footer } from "../layouts";
import { NavIcons, Publi, Valoraciones, PublicacionesList } from "../components";

interface Publicacion {
	id: string;
	content: string;
	author: string;
	date: Date;
	likes: number;
	comments: number;
}

export default function Community() {
	const isTablet = useMediaQuery("(max-width: 768px)");
	const [textNote, setTextNote] = useState('');
	const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

	// Cargar publicaciones guardadas
	useEffect(() => {
		const savedPosts = localStorage.getItem('publicaciones');
		if (savedPosts) {
			setPublicaciones(JSON.parse(savedPosts));
		}
	}, []);

	const handlePost = () => {
		if (!textNote.trim()) return;

		const newPost: Publicacion = {
			id: Date.now().toString(),
			content: textNote,
			author: "Tú",
			date: new Date(),
			likes: 0,
			comments: 0
		};

		const updatedPosts = [newPost, ...publicaciones];
		setPublicaciones(updatedPosts);
		localStorage.setItem('publicaciones', JSON.stringify(updatedPosts));
		setTextNote('');
	};

	const handleLike = (id: string) => {
		const updatedPosts = publicaciones.map(post =>
			post.id === id ? { ...post, likes: post.likes + 1 } : post
		);
		setPublicaciones(updatedPosts);
		localStorage.setItem('publicaciones', JSON.stringify(updatedPosts));
	};

	const handleComment = (id: string) => {
		// Implementar lógica de comentarios
		console.log(`Comentar en publicación ${id}`);
	};

	const handleShare = (id: string) => {
		// Implementar lógica de compartir
		console.log(`Compartir publicación ${id}`);
	};

	return (
		<>
			<NavBar />

			<main className="container max-w-4xl px-4 py-6 mx-auto">
				<h1 className="mb-6 text-2xl font-bold text-center text-primary">
					Bienvenido a la comunidad de Avify
				</h1>

				<Publi
					textNote={textNote}
					onChange={(e) => setTextNote(e.target.value)}
					onDelete={() => setTextNote('')}
					onPost={handlePost}
				/>

				<PublicacionesList
					publicaciones={publicaciones}
					onLike={handleLike}
					onComment={handleComment}
					onShare={handleShare}
				/>

				<Valoraciones
					name="Carlos"
					department="Managua"
					onRate={(rating) => console.log(`Valoración: ${rating} estrellas`)}
				/>
			</main>

			<Footer />
			{isTablet && <NavIcons />}
		</>
	);
}