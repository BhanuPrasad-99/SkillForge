function Card({ title, description }) {
  return (

    <div className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 mt-2">
        {description}
      </p>

    </div>

  );
}

export default Card;