import React from 'react'

export type StudentType = {
  studentId: string
  department: string
  email: string
  name: string
  role: 'STUDENT' | 'ADMIN'
}

const StudentsList = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/students`,
    { cache: 'no-store' } // Optional: avoids caching
  )

  const students: StudentType[] = await res.json()
  console.log(students)
  return (
    <div>
      {students.map((student, index) => (
        <p key={`${student.studentId}_${index}`}>{student.name}</p>
      ))}
    </div>
  )
}

export default StudentsList
