import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <ul>
                <li><Link to={'/LegalMentions'}>Mentions légales</Link>
                </li>
            </ul>
        </footer>
    )
}