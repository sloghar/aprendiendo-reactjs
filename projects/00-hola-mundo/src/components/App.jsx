import { TwitterFollowCard } from './TwitterFollowCard'
import './../assets/App.css'

const users = [
    {
        name: "Carlos Alvarez",
        username: "sloghar21",
        isFollow: true
    },
    {
        name: "Jose Alvarez",
        username: "wersdf",
        isFollow: true
    },
    {
        name: "Maria Martinez",
        username: "sdfdeeded",
        isFollow: true
    },
    {
        name: "Jose Gimenez",
        username: "swegsdf",
        isFollow: false
    },
]

const App = () => {
    return (
        <section className='App'>
            {
                users.map(({name, username, isFollow}) => (
                    <TwitterFollowCard key={username} isFollow username={username} name={name} />
                ))
            }
        </section>
    )
}

export default App