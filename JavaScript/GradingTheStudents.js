function gradingStudents(grades) {
    // Write your code here
    const newGrades = grades.map(grade => {
        if (grade >= 38 && grade % 5 >= 3) {
            return (grade + (5 - grade % 5))
        } else if (grade < 38 || grade %5 <3) {
            return (grade);
        }
    })
    return newGrades;
}