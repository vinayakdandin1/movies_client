import React, { Component } from 'react'

 class Landing extends Component {
    render() {

        const {movies} = this.props
        console.log(movies)

        return (
            <div>
                <h1>Hello world</h1>
                {

                    movies.map((singleMovie) => {
                        return(<div>
                            <h3> {singleMovie.original_title} </h3>
                            <p>
                                {singleMovie.overview}
                            </p>
                        </div>)
                    })


                }
            </div>
        )
    }
}

export default Landing;