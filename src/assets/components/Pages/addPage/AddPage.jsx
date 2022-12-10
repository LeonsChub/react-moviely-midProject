import { useState } from "react"
import { Button, FormGroup } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { useFormik } from "formik";



function AddPage({ movies }) {
    const [rating, setRating] = useState(5.0);
    const { values, handleBlur, handleChange } = useFormik({
        initialValues: {
            title: '',
            favorite: false,
            genrePick1: 'default',
            genrePick2: 'default',
            genrePick3: 'default',
        },
    })

    function renderGenresOptions() {
        let uniqueGenres = [];
        movies.forEach(movie => {
            movie.genres.map((g) => !uniqueGenres.includes(g) ? uniqueGenres.push(g) : null);
        });

        const options = [<option key='default' value='default'>Pick Genre</option>];
        uniqueGenres.forEach((genre) => {
            options.push(<option key={genre} value={genre}>{genre}</option>)
        })
        return options;
    }

    return (
        <Form className="w-50 mx-auto mt-4">

            <h2 className="d-flex justify-content-center">Add A movie</h2>

            <Form.Group className="mb-3" controlId="addMovieTitle">
                <Form.Label>Movie Title*</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Range {rating % 1 === 0 ? `${rating}.0` : rating}/10</Form.Label>
                <Form.Range
                    value={rating * 10}
                    name="rating"
                    onChange={(e) => {
                        setRating((e.target.value) / 10)
                    }} />
            </Form.Group>

            <Form.Group>
                <Form.Check
                    type='checkbox'
                    name='favorite'
                    id={`favoriteCheckbox`}
                    label={`Favorite?`}
                    value={values.favorite}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="my-3 d-flex">
                <Form.Select
                    name='genrePick1'
                    className='me-1'
                    value={values.genrePick1}
                    onChange={handleChange}>
                    {renderGenresOptions()}
                </Form.Select>
                <Form.Select
                    name='genrePick2'
                    className='me-1'
                    value={values.genrePick2}
                    onChange={handleChange}
                    disabled={values.genrePick1 === 'default'}>
                    {renderGenresOptions()}
                </Form.Select>
                <Form.Select
                    name='genrePick3'
                    value={values.genrePick3}
                    onChange={handleChange}
                    disabled={values.genrePick2 === 'default'} >
                    {renderGenresOptions()}
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}

export default AddPage