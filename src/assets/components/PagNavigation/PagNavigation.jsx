import Pagination from 'react-bootstrap/Pagination';

function PagNavigation({ total, count, active, changePag }) {
    let pagCount = Math.ceil(total / count);
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
    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )

    return (paginationBasic)
}

export default PagNavigation



