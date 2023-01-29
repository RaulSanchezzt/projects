import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../data/Clients";

export async function action({ params }) {
  await deleteClient(params.clientId);
  return redirect("/");
}

function Client({ client }) {
  const navigate = useNavigate();
  const { name, phone, email, job, id } = client;
  return (
    <tr className="border-b">
      <td className="p-4 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{job}</p>
      </td>
      <td className="p-4">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {phone}
        </p>
      </td>
      <td className="p-4 flex gap-4">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>
        <Form
          method="POST"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Do you want to delete this client?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Client;
