import Pagination from 'react-bootstrap/Pagination';

function PagNavigation({ total, count, active, changePag, filteredList }) {

    let pagCount = filteredList.length === 0 ? Math.ceil(total / count) : Math.ceil(filteredList.length / count);
    let items = [];

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

    if ((active - 1) * count > total) {
        changePag(1);
    }

    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )

    return (paginationBasic)
}

export default PagNavigation



