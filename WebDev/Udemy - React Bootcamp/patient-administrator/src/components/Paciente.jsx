const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">Raul</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {''}
        <span className="font-normal normal-case">10 de Diciembre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {''}
        <span className="font-normal normal-case">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad et autem
          explicabo consectetur sunt nam impedit in deleniti aliquid, maiores
          iusto adipisci eveniet maxime inventore dolores eius sapiente atque
          facere!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
