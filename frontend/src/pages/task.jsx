import { useNavigate } from 'react-router-dom'

function Tasks() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Tasks Page</h1>

            <ul>
                <li>Complete Login Page</li>
                <li>Complete Project Page</li>
                <li>Learn React Router</li>
            </ul>

            <button onClick={() => navigate('/project')}>
                Back to Projects
            </button>

        </div>
    )
}

export default Tasks