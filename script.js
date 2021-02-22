/*jshint esversion: 8 */

////////////////add student
let addStudent = document.getElementById('student-submit');
let student = document.getElementById('studentName');
addStudent.addEventListener('click', async () => {
	let data = {
		studentName: student.value,
	};

	try {
		let apiResponse = await fetch('http://localhost:3000', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
	student.value = '';
});

//////////////////add mentor
let addMentor = document.getElementById('menor-sumbit');
let mentor = document.getElementById('mentorName');
addMentor.addEventListener('click', async () => {
	let data = {
		mentorName: mentor.value,
	};

	try {
		let apiResponse = await fetch('http://localhost:3000/mentors', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
		console.log(error);
	}
	mentor.value = '';
});
