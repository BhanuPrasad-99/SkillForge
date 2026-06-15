import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [courses, setCourses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider
      value={{
        courses,
        setCourses,
        skills,
        setSkills,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}