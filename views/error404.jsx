const React = require('react')
const Def = require('./default')


function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src='/images/fire-place.jpg' alt='fire-place' />
                    <div>
                        Photo by <a href='AUTHOR_LINK'>Triza van Dijk</a> on<a href='https://unsplash.com/photos/hbwdmqcmP6k?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Unplash</a>
                    </div>
                </div>
          </main>
      </Def>
    )
  }

module.exports = error404