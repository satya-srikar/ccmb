import React from 'react';

import './pagination.styles.scss';

class PaginationComponent extends React.Component {
    onFirstPageClick = () => {
        if(this.props.page > 1)
            this.props.onPageChange(1);
    }
    onPrevPageClick = () => {
        if(this.props.page > 1)
            this.props.onPageChange(this.props.page - 1);
    }

    onNextPageClick = () => {
        const { page, itemsPerPage, dataCount, onPageChange } = this.props;
        if((dataCount % itemsPerPage === 0 && page < (dataCount / itemsPerPage)) || (page < ((dataCount / itemsPerPage) + 1)))
            onPageChange(page + 1);
    }
    onLastPageClick = () => {
        const { page, itemsPerPage, dataCount, onPageChange } = this.props;
        if((dataCount % itemsPerPage === 0 && page < (dataCount / itemsPerPage)) || (page < ((dataCount / itemsPerPage) + 1)))
            onPageChange(dataCount % itemsPerPage === 0 ? dataCount / itemsPerPage : ((dataCount / itemsPerPage) + 1));
    }
    
    render() {
        const { page, itemsPerPage, dataCount } = this.props;
        return(
            <div className="pagination-component">
                <div onClick={this.onFirstPageClick} className={`first-page ${page === 1 ? 'disabled' : ''}`}>{'<<'}</div>
                <div onClick={this.onPrevPageClick} className={`prev-page ${page === 1 ? 'disabled' : ''}`}>{'<'}</div>
                <div onClick={this.onNextPageClick} className={`next-page ${dataCount % itemsPerPage === 0 ? page === (dataCount / itemsPerPage) ? 'disabled' : '' : page === (dataCount / itemsPerPage) + 1 ? 'disabled' : ''}`}>{'>'}</div>
                <div onClick={this.onLastPageClick} className={`last-page ${dataCount % itemsPerPage === 0 ? page === (dataCount / itemsPerPage) ? 'disabled' : '' : page === (dataCount / itemsPerPage) + 1 ? 'disabled' : ''}`}>{'>>'}</div>
            </div>
        )
    }
}

export default PaginationComponent;
