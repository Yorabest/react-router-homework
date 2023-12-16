import { useLoaderData } from "react-router-dom"

export const Reviews = () => {
    const reviews = useLoaderData()
    return <ul>
        {reviews.map((review) => {
            return <li key={review.id}>
                <p>{review.author}</p>
                {/* <p>{JSON.parse(review.content)}</p> */}
            </li>
        })}
    </ul>
    
}