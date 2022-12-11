import { useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
//pagination template from bootstrap 

function PagNavigation({ total, count, active, changePag, filteredList }) {
    //pagination is rendered as a sepreate component due its relative complexity
    let pagCount = filteredList.length === 0 ? Math.ceil(total / count) : Math.ceil(filteredList.length / count);
    let items = [];

    useEffect(() => {
        if ((active - 1) * count >= total || (active - 1) * count >= filteredList.length) {
            changePag(1);
            //ensures that whenever the value which is in charge of movies displayed at one time changes
            //that the active pag will be 1 
        }

    }, [count])


    for (let number = 1; number <= pagCount; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => changePag(number)}>
                {number}
            </Pagination.Item>,
        );
    }


    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )

    return (paginationBasic)
}

export default PagNavigation



