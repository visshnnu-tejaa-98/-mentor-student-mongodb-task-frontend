/*jshint esversion: 8 */

////////////////assign

// let seletStudent = document.getElementById('selectStudent');
let assignSubmit = document.getElementById('assign-submit');

const getStudentList = async () => {
	try {
		let seletStudent = document.getElementById('selectStudent');
		let apiResponse = await fetch('http://localhost:3000');
		let apiData = await apiResponse.json();
		apiData.forEach((student) => {
			let option = document.createElement('option');
			option.value = student._id;
			option.innerText = student.name;
			seletStudent.appendChild(option);
		});
	} catch (error) {
		console.log(error);
	}
};

getStudentList();

const getMentorList = async () => {
	try {
		let selectMentor = document.getElementById('selectMentor');
		let apiResponse = await fetch('http://localhost:3000/mentors');
		let apiData = await apiResponse.json();
		apiData.forEach((mentor) => {
			let option = document.createElement('option');
			option.value = mentor._id;
			option.innerText = mentor.name;
			selectMentor.appendChild(option);
		});
		console.log(apiData);
	} catch (error) {
		console.log(error);
	}
};
getMentorList();

assignSubmit.addEventListener('click', async () => {
	let seletStudent = document.getElementById('selectStudent');
	let selectMentor = document.getElementById('selectMentor');
	// console.log(seletStudent.value, selectMentor.value);

	let mentorResponse = await fetch('http://localhost:3000/mentors');
	let mentorData = await mentorResponse.json();

	let studResponse = await fetch('http://localhost:3000/');
	let studentData = await studResponse.json();
	let mentorId = mentorData.find((mentor) => mentor._id === selectMentor.value)._id;
	let studentId = studentData.find((student) => student._id === selectStudent.value)._id;
	// console.log(mentorId);
	// console.log(studentId);
	let data = {
		// _id: seletStudent.value,
		// name: seletStudent.name,
		mentor: mentorId,
	};
	let studentResponse = await fetch('http://localhost:3000/update/' + studentId, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	// console.log(data);

	console.log('assigned');

	// let studRes = await fetch(`http://localhost:3000/`);
	////////////////////////////////////////////////////////////

	console.log(seletStudent.value, selectMentor.value);

	let stRes = await fetch(`http://localhost:3000/`);
	let stData = await stRes.json();
	let requireStudent = stData.find((student) => student._id === selectStudent.value).name;
	console.log(requireStudent);

	let studentsArray = {
		studentArray: requireStudent,
	};

	let mentorRes = fetch(`http://localhost:3000/mentor/${selectMentor.value}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(studentsArray),
	});
	console.log('student Added');

	// let studentResponse1 = await fetch('http://localhost:3000/' + studentId, {
	// 	method: 'DELETE',
	// });
});
