const fetchFromApi = ({ path, method, body }: { path: string; method: string; body?: object }) =>
    fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error));
  

export const addToIPFS = (yourJSON: object) => fetchFromApi({ path: "/api/ipfs/add", method: "Post", body: yourJSON });

