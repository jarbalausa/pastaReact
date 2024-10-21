import PastaList from "./pastas/PastaList";


function Main() {
    return(
        <main>
            <section className="home">
                <div className="container">
                    <h1>All Foods</h1>
                    <div className="home__row">
                        <PastaList />
                    </div>


                    
                </div>
            </section>
        </main>
    );
}

export default Main 