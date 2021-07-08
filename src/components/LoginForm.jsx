import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const authObject = {'Project-ID': "25e09ba9-4b75-47b9-8b98-36981969a196", 'User-Name': username, 'User-Secret': password};

        try {
            //username/password => chatengine -> give messages
            await axios.get('http://api.chatengine.io/chats', {headers: authObject});

        }catch (error) {
            // error -> try with new username..
        }
        
        //works out -> logged in
        

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}