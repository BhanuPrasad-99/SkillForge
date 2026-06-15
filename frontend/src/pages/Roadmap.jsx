function Roadmap(){

  const roadmap = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "System Design",
    "DevOps"
  ];

  return(

    <div className="p-10 text-white">

      <h1 className="text-3xl mb-6">
        Developer Roadmap
      </h1>

      <ul className="space-y-3">

        {roadmap.map((step,index)=>(
          <li key={index} className="bg-gray-800 p-3 rounded">
            {step}
          </li>
        ))}

      </ul>

    </div>

  )
}

export default Roadmap;