import { addComment } from "@/lib/crud";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function AddComment({ id }) {
  async function handleSubmit(formData) {
    "use server";
    const data = {
      name: formData.get("name"),
      comment: formData.get("comment"),
      event_id: id,
    };

    await addComment(data);

    revalidatePath(`/events/${id}`);
    // revalidatePath("/events/[id]", "page");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" name="comment"></textarea>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default AddComment;
