import Counter from "../counter/Counter";

function PastaCard({pasta}) {
   
    return (
        <div className="card">
            <img src={pasta.imageUrl} className="card-img" alt="Card"/>
            <div className="card-body">
                <h3 className="card-title">{pasta.name}</h3>
                <h3 className="card-price">{pasta.price}&#8376</h3>
                {pasta.inStock ?<span className="success">Yes,we have</span> : <span className="danger">No, we haven't</span>}
                
                
                <Counter/>
            </div>
       </div>
    );
}

export default PastaCard;
