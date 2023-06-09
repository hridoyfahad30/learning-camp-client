// Store User in MongoDB

export const storeUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    photo: user.photoURL,
    role: "student",
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currentUser),
  };

  fetch(`${import.meta.env.VITE_API_BASE_URL}/allUsers/${user?.email}`, options)
    .then((response) => response.json())
    .then((data) => {
      
    })
    .catch((err) => console.error(err));
};

// Make Admin

export const makeAdmin = (email) => {
  const currentUser = {
    role: "admin",
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currentUser),
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/allUsers/${email}`, options)
    .then((response) => response.json())
};


// Make Instructor

export const makeInstructor = (email) => {
  const currentUser = {
    role: "instructor",
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(currentUser),
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/allUsers/${email}`, options)
    .then((response) => response.json())
};