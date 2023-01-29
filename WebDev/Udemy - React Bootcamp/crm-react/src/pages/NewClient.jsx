import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";
import { addClient } from "../data/Clients";

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const email = formData.get("email");

  // Validation
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("All fields are required");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errors.push("The email is not valid");
  }

  // Return errors
  if (Object.keys(errors).length) {
    return errors;
  }

  await addClient(data);
  return redirect("/");
}

function NewClient() {
  const errors = useActionData();
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">All fields are required</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <ClientForm />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Add new client"
          />
        </Form>
      </div>
    </>
  );
}

export default NewClient;
