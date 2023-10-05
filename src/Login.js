import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setid] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const login = (e) => {
        e.preventDefault();
            fetch("http://localhost:3031/users/" + id)
                .then((res) => res.json())
                
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        setError('Please Enter valid name');
                    } else {
                        if (resp.pwd === pwd) {
                            sessionStorage.setItem('name', id);
                            sessionStorage.setItem('userrole', resp.role);
                            navigate('/Home');
                        } else {
                            setError('Please Enter valid credentials');
                        }
                    }
                })
                .catch((err) => {
                    setError('Login Failed due to: ' + err.message);
                });
    }

    return (
        <div >
            <div className="m-5 p-4">
            <h1 className='mx-5 text-dark'><u>Log In</u></h1>
                <form onSubmit={login} className="container">
                    <div className="mt-3">
                                <label>Name</label>
                                <input value={id} onChange={e => setid(e.target.value)} className="form-control border border-dark rounded-pill" placeholder="Enter the Name" style={{width:'400px'}}/>
                        </div>
                        <div className="mt-3">
                                <label>Password</label>
                                <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} className="form-control border border-dark rounded-pill " placeholder="Enter The Password" style={{width:'400px'}}/>
                            {error && <div className="alert alert-danger">{error}</div>}
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-dark mx-3 mt-3 px-3">Login</button> 
                            <p className='mx-4 mt-1'>Don't have an account? <Link to={"/"}>Sign Up</Link></p>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Login;



