/*jshint esversion: 8 */
const getData = async () => {
	let apiResponse = await fetch(`http://localhost:3000/mentors`);
	let apiData = await apiResponse.json();
	console.log(apiData);

	apiData.forEach((mentor) => {
		let tbody = document.getElementById('tbody');
		let tr = document.createElement('tr');
		tr.innerHTML = `<tr>
						
						<td>${mentor._id}</td>
						<td>${mentor.name}</td>
						<td>${mentor.sudents}</td>
					</tr>`;
		tbody.appendChild(tr);
	});
};

getData();
