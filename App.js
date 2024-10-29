import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


//const UserCard = ({ info }) => {
//    return (
//        <>
//            <h3>Name :{info.name}</h3>
//            <h3>Age :{info.age}</h3>
//            <h3>Skills :{info.skills}</h3>
//        </>
//    )
//}
//
//const App = () => {
//    const person = {
//        name: "ahmet",
//        age: "15",
//        skills: "learning,driving",
//    };
//
//    return (
//        <>
//            <UserCard info={person} />
//        </>
//    );
//};
//



/////////////////////////////////////////
//const TodoItem = ({ info }) => {
//    return (
//        <div className="container mt-4">
//            <div className="row">
//                {info.map((tas, index) => (
//                    <div className="col-md-4 mb-4">
//                        <div className="card h-100 shadow border-0">
//                            <div className="card-body bg-light">
//                                <h2 className="card-title text-primary"><b>Task Name: </b>{tas.taskName}</h2>
//                                <h4 className="card-subtitle mb-2 text-success"><b>Status: </b>{tas.status}</h4>
//                            </div>
//                        </div>
//                    </div>
//                ))}
//            </div>
//        </div>
//    );
//};
//
//
//const App = () => {
//
//    const tasks = [
//        { taskName: "Reading a book", status: "completed" },
//        { taskName: "Play spor", status: "waiting" },
//        { taskName: "Learn the programming", status: "completed" },
//        { taskName: "Study", status: "waiting" },
//    ]
//
//    return (
//        <>
//            <TodoItem info={tasks} />
//        </>
//    );
//};

/////////////////////////////////////////
//const Note = ({ info }) => {
//    return (
//        <>
//            <h3>Title :{info.title}</h3>
//            <p>Content :{info.content}</p>
//            
//        </>
//    )
//}
//
//const App = () => {
//    const notes = {
//        title: "A simple project",
//        content: "this is my first project",
//    };
//
//    return (
//        <>
//            <Note info={notes} />
//        </>
//    );
//};
//
//
/////////////////////////////////////
//const BookDetails = ({ info }) => {
//    return (
//        <>
//            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
//                <img src={book} className="card-img-top" />
//                <div className="card-body text-center">
//                    <h5 className="card-title" /><b>Title:</b>{info.title}<h5 />
//                    <p className="card-text"><b>Author:</b>{info.author}</p>
//                    <p className="card-text"><b>Year:</b>{info.year}</p>
//                    <p className="card-text"><b>Genre:</b>{info.genre}</p>
//                    <button className="btn btn-primary mt-2">View Details</button>
//                </div>
//            </div>
//
//
//        </>
//    )
//}
//
//const App = () => {
//    const notes = {
//        title: " Rich dad poor dad",
//        author: " Robert Kiyosaki",
//        year: " 1997",
//        genre: " Personal Finance",
//    };
//
//    return (
//        <>
//            <BookDetails info={notes} />
//        </>
//    );
//};
/////////////////////////////////////
//const WeatherCard = ({ info }) => {
//    return (
//        <div className="container mt-4">
//            <div className="row">
//                {info.map((weath, index) => (
//                    <div key={index} className="col-md-4 mb-4">
//                        <div className="card h-100 shadow border-0">
//                            <div className="card-body bg-info text-white rounded">
//                                <h3 className="card-title"><b>Temperature:</b> {weath.temperature}°C</h3>
//                                <h4 className="card-text"><b>Weather:</b> {weath.weather}</h4>
//                                <h4 className="card-text"><b>City Name:</b> {weath.city}</h4>
//                            </div>
//                        </div>
//                    </div>
//                ))}
//            </div>
//        </div>
//    );
//};
//
//
//const App = () => {
//    const weatherstat = [
//        { temperature: "30", weather: "Sunny", city: "Adana" },
//        { temperature: "21", weather: "Cloudy", city: "Mersin" },
//        { temperature: "26", weather: "Cloudy", city: "Ankara" },
//        { temperature: "27", weather: "Sunny", city: "Istanbul" }
//    ];
//
//    return (
//        <>
//            <WeatherCard info={weatherstat} />
//        </>
//    );
//};
//
//
//


export default App;