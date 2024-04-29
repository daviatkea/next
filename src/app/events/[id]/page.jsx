import AddComment from "@/components/AddComment";
import { getEvent, getComments } from "@/lib/crud";

// export const dynamicParams = false;
export const dynamic = "force-dynamic";

// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

export default async function EventPage({ params: { id } }) {
  const [{ name: eventName, date, description }] = await getEvent(id);
  const comments = await getComments(id);

  return (
    <>
      <div>
        <h1>{eventName}</h1>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h2>{comment.name}</h2>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </div>
      <AddComment id={id} />
    </>
  );
}
