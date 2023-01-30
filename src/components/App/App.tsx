import './_App.scss'
import Header from "../Header/Header";
import KanbanBoard from "../KanbanBoard/KanbanBoard";

const App = () => {
    return (
        <>
            <Header/>
            <div style={{marginLeft: '125px'}}>
                <KanbanBoard/>
            </div>
        </>
    )
}

export default App;