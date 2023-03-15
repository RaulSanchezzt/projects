import { useLoaderData } from "react-router";
import { getGuitar } from "../../models/guitars.server";

export async function loader({ params }) {
  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl);

  return guitar;
}

function Guitar() {
  const guitar = useLoaderData();
  console.log(guitar);
  return <div>a</div>;
}

export default Guitar;
