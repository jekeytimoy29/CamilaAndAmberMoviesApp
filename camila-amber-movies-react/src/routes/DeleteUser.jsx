import { redirect } from "react-router-dom";

export async function action({ params }) {
  console.log(params);
  return redirect("/users");
}
