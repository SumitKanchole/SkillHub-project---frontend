import './Connect.css'; 
import Header from '../Header/header';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

const connections = [
  {
    name: 'Rahul Yadav',
    profile: 'Student',
    learn: 'C++',
    teach: 'Javascript',
    status: 'connect',
    image: '/assets/Boy-1.jpg', 
  },
  {
    name: 'Rahul Yadav',
    profile: 'Student',
    learn: 'C++',
    teach: 'Javascript',
    status: 'pending',
    image: '/assets/Boy-1.jpg',
  },
  {
    name: 'Rahul Yadav',
    profile: 'Student',
    learn: 'C++',
    teach: 'Javascript',
    status: 'chat',
    image: '/assets/Boy-1.jpg',
  },
];

function ConnectCard({ user }) {
  let btn;
  if (user.status === 'connect') {
    btn = <button className="btn btn-success w-100 rounded-pill">Connect</button>;
  } else if (user.status === 'pending') {
    btn = <button className="btn btn-secondary w-100 rounded-pill" disabled>Pending</button>;
  } else if (user.status === 'chat') {
    btn = <Link to="chatPage" className="btn btn-primary w-100 rounded-pill">Talk/Chat</Link>;
  }

    return <>
      
    <div className="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
      <div className="card p-3 shadow rounded-4 text-center" style={{ width: '100%', maxWidth: '300px' }}>
        <img
          src={user.image}
          alt="User"
          className="rounded-circle mx-auto mb-3"
          style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid green' }}
        />
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Profile:</strong> {user.profile}</p>
        <p><strong>Learn:</strong> {user.learn}</p>
        <p><strong>Teach:</strong> {user.teach}</p>
        {btn}
      </div>
    </div>
  </>
  
}

function ConnectPage() {
    return <>
    <Header/>  
    <div className="container py-5">
      <div className="row">
        {connections.map((user, index) => (
          <ConnectCard key={index} user={user} />
        ))}
      </div>
        </div>
        <Footer/>
  </>
  
}

export default ConnectPage;
