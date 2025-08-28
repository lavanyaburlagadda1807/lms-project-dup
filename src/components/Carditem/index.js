import './index.css'
const CardItem = ({ courseDetails }) => {
    const { category, title, description } = courseDetails

    return (
        <div className="card-container">
            <h1>Course Id: {category}</h1>
            <p>Name: {title}</p>
            <p>Details: {description}</p>
        </div>
    )
}

export default CardItem