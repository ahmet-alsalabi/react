import React from "react";

const StudentsList = () => {
    const students = [
        { name: "Ali", age: 18, grade: 85, department: "Science" },
        { name: "Sara", age: 17, grade: 92, department: "Arts" },
        { name: "Hassan", age: 19, grade: 78, department: "Commerce" },
        { name: "Laila", age: 18, grade: 88, department: "Science" },
        { name: "Ahmed", age: 20, grade: 90, department: "Engineering" },
    ];

    return (
        <div className="container mt-5">
            <div className="row">
                {students.map((stu, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">{stu.name}</h5>
                                <p className="card-text">
                                    Age: {stu.age} <br />
                                    Grade: {stu.grade} <br />
                                    Department: {stu.department}
                                </p>
                                <button className="btn btn-primary mt-2">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentsList;
