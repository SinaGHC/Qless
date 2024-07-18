import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin page!</p>
      <Link to="/">Go back to login</Link>
    </div>
  );
}
