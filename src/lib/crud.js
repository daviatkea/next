const baseUrl = "https://kncfgomuxsfnndofzkhx.supabase.co/rest/v1";
const eventsUrl = `${baseUrl}/events`;
const commentsUrl = `${baseUrl}/event_comments`;

const headers = {
  Accept: "application/json",
  apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  Prefer: "return=representation",
};

export async function getItems(url, id) {
  const response = await fetch(`${url}?id=eq.${id}`, {
    headers: headers,
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export async function getEvent(id) {
  return getItems(eventsUrl, id);
}

export async function getComments(id) {
  const response = await fetch(`${commentsUrl}?event_id=eq.${id}`, {
    headers: headers,
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

async function addItem(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function addEvent(data) {
  return addItem(eventsUrl, data);
}

export async function addComment(data) {
  return addItem(commentsUrl, data);
}
