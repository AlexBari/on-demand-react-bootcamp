import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    MainWrapper,
    PageNumbersButton,
    PageNumbersLi,
    PageNumbersUl,
    HellipLi
} from './paginationComponents';

const Pagination = (props) => {
    const pageNumberLimit = 5;
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const totalPages = props.totalPages;

    const onPrevClick = () => {
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev => prev - 1);
        props.pageChange(currentPage - 1);
    }

    const onNextClick = () => {
        if (currentPage + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageNumberLimit);
            setMinPageLimit(minPageLimit + pageNumberLimit);
        }
        setCurrentPage(prev => prev + 1);
        props.pageChange(currentPage + 1);
    }

    useEffect(() => {
        for (let i = 1; i <= totalPages; i++) {
            setPages((prev) => [...prev, i]);
        }
        return (() => {
            setPages([]);
        });
    }, [totalPages]);

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        props.pageChange(pageNumber);
    }

    return (
        <MainWrapper>
            <PageNumbersUl>
                {totalPages > 1 &&
                    <PageNumbersLi>
                        <PageNumbersButton
                            onClick={onPrevClick}
                            disabled={currentPage === pages[0]
                            }>
                            Prev
                        </PageNumbersButton>
                    </PageNumbersLi>
                }
                {
                    minPageLimit >= 1 && <HellipLi onClick={onPrevClick}>&hellip;</HellipLi>
                }
                {
                    pages.map(page => {
                        if (page <= maxPageLimit && page > minPageLimit) {
                            return (
                                <PageNumbersLi
                                    key={page}
                                    id={page}
                                    onClick={() => onPageChange(page)}
                                    className={currentPage === page ? 'active' : null}
                                    style={{ padding: '14px' }}
                                >
                                    {page}
                                </PageNumbersLi>
                            );
                        } else {
                            return null;
                        }
                    })
                }
                {
                    pages.length > maxPageLimit && <HellipLi onClick={onNextClick}>&hellip;</HellipLi>
                }
                {totalPages > 1 &&
                    <PageNumbersLi>
                        <PageNumbersButton
                            onClick={onNextClick}
                            disabled={currentPage === pages[pages.length - 1]}
                        >
                            Next
                        </PageNumbersButton>
                    </PageNumbersLi>
                }
            </PageNumbersUl>
        </MainWrapper>
    )
}

Pagination.propTypes = {
    pageChange: PropTypes.func,
    totalPages: PropTypes.number
};

export default Pagination;