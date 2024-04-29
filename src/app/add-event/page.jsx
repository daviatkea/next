import { addEvent } from "@/lib/crud";
import { redirect } from "next/navigation";

export default async function AddEventPage() {
  async function handleSubmit(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      date: formData.get("date"),
      description: formData.get("description"),
    };

    const [{ id: eventID }] = await addEvent(data);
    // const eventID = eventData[0].id;

    console.log(eventID);

    redirect(`/events/${eventID}`);
  }
  return (
    <div>
      <form action={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}
