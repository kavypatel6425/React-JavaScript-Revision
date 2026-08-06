import { createContext, useState } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      course: "BCA",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Ahmedabad",
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "MCA",
      email: "priya@gmail.com",
      phone: "9876543211",
      city: "Surat",
    },
    {
      id: 3,
      name: "Amit Shah",
      course: "BBA",
      email: "amit@gmail.com",
      phone: "9876543212",
      city: "Rajkot",
    },
    {
      id: 4,
      name: "Narendr Modi",
      course: "MBA",
      email: "narendr@gmail.com",
      phone: "9898989898",
      city: "Vadnagar",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);


  return (
    <StudentContext.Provider value={{
      students,
      setStudents,
      selectedStudent,
      setSelectedStudent
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;