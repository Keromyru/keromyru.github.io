import React from "react";
import resumeData from "../data/resumeData.json";
import ConnectionBox from "../features/layout/connection-box";
import Header from "../features/layout/header";
import {v4 as uuidv4} from 'uuid';

const ResumeComp: React.FC = () => {
	resumeData.map((dataitem) => {
		console.log(dataitem)
		dataitem.tasks.map((one) => {
			console.log(one.resumeblurb);
		})
	});

	return (
		<div>
			<h1>Resume</h1>
			<p>Aurora's resume</p>
			{resumeData.map(
				(item, index) => {
					return (
						<div>
							<Header key={uuidv4()} {...item}/> 
							{item.tasks.map(
								(section, index) => {
									return <ConnectionBox key={uuidv4()} blurb={section.resumeblurb} skills={section.skills} />
								}
							)}
						</div>
					)
				}
			)}
		</div>
	)
}

export default ResumeComp;