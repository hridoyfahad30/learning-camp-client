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
    .then((data) => {})
    .catch((err) => console.error(err));
};

// Update Instructor Approved Classes
export const updateInstructorApproveClass = (instructorEmail) => {

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
  };

  fetch(`${import.meta.env.VITE_API_BASE_URL}/profile?email=${instructorEmail}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
};

// Get User
export const getUser = () => {
  const options = { method: "GET" }

    return fetch(`${import.meta.env.VITE_API_BASE_URL}/all-users`, options)
      .then((res) => res.json())
} 

// Get Profile
export const getUserProfile = (userEmail) => {
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/profile?email=${userEmail}`, options)
    .then((res) => res.json())

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

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}/all-users/${email}`,
    options
  ).then((response) => response.json());
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

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}/all-users/${email}`,
    options
  ).then((response) => response.json());
};

// Add Class
export const addClass = (classInfo) => {
  const addAClassInfo = classInfo;

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addAClassInfo),
  };

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}/add-a-class`,
    options
  ).then((res) => res.json());
};

// Update Class Status by Admin
export const updateClassStatus = (id, status) => {
  const action = {
    status
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(action),
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/update-class-status/${id}`, options)
    .then((response) => response.json())
};


// Update Class Status by Admin
export const sendFeedback = (id, feedback) => {
  const action = {
    feedback
  };

  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(action),
  };
  return fetch(`${import.meta.env.VITE_API_BASE_URL}/update-class-status/${id}`, options)
    .then((response) => response.json())
};

// Get Instructor Class
export const getInstructorClasses = (userEmail) => {
  const options = {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/instructor-classes?email=${userEmail}`, options)
    .then((res) => res.json())

};

// Get All Classes As Admin
export const getAllClasses = () => {
  const options = {
    method: "GET"
  };

  return fetch(`${import.meta.env.VITE_API_BASE_URL}/all-classes`, options)
    .then((res) => res.json())
}
