import * as yup from 'yup';

const schema = yup.object().shape(
    {
        title:
            yup.string()
            .required("Must provide movie title!"),
        
        favorite:
            yup.boolean(),
        
        genrePick1:
            yup.string()
            .required("Must provide at least 1 genre")

    }
);


export default schema;