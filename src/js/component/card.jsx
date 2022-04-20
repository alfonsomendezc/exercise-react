import React from "react";

export const Card = () => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://cdn-wp.thesportsrush.com/2020/11/ab19bc9e-valorant-1.jpg"
				alt="Valorant Agents"
			/>
			<div className="card-body">
				<h5 className="card-title">Choose Your Agent</h5>
				<p className="card-text">
					There are <strong>18</strong> unique agents from places from
					all over the world with <strong>special abilities</strong>{" "}
					and <strong>different playstyles</strong>. Choose your
					favorite one!
				</p>
			</div>
		</div>
	);
};
