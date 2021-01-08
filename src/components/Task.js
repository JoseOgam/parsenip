const Task = (props) => {
    return (
        <div className="task">
            <div className="task-header">
                {props.task.title}
            </div>
            <hr />
            <div className="task-body">
                {props.task.description}
            </div>

        </div>
    )
}
export default Task