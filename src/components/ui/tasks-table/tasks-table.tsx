import { useMemo } from 'react'
import {
  Column,
  HeaderGroup,
  TableInstance,
  TableState,
  useGlobalFilter,
  useSortBy,
  useTable,
} from 'react-table'

import { CaretDownFill } from '@/assets/icons/components/CaretDownFill'
import { CaretUpFill } from '@/assets/icons/components/CaretUpFill'
import { Button, Input } from '@/components'
import {
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
  TableHeadRow,
  TableWrapper,
} from '@/components/ui/table'

import s from './tasks-table.module.scss'

export type DataType = {
  assignee: string
  created: string
  progress: string
  projectID: string
  status: string
  task: string
}

// Мок-данные
const initialData: DataType[] = [
  {
    assignee: 'Alice',
    created: '2024-08-01',
    progress: '60%',
    projectID: '12345',
    status: 'In Progress',
    task: 'Design Homepage',
  },
  {
    assignee: 'Bob',
    created: '2024-08-03',
    progress: '100%',
    projectID: '12346',
    status: 'Completed',
    task: 'Develop API',
  },
  {
    assignee: 'Charlie',
    created: '2024-08-05',
    progress: '0%',
    projectID: '12347',
    status: 'Not Started',
    task: 'Write Documentation',
  },
  {
    assignee: 'Dave',
    created: '2024-08-07',
    progress: '40%',
    projectID: '12348',
    status: 'In Progress',
    task: 'Test Application',
  },
]

export const TasksTable = () => {
  const data = useMemo(() => initialData, [])
  const columns: Column<DataType>[] = useMemo(
    () => [
      { Header: 'Task', accessor: 'task' },
      { Header: 'ProjectID', accessor: 'projectID' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Progress', accessor: 'progress' },
      { Header: 'Assignee', accessor: 'assignee' },
      { Header: 'Created', accessor: 'created' },
    ],
    []
  )

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    setGlobalFilter,
    state,
    toggleSortBy,
  } = useTable<DataType>({ columns, data }, useGlobalFilter, useSortBy) as {
    setGlobalFilter: (filterValue: string | undefined) => void
    toggleSortBy: (id: string, desc?: boolean, isMulti?: boolean) => void
  } & TableInstance<DataType>

  const { globalFilter } = state as { globalFilter: string } & TableState<DataType>
  const isSortedDesc = (state as any).sortBy[0]?.id === 'created' && (state as any).sortBy[0]?.desc

  const handleSortByDate = () => {
    toggleSortBy('created', !isSortedDesc)
  }

  return (
    <div className={s.tasksTable}>
      <div className={s.filtersContainer}>
        <Input
          className={s.input}
          onChange={e => setGlobalFilter(e.currentTarget.value || undefined)}
          placeholder={'Search task'}
          type={'search'}
          value={globalFilter || ''}
        />
        <Button onClick={handleSortByDate} variant={'light'}>
          Sort by date {isSortedDesc ? <CaretUpFill /> : <CaretDownFill />}
        </Button>
      </div>
      <TableWrapper {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup: HeaderGroup<DataType>) => (
            <TableHeadRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map(column => (
                <TableHeadCell {...column.getHeaderProps()} key={column.id}>
                  {column.render('Header')}
                </TableHeadCell>
              ))}
            </TableHeadRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)

            return (
              <TableBodyRow {...row.getRowProps()} key={row.id}>
                {row.cells.map(cell => (
                  <TableBodyCell {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render('Cell')}
                  </TableBodyCell>
                ))}
              </TableBodyRow>
            )
          })}
        </TableBody>
      </TableWrapper>
    </div>
  )
}
