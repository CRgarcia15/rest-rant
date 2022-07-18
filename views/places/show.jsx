const React = require('react')
const Def = require('../default')

function show (data) {
// left off on part 4 rest-rant part 10
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h2>
                    <img className='showImage' src={data.place.pic} alt='show food'/>
                </h2>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <h2>Rating</h2>
                    <div>
                        <p>Not Rated</p>
                    </div>

                <h2>Comments</h2>
                    <div>
                        <p>No Comments Yet!</p>
                    </div>

                <div>
                    <h3>
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>
                        <form method="POST" action={`places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </h3>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

