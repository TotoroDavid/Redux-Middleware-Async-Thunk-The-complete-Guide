import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions'

const Posts = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
        </div>
    )
}

export default Posts
