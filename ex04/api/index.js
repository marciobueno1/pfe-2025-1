const baseURL = "https://parseapi.back4app.com/classes";
const headers = {
  "X-Parse-Application-Id": "4cRNaPFAu9tGO59OrBIJpH4v6qeHUUbtReuVmjP7",
  "X-Parse-JavaScript-Key": "Z8hSrHjoBh7TwIfEAhNqUokDVHFIIsB7O6x6j4Yo",
};

export const getTarefas = async (...args) => {
  console.log("getTarefas args", args);
  const response = await fetch(`${baseURL}/Tarefa`, {
    headers,
  });
  return await response.json();
};
