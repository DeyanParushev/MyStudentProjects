let firebaseUrl = `https://testapp-1045f.firebaseio.com/Students.json`; // put your firebase link here

export async function loadStudents(){
    let response = await fetch(firebaseUrl);
    let parsedResponse = await response.json();
    return parsedResponse; 
};

export async function createStudent(student){
    let response = await fetch(firebaseUrl, {
        method: "POST",
        body: JSON.stringify(student),
    });
    let parsedResponse = await response.json();
    return parsedResponse; 
};

export async function deleteStudent(id){
    let url = `https://testapp-1045f.firebaseio.com/Students/${id}.json`
    let response = await fetch(url, {
        method: "DELETE",
    });
    let parsedResponse = await response.json();
    return parsedResponse; 
};