import { useState } from "react"
import { Button, FormGroup } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { useFormik } from "formik";
import schema from "./schema/script";
import './style.css'

function AddPage({ movies }) {
    const [rating, setRating] = useState(5.0);

    const onSubmit = (values, actions) => {
        console.log({ ...values, rating });
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: '',
            favorite: false,
            genrePick1: '',
            genrePick2: '',
            genrePick3: '',
        },
        validationSchema: schema,
        onSubmit,

    })

    function renderGenresOptions() {
        let uniqueGenres = [];
        movies.forEach(movie => {
            movie.genres.map((g) => !uniqueGenres.includes(g) ? uniqueGenres.push(g) : null);
        });

        const options = [<option key='default' value=''>Pick Genre</option>];
        uniqueGenres.forEach((genre) => {
            options.push(<option key={genre} value={genre}>{genre}</option>)
        })
        return options;
    }

    return (
        <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-4">

            <h2 className="d-flex justify-content-center">Add A movie</h2>

            <Form.Group className="mb-3" controlId="addMovieTitle">
                <Form.Label>Movie Title*</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.title && touched.title ? 'inputError' : ''} />
                <span className="error">{errors.title}</span>
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

            <Form.Group className="my-3 d-flex selectGroup">
                <div>
                    <Form.Select
                        name='genrePick1'
                        className={`${errors.genrePick1 && touched.genrePick1 ? 'inputError' : ''} me-1`}
                        value={values.genrePick1}
                        onBlur={handleBlur}
                        onChange={handleChange}>
                        {renderGenresOptions()}
                    </Form.Select>

                    <span className="error">{errors.genrePick1}</span>
                </div>
                <div>
                    <Form.Select
                        name='genrePick2'
                        className='me-1'
                        value={values.genrePick2}
                        onChange={handleChange}
                        disabled={values.genrePick1 === ''}>
                        {renderGenresOptions()}
                    </Form.Select>
                </div>
                <div>
                    <Form.Select
                        name='genrePick3'
                        value={values.genrePick3}
                        onChange={handleChange}
                        disabled={values.genrePick2 === ''} >
                        {renderGenresOptions()}
                    </Form.Select>
                </div>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    )
}

export default AddPage