// Custom components
import Footer from "../Sections/Footer"
import Memory from "../Sections/Memory"
import NavBar from "../Sections/NavBar"

const Feed = () => {
    return (
        <>
            <div className="feed">
                <NavBar />
                <div className="memories-wall">
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                    <Memory />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Feed