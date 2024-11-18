const URL =
  "https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos";

export function findAll() {
  const requestInit = {
    method: "GET",
    headers: {
      Authorization: "Bearer 112233",
    },
  };

  const responseHttp = fetch(URL, requestInit);

  return response.json();
}
