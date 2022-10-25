import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate, person }) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <>

            <nav>
                <ul style={{ display: "flex", justifyContent: "center", }}
                    className={person === "" ? "d-none" : "pagination"}>
                    {pageNumbers.map(number => (
                        <li key={number} className={ "page-item"}>
                            <a href='!#' onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </a>

                        </li>
                    )

                    )}

                </ul>

            </nav>

        </>
    )

}
