import React, {useState, useMemo} from "react";
import data from "../data/mock/mock-pagination-data.json"
import Pagniation from "./pagniation/PagniationComp";

let entriesPerPage = 10;

export default function TableData(){

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * entriesPerPage;
    const lastPageIndex = firstPageIndex + entriesPerPage;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>FIRST NAME</th>
						<th>LAST NAME</th>
						<th>EMAIL</th>
						<th>PHONE</th>
					</tr>
				</thead>
				<tbody>
					{currentTableData.map(item => {
						return (
							<tr>
								<td>{item.id}</td>
								<td>{item.first_name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagniation
				classame="pagination-bar"
				currentPage={currentPage}
				totalEntries={data.length}
				entriesPerPage={entriesPerPage}
				onPageChange={page => setCurrentPage(page)}
			/>
		</>
	);
}