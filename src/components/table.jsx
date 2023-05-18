import React, { useState } from 'react'
import { useTable, usePagination, useFilters, useGlobalFilter, useSortBy } from 'react-table';

const Table = ({data, columns}) => {
    
      const defaultColumn = React.useMemo(
        () => ({
          // Define default filter UI
          Filter: ColumnFilter,
        }),
        []
      );
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        pageCount,
        setPageSize,
        gotoPage,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
      } = useTable(
        {
          columns,
          data,
          defaultColumn,
          initialState: { pageIndex: 0, pageSize: 10 }, // Initial pagination state
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
      );
    
      const { pageIndex, pageSize, globalFilter } = state;
      const [pageInput, setPageInput] = useState('');
    
      const handleFilterChange = (e) => {
        setGlobalFilter(e.target.value || undefined);
      };

      const handlePageInputChange = (e) => {
        setPageInput(e.target.value);
      };
    
      const handlePageInputKeyPress = (e) => {
        if (e.key === 'Enter') {
          const pageNumber = parseInt(pageInput, 10) - 1;
          gotoPage(pageNumber);
        }
      };
    
      return (
        <div style={{margin:'20px'}}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={globalFilter || ''}
              onChange={handleFilterChange}
              placeholder="Search"
              
            />
          </div>
    
          <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%' }} className='table'>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                    scope="col"
                      style={{ border: '1px solid #0d6efd', padding: '8px' }}
                    >
                     <span {...column.getHeaderProps(column.getSortByToggleProps())} style={{color:'#0d6efd'}}>{column.render('Header')}</span> 
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                      <div className="filter">{column.canFilter ? column.render('Filter') : null}</div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        style={{ border: '1px solid #0d6efd', padding: '8px' }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
    
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button  onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        

            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
               
              </strong>{' '}
            </span>
            <button  onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
            <input
              type="text"
              style={{ width: '40px', textAlign: 'center' }}
              value={pageInput}
              onChange={handlePageInputChange}
              onKeyPress={handlePageInputKeyPress}
            />
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    }
    
    // Custom filter component
    function ColumnFilter({ column }) {
      const { filterValue, setFilter } = column;
    
      return (
        <input
          type="text"
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value || undefined)}
          placeholder="Filter"
        />
      );
    }
    
export default Table