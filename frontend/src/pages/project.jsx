import { useNavigate } from 'react-router-dom'

function Projects() {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Projects Page</h1>

            <h3>Project Management System</h3>

            <button onClick={() => navigate('/task')}>
                View Tasks
            </button>

        </div>
    )
}

export default Projects