import * as yup from 'yup';

const schema = yup.object().shape(
    {
        title:yup.string().required("Must provide movie title!"),
        favorite:yup.boolean(),
        genre1:yup.string().required("Must provide at least 1 genre")

    }
);