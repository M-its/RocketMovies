import { BiSolidStar, BiStar } from "react-icons/bi"

export function renderStars(rating) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<BiSolidStar key={i} />)
        } else {
            stars.push(<BiStar key={i} />)
        }
    }
    return stars
}
