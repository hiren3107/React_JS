
function Productlist({data}) {
    return (
        <div id='box'>
        {
            data.map((Element) => {
                return <div key={Element.id} id="card">
                    <div>
                        <img src={Element.image} alt={Element.title} />
                    </div>
                    <div id="text">
                        <p id="title">{Element.title} - ₹ {Element.price}</p>
                        <p id="description">{Element.description}</p>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default Productlist