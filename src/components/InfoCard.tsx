// Nuevo componente: InfoCard.tsx
interface InfoCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  reverse?: boolean;
  emoji: string;
}

export const InfoCard = ({ title, description, image, alt, reverse = false, emoji }: InfoCardProps) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 p-6 my-6 bg-white rounded-xl shadow-md transition-transform hover:scale-[1.02]`}>
    <div className="w-full md:w-1/3 lg:w-1/4">
      <img 
        src={image} 
        alt={alt} 
        className="object-cover w-full h-auto rounded-lg shadow-md"
        loading="lazy"
      />
    </div>
    <div className="w-full md:w-2/3 lg:w-3/4">
      <h4 className="flex items-center gap-2 text-lg font-bold text-primary">
        <span className="text-2xl">{emoji}</span> {title}
      </h4>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  </div>
);