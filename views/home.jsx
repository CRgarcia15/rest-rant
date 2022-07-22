const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src='/images/cooking.jpg' alt='Burger with a knife in it' />
                    <div>
                        Photo by <a href='AUTHOR_LINK'>Mae Mu</a> on<a href='https://unsplash.com/photos/rgRbqFweGF0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Unplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home

//look at the end of rest rant part 4 