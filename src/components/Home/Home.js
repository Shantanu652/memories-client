import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Grow, Container, Grid,  } from '@material-ui/core';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';



const Home = () => {
    const [ currentId, setCurrentId ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
    <Grow in>
        <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
    )
}

export default Home