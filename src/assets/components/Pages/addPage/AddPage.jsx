import { useState } from "react"

import { Button, FormGroup } from "react-bootstrap"
import { Form } from "react-bootstrap"

import { useFormik } from "formik";
import schema from "./schema/script";

import './style.css'

import cryptoRandomString from "crypto-random-string"
// add page is implemented using react bootstrap templates and using formik and yup to validate form

function AddPage({ allGenres, addMovie }) {
    const [rating, setRating] = useState(5.0); // I had problems making formik work with a slider so its in its own state

    const onSubmit = (values, actions) => {
        //onSubmit function to run when form is submitted it is passed into formkik and called from formik
        const newMovie = {
            "id": cryptoRandomString({ length: 5 }),
            "title": values.title,
            "genres":
                [values.genrePick1,
                values.genrePick2,
                values.genrePick3].filter((val) => val),
            "rating": rating,
            "favorite": values.favorite,
        }
        addMovie(newMovie)
        actions.resetForm();
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            title: '',
            favorite: false,
            genrePick1: '',
            genrePick2: '',
            genrePick3: '',
        },
        validationSchema: schema, //validation schema imported from a script in a schemas folder
        onSubmit,//handle submit funtion to be run when user clicks submit

    })

    function renderGenresOptions() {
        const options = [<option key='default' value=''>Pick Genre</option>];
        allGenres.forEach((genre) => {
            options.push(
                <option
                    disabled={values.genrePick1 === genre || values.genrePick2 === genre} //disables picking genres already previously clicked
                    key={genre}
                    value={genre}
                >{genre}</option>)
        })
        return options;
    }

    return (
        <div className="d-flex flex-column justify-content-center mt-5">
            <h2 className="d-flex justify-content-center ">Add A movie</h2>
            <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-2 bgColor">
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
                            disabled={values.genrePick2 === '' || values.genrePick1 === ''} >
                            {renderGenresOptions()}
                        </Form.Select>
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default AddPage