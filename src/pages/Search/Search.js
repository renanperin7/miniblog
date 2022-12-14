import styles from "./Search.module.css"

import React from "react";

//hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/UseQuery'

//components
import PostDetail from '../../components/PostDetail'

import { Link } from 'react-router-dom'

const Search = ({post}) => {
    const query = useQuery() 
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.noposts}>
                    <p>Não foram encontrados resultados para sua busca...</p>
                    <Link to="/" className='btn btn-dark' >Voltar</Link>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post} />
            ))}
        </div>
    </div>
  )
}

export default Search