
//state variables
var honorsScale = [0.0, 0.7, 1.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.3, 4.7, 5.0, 5.3];
var generalScale = [0.0, 0.7, 1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.0];
var generalsScale = [0.0, 0.7, 1.0, 1.3, 1.7, 2.0, 2.3, 2.7, 3.0, 3.3, 3.7, 4.0, 4.0];
var grades = [];
var honorsCheck = [];
var voidCheck = [];
var scaleArray = [];
var averagesArray = [];
var weightedScoreTotal = 0;
var unweightedScoreTotal = 0;
var creditCount = 0;
var weightedGPA = 0;
var unweightedGPA = 0;

var markingPeriod = 0;

//kicks off the whole program and calls each set of functions in a sequential order to determine the final result
function main(){

	//depending on the marking period, it first fills the grades array, finds the average of grades for each class, determines the scale that grade has on the array of honors/general scales. finally, fills the arrays for checkboxes of honors and void
	if(markingPeriod == 1){
		grades = gradesMP1();
		scaleArray = gradeChecker(grades);
		honorsCheck = honorsCheckArrayFillerMP1();
		voidCheck = voidCheckArrayFillerMP1(); 
	}
	if(markingPeriod == 2){
		grades = gradesMP2();
		averagesArray = averageScaler(grades, markingPeriod);
        console.log(averagesArray);
		scaleArray = gradeChecker(averagesArray);
		honorsCheck = honorsCheckArrayFillerMP2();
		voidCheck = voidCheckArrayFillerMP2();
	}
	if(markingPeriod == 3){
		grades = gradesMP3();
		averagesArray = averageScaler(grades, markingPeriod);
		scaleArray = gradeChecker(averagesArray);
		honorsCheck = honorsCheckArrayFillerMP3();
		voidCheck = voidCheckArrayFillerMP3();
	}
	if(markingPeriod == 4){
		grades = gradesMP4();
		averagesArray = averageScaler(grades, markingPeriod);
		scaleArray = gradeChecker(averagesArray);
		honorsCheck = honorsCheckArrayFillerMP4();
		voidCheck = voidCheckArrayFillerMP4();
	}
    //console.log(averagesArray);
	
	//variables which represent each class in the scale array
	var gymHealthScale = scaleArray[2];
	var languageScale = scaleArray[5];
	var electiveScale = scaleArray[6];
	var academyScale = scaleArray[7];
	var splitAcademyScale = scaleArray[8];

	//sequence of functions which calculate the wieghted scpre
	weightedScoreTotal = honorsCoreClasses(scaleArray, honorsCheck, voidCheck);
	weightedScoreTotal += gymHealth(gymHealthScale);
	weightedScoreTotal += weightedAcademy(academyScale, splitAcademyScale, honorsCheck, voidCheck);
	weightedScoreTotal += weightedLanguage(languageScale, honorsCheck, voidCheck);
	weightedScoreTotal += weightedElective(electiveScale, honorsCheck, voidCheck);

	//sequence of functions which calculate the unwieghted scpre
	unweightedScoreTotal = coreClasses(scaleArray, voidCheck);
	unweightedScoreTotal += gymHealth(gymHealthScale);
	unweightedScoreTotal += academy(academyScale, splitAcademyScale, voidCheck);
	unweightedScoreTotal += language(languageScale, voidCheck);
	unweightedScoreTotal += elective(electiveScale, voidCheck);

	//counts the credits, and runs the functions which calculate each gpa type
	creditCount = creditCounter(voidCheck);
	weightedGPA = weightedGpaCalc(weightedScoreTotal, creditCount);
	unweightedGPA = unweightedGpaCalc(unweightedScoreTotal, creditCount);

	//sets the value of the message which prints out onto the screen of the user
	document.getElementById("message").innerHTML = "Weighted GPA: " + Math.round(weightedGPA * 100)/100 + "\nUnweighted GPA: " + Math.round(unweightedGPA * 100)/100;
}



//set of four functions initiate the markingPeriod varaible. each function is run by each specific html file
function setMP1 () {
    markingPeriod = 1;
}

function setMP2 () {
    markingPeriod = 2;
}

function setMP3 () {
    markingPeriod = 3;
}

function setMP4 () {
    markingPeriod = 4;
}

//set of four functions which take the input for the grades from the textboxes in each html file
function gradesMP1(){
	var grades = [];

	//english
	grades[0] = document.mp1.mpone1.value;
	//math
	grades[1] = document.mp1.mpone2.value;
	//gym/health
	grades[2] = document.mp1.mpone3.value;
	//science
	grades[3] = document.mp1.mpone4.value;
	//history
	grades[4] = document.mp1.mpone5.value;
	//language
	grades[5] = document.mp1.mpone6.value;
	//elective
	grades[6] = document.mp1.mpone7.value;
	//academy
	grades[7] = document.mp1.mpone8.value
	//academy split
	grades[8] = document.mp1.mpone9.value

	return grades;
}

function gradesMP2(){
	var grades = [];

	//english
	grades[0] = document.mp2.mptwo1.value;
	grades[1] = document.mp2.mptwo2.value;
	//math
	grades[2] = document.mp2.mptwo3.value;
	grades[3] = document.mp2.mptwo4.value;
	//gym/health
	grades[4] = document.mp2.mptwo5.value;
	grades[5] = document.mp2.mptwo6.value;
	//science
	grades[6] = document.mp2.mptwo7.value;
	grades[7] = document.mp2.mptwo8.value;
	//history
	grades[8] = document.mp2.mptwo9.value;
	grades[9] = document.mp2.mptwo10.value;
	//language
	grades[10] = document.mp2.mptwo11.value;
	grades[11] = document.mp2.mptwo12.value;
	//elective
	grades[12] = document.mp2.mptwo13.value;
	grades[13] = document.mp2.mptwo14.value;
	//academy
	grades[14] = document.mp2.mptwo15.value;
	grades[15] = document.mp2.mptwo16.value;
	//academy split
	grades[16] = document.mp2.mptwo17.value;
	grades[17] = document.mp2.mptwo18.value;

	return grades;
}

function gradesMP3(){
	var grades = [];

	//english
	grades[0] = document.mp3.mpthree1.value;
	grades[1] = document.mp3.mpthree2.value;
	grades[2] = document.mp3.mpthree3.value;
	//math
	grades[3] = document.mp3.mpthree4.value;
	grades[4] = document.mp3.mpthree5.value;
	grades[5] = document.mp3.mpthree6.value;
	//gym/health
	grades[6] = document.mp3.mpthree7.value;
	grades[7] = document.mp3.mpthree8.value;
	grades[8] = document.mp3.mpthree9.value;
	//science
	grades[9] = document.mp3.mpthree10.value;
	grades[10] = document.mp3.mpthree11.value;
	grades[11] = document.mp3.mpthree12.value;
	//history
	grades[12] = document.mp3.mpthree13.value;
	grades[13] = document.mp3.mpthree14.value;
	grades[14] = document.mp3.mpthree15.value;
	//language
	grades[15] = document.mp3.mpthree16.value;
	grades[16] = document.mp3.mpthree17.value;
	grades[17] = document.mp3.mpthree18.value;
	//elective
	grades[18] = document.mp3.mpthree19.value;
	grades[19] = document.mp3.mpthree20.value;
	grades[20] = document.mp3.mpthree21.value;
	//academy
	grades[21] = document.mp3.mpthree22.value;
	grades[22] = document.mp3.mpthree23.value;
	grades[23] = document.mp3.mpthree24.value;
	//academy split
	grades[24] = document.mp3.mpthree25.value;
	grades[25] = document.mp3.mpthree26.value;
	grades[26] = document.mp3.mpthree27.value;

	return grades;
}

function gradesMP4(){
	var grades = [];

	//english
	grades[0] = document.mp4.mpfour1.value;
	grades[1] = document.mp4.mpfour2.value;
	grades[2] = document.mp4.mpfour3.value;
	grades[3] = document.mp4.mpfour4.value;
	//math
	grades[4] = document.mp4.mpfour5.value;
	grades[5] = document.mp4.mpfour6.value;
	grades[6] = document.mp4.mpfour7.value;
	grades[7] = document.mp4.mpfour8.value;
	//gym/health
	grades[8] = document.mp4.mpfour9.value;
	grades[9] = document.mp4.mpfour10.value;
	grades[10] = document.mp4.mpfour11.value;
	grades[11] = document.mp4.mpfour12.value;
	//science
	grades[12] = document.mp4.mpfour13.value;
	grades[13] = document.mp4.mpfour14.value;
	grades[14] = document.mp4.mpfour15.value;
	grades[15] = document.mp4.mpfour16.value;
	//history
	grades[16] = document.mp4.mpfour17.value;
	grades[17] = document.mp4.mpfour18.value;
	grades[18] = document.mp4.mpfour19.value;
	grades[19] = document.mp4.mpfour20.value;
	//language
	grades[20] = document.mp4.mpfour21.value;
	grades[21] = document.mp4.mpfour22.value;
	grades[22] = document.mp4.mpfour23.value;
	grades[23] = document.mp4.mpfour24.value;
	//elective
	grades[24] = document.mp4.mpfour25.value;
	grades[25] = document.mp4.mpfour26.value;
	grades[26] = document.mp4.mpfour27.value;
	grades[27] = document.mp4.mpfour28.value;
	//academy
	grades[28] = document.mp4.mpfour29.value;
	grades[29] = document.mp4.mpfour30.value;
	grades[30] = document.mp4.mpfour31.value;
	grades[31] = document.mp4.mpfour32.value;
	//academy split
	grades[32] = document.mp4.mpfour33.value;
	grades[33] = document.mp4.mpfour34.value;
	grades[34] = document.mp4.mpfour35.value;
	grades[35] = document.mp4.mpfour36.value;

	return grades;
}

//set of four functions which determine if the honors checkmark is checked or not, and sets the array value to true or false
function honorsCheckArrayFillerMP1(){
	honorsCheck = [];

	//english
    if (document.mp1.honors1.checked) {
	    honorsCheck[0] = true;
    }
    else {
        honorsCheck[0] = false;
    }
	//math
    if (document.mp1.honors2.checked) {
	    honorsCheck[1] = true;
	}
    else {
        honorsCheck[1] = false;
    }
	//gym/health
    if (document.mp1.honors3.checked) {
	    honorsCheck[2] = true;
    }
    else {
        honorsCheck[2] = false;
    }
	//science
    if (document.mp1.honors4.checked) {
	    honorsCheck[3] = true;
    }
    else {
        honorsCheck[3] = false;
    }
	//history
    if (document.mp1.honors5.checked) {
	    honorsCheck[4] = true;
    }
    else {
        honorsCheck[4] = false;
    }
	//language
    if (document.mp1.honors6.checked) {
	    honorsCheck[5] = true;
    }
    else {
        honorsCheck[5] = false;
    }
	//elective
    if (document.mp1.honors7.checked) {
	    honorsCheck[6] = true;
    }
    else {
        honorsCheck[6] = false;
    }
	//academy
    if (document.mp1.honors8.checked) {
	    honorsCheck[7] = true;
    }
    else {
        honorsCheck[7] = false;
    }
	//academy split
	if (document.mp1.honors9.checked) {
	    honorsCheck[8] = true;
    }
    else {
        honorsCheck[8] = false;
    }

	return honorsCheck;
}

function honorsCheckArrayFillerMP2(){
	honorsCheck = [];

	//english
    if (document.mp2.honors1.checked) {
	    honorsCheck[0] = true;
    }
    else {
        honorsCheck[0] = false;
    }
	//math
    if (document.mp2.honors2.checked) {
	    honorsCheck[1] = true;
	}
    else {
        honorsCheck[1] = false;
    }
	//gym/health
    if (document.mp2.honors3.checked) {
	    honorsCheck[2] = true;
    }
    else {
        honorsCheck[2] = false;
    }
	//science
    if (document.mp2.honors4.checked) {
	    honorsCheck[3] = true;
    }
    else {
        honorsCheck[3] = false;
    }
	//history
    if (document.mp2.honors5.checked) {
	    honorsCheck[4] = true;
    }
    else {
        honorsCheck[4] = false;
    }
	//language
    if (document.mp2.honors6.checked) {
	    honorsCheck[5] = true;
    }
    else {
        honorsCheck[5] = false;
    }
	//elective
    if (document.mp2.honors7.checked) {
	    honorsCheck[6] = true;
    }
    else {
        honorsCheck[6] = false;
    }
	//academy
    if (document.mp2.honors8.checked) {
	    honorsCheck[7] = true;
    }
    else {
        honorsCheck[7] = false;
    }
	//academy split
	if (document.mp2.honors9.checked) {
	    honorsCheck[8] = true;
    }
    else {
        honorsCheck[8] = false;
    }


	return honorsCheck;
}

function honorsCheckArrayFillerMP3(){
	honorsCheck = [];

	//english
    if (document.mp3.honors1.checked) {
	    honorsCheck[0] = true;
    }
    else {
        honorsCheck[0] = false;
    }
	//math
    if (document.mp3.honors2.checked) {
	    honorsCheck[1] = true;
	}
    else {
        honorsCheck[1] = false;
    }
	//gym/health
    if (document.mp3.honors3.checked) {
	    honorsCheck[2] = true;
    }
    else {
        honorsCheck[2] = false;
    }
	//science
    if (document.mp3.honors4.checked) {
	    honorsCheck[3] = true;
    }
    else {
        honorsCheck[3] = false;
    }
	//history
    if (document.mp3.honors5.checked) {
	    honorsCheck[4] = true;
    }
    else {
        honorsCheck[4] = false;
    }
	//language
    if (document.mp3.honors6.checked) {
	    honorsCheck[5] = true;
    }
    else {
        honorsCheck[5] = false;
    }
	//elective
    if (document.mp3.honors7.checked) {
	    honorsCheck[6] = true;
    }
    else {
        honorsCheck[6] = false;
    }
	//academy
    if (document.mp3.honors8.checked) {
	    honorsCheck[7] = true;
    }
    else {
        honorsCheck[7] = false;
    }
	//academy split
	if (document.mp3.honors9.checked) {
	    honorsCheck[8] = true;
    }
    else {
        honorsCheck[8] = false;
    }
	
	return honorsCheck;
}

function honorsCheckArrayFillerMP4(){
	honorsCheck = [];

	//english
    if (document.mp4.honors1.checked) {
	    honorsCheck[0] = true;
    }
    else {
        honorsCheck[0] = false;
    }
	//math
    if (document.mp4.honors2.checked) {
	    honorsCheck[1] = true;
	}
    else {
        honorsCheck[1] = false;
    }
	//gym/health
    if (document.mp4.honors3.checked) {
	    honorsCheck[2] = true;
    }
    else {
        honorsCheck[2] = false;
    }
	//science
    if (document.mp4.honors4.checked) {
	    honorsCheck[3] = true;
    }
    else {
        honorsCheck[3] = false;
    }
	//history
    if (document.mp4.honors5.checked) {
	    honorsCheck[4] = true;
    }
    else {
        honorsCheck[4] = false;
    }
	//language
    if (document.mp4.honors6.checked) {
	    honorsCheck[5] = true;
    }
    else {
        honorsCheck[5] = false;
    }
	//elective
    if (document.mp4.honors7.checked) {
	    honorsCheck[6] = true;
    }
    else {
        honorsCheck[6] = false;
    }
	//academy
    if (document.mp4.honors8.checked) {
	    honorsCheck[7] = true;
    }
    else {
        honorsCheck[7] = false;
    }
	//academy split
	if (document.mp4.honors9.checked) {
	    honorsCheck[8] = true;
    }
    else {
        honorsCheck[8] = false;
    }
	
	return honorsCheck;
}

//set of four functions which determine if the void checkmark is checked or not, and sets the array value to true or false
function voidCheckArrayFillerMP1(){
	voidCheck = [];

	//english
    if (document.mp1.void1.checked) {
	    voidCheck[0] = true;
    }
    else {
        voidCheck[0] = false;
    }
	//math
    if (document.mp1.void2.checked) {
	    voidCheck[1] = true;
	}
    else {
        voidCheck[1] = false;
    }
	//gym/health
    if (document.mp1.void3.checked) {
	    voidCheck[2] = true;
    }
    else {
        voidCheck[2] = false;
    }
	//science
    if (document.mp1.void4.checked) {
	    voidCheck[3] = true;
    }
    else {
        voidCheck[3] = false;
    }
	//history
    if (document.mp1.void5.checked) {
	    voidCheck[4] = true;
    }
    else {
        voidCheck[4] = false;
    }
	//language
    if (document.mp1.void6.checked) {
	    voidCheck[5] = true;
    }
    else {
        voidCheck[5] = false;
    }
	//elective
    if (document.mp1.void7.checked) {
	    voidCheck[6] = true;
    }
    else {
        voidCheck[6] = false;
    }
	//academy
    if (document.mp1.void8.checked) {
	    voidCheck[7] = true;
    }
    else {
        voidCheck[7] = false;
    }
	//academy split
	if (document.mp1.void9.checked) {
	    voidCheck[8] = true;
    }
    else {
        voidCheck[8] = false;
    }
	
	return voidCheck;
}

function voidCheckArrayFillerMP2(){
	voidCheck = [];

	//english
    if (document.mp2.void1.checked) {
	    voidCheck[0] = true;
    }
    else {
        voidCheck[0] = false;
    }
	//math
    if (document.mp2.void2.checked) {
	    voidCheck[1] = true;
	}
    else {
        voidCheck[1] = false;
    }
	//gym/health
    if (document.mp2.void3.checked) {
	    voidCheck[2] = true;
    }
    else {
        voidCheck[2] = false;
    }
	//science
    if (document.mp2.void4.checked) {
	    voidCheck[3] = true;
    }
    else {
        voidCheck[3] = false;
    }
	//history
    if (document.mp2.void5.checked) {
	    voidCheck[4] = true;
    }
    else {
        voidCheck[4] = false;
    }
	//language
    if (document.mp2.void6.checked) {
	    voidCheck[5] = true;
    }
    else {
        voidCheck[5] = false;
    }
	//elective
    if (document.mp2.void7.checked) {
	    voidCheck[6] = true;
    }
    else {
        voidCheck[6] = false;
    }
	//academy
    if (document.mp2.void8.checked) {
	    voidCheck[7] = true;
    }
    else {
        voidCheck[7] = false;
    }
	//academy split
	if (document.mp2.void9.checked) {
	    voidCheck[8] = true;
    }
    else {
        voidCheck[8] = false;
    }
	

	return voidCheck;
}

function voidCheckArrayFillerMP3(){
	voidCheck = [];

	//english
    if (document.mp3.void1.checked) {
	    voidCheck[0] = true;
    }
    else {
        voidCheck[0] = false;
    }
	//math
    if (document.mp3.void2.checked) {
	    voidCheck[1] = true;
	}
    else {
        voidCheck[1] = false;
    }
	//gym/health
    if (document.mp3.void3.checked) {
	    voidCheck[2] = true;
    }
    else {
        voidCheck[2] = false;
    }
	//science
    if (document.mp3.void4.checked) {
	    voidCheck[3] = true;
    }
    else {
        voidCheck[3] = false;
    }
	//history
    if (document.mp3.void5.checked) {
	    voidCheck[4] = true;
    }
    else {
        voidCheck[4] = false;
    }
	//language
    if (document.mp3.void6.checked) {
	    voidCheck[5] = true;
    }
    else {
        voidCheck[5] = false;
    }
	//elective
    if (document.mp3.void7.checked) {
	    voidCheck[6] = true;
    }
    else {
        voidCheck[6] = false;
    }
	//academy
    if (document.mp3.void8.checked) {
	    voidCheck[7] = true;
    }
    else {
        voidCheck[7] = false;
    }
	//academy split
	if (document.mp3.void9.checked) {
	    voidCheck[8] = true;
    }
    else {
        voidCheck[8] = false;
    }


	return voidCheck;
}

function voidCheckArrayFillerMP4(){
	voidCheck = [];

	//english
    if (document.mp4.void1.checked) {
	    voidCheck[0] = true;
    }
    else {
        voidCheck[0] = false;
    }
	//math
    if (document.mp4.void2.checked) {
	    voidCheck[1] = true;
	}
    else {
        voidCheck[1] = false;
    }
	//gym/health
    if (document.mp4.void3.checked) {
	    voidCheck[2] = true;
    }
    else {
        voidCheck[2] = false;
    }
	//science
    if (document.mp4.void4.checked) {
	    voidCheck[3] = true;
    }
    else {
        voidCheck[3] = false;
    }
	//history
    if (document.mp4.void5.checked) {
	    voidCheck[4] = true;
    }
    else {
        voidCheck[4] = false;
    }
	//language
    if (document.mp4.void6.checked) {
	    voidCheck[5] = true;
    }
    else {
        voidCheck[5] = false;
    }
	//elective
    if (document.mp4.void7.checked) {
	    voidCheck[6] = true;
    }
    else {
        voidCheck[6] = false;
    }
	//academy
    if (document.mp4.void8.checked) {
	    voidCheck[7] = true;
    }
    else {
        voidCheck[7] = false;
    }
	//academy split
	if (document.mp4.void9.checked) {
	    voidCheck[8] = true;
    }
    else {
        voidCheck[8] = false;
    }
	
	return voidCheck;
}

//algorithim which takes the average of the set of grades for each class, and puts the averages into an array
function averageScaler(grades, markingPeriod){
	var sum = 0;
	var index = 0;
	var averagesArray = [];
	var average = 0;

    console.log("grades: " + grades)
	console.log("length: " + grades.length);
	for(var i = 0; i < grades.length; i++){ 
		average = 0;

		sum += parseFloat(grades[i]);

        if ((i+1) % markingPeriod == 0){
            average = sum / markingPeriod;
			averagesArray[index] = average;
            index++;
			sum = 0;
        }
	}
    console.log(averagesArray);
	return averagesArray;
}

//once grade is obtained, if statements determine what type of grade it is (A+, A, A-, ...) and sets it equal to a scale value which represents each index of the array which hold the scale values(4.0,3.7,3.3, ...)
function gradeChecker(grades){
	var scaleArray = [];

	for(var i = 0;i<grades.length;i++){ 

        var scaleValue = 0; 

        if(grades[i] > 96.5){
            scaleValue = 12;
        }
        else if(grades[i] <96.5 && grades[i] >= 93.5){
            scaleValue = 11;
        }
        else if(grades[i] <93.5 && grades[i] >= 89.5){
            scaleValue = 10;
        }
        else if(grades[i] <89.5 && grades[i] >= 86.5){
            scaleValue = 9;
        }
        else if(grades[i] <86.5 && grades[i] >= 83.5){
            scaleValue = 8;
        }
        else if(grades[i] <83.5 && grades[i] >= 79.5){
            scaleValue = 7;
        }
        else if(grades[i] <79.5 && grades[i] >= 76.5){
            scaleValue = 6;
        }
        else if(grades[i] <76.5 && grades[i] >= 73.5){
            scaleValue = 5;
        }
        else if(grades[i] <73.5 && grades[i] >= 69.5){
            scaleValue = 4;
        }
        else if(grades[i] <69.5 && grades[i] >= 66.5){
            scaleValue = 3;
        }
        else if(grades[i] <66.5 && grades[i] >= 63.5){
            scaleValue = 2;
        }
        else if(grades[i] <63.5 && grades[i] >= 59.5){
            scaleValue = 1;
        }
        else if(grades[i] <59.5){
            scaleValue = 0;
        }

	    scaleArray[i] = scaleValue;
	}
	return scaleArray;    
}

// calculates the weighted score for English, math, science, history
function honorsCoreClasses(scaleArray, honorsCheck, voidCheck){
	let weightedCoreScore = 0;

	for(var i = 0; i < 5; i++){
		if(voidCheck[i] == true) {
			weightedCoreScore += 0;
        }
		else if(i == 2) {
			continue;
        }
		else if(voidCheck != true && i != 2 && honorsCheck[i] == true) {
			weightedCoreScore += (honorsScale[scaleArray[i]] * 5);
        }
		else if(voidCheck != true && i != 2 && honorsCheck[i] != true) {
			weightedCoreScore += (generalScale[scaleArray[i]] * 5);
        }
	}

	return weightedCoreScore;
}

// calculates the unweighted score for English, math, science, history
function coreClasses(scaleArray, voidCheck){
	var coreScore = 0;

	for(var i = 0; i < 5; i++){
		
		if(voidCheck[i] == true){
			coreScore += 0;
		}
		else if(i == 2){
			continue;
		}
		else if(voidCheck[i] != true && i != 2){
			coreScore += (generalScale[scaleArray[i]] * 5);
		}
	}

	return coreScore;
}

//calculates the score for gym and health
function gymHealth(gymHealthScale){
	var gymHealthScore = 0;

	if(voidCheck[2] == true){
		return 0;
	}
	else{
	gymHealthScore = generalScale[gymHealthScale] * 5;
	}
	
	return gymHealthScore;
}

//calculates the weighted score for language
function weightedLanguage(languageScale, honorsCheck, voidCheck){
    var weightedLanguageScore = 0;
	if(voidCheck[5]){
		return 0;
	}
	else{
		if (honorsCheck[5] == true){
			weightedLanguageScore += honorsScale[languageScale] * 5;
		}
		else if(honorsCheck[5] != true){
			weightedLanguageScore = generalScale[languageScale] * 5;
        }
		else{
			console.log("Weighted Language Error");
		}
	}
	return weightedLanguageScore;
}

//calculates the weighted score for academy class
function weightedAcademy(academyScale, splitAcademyScale, honorsCheck, voidCheck){ 
	var weightedAcademyScore = 0;
    if(document.getElementById("split").style.visibility != "hidden"){
    	if (voidCheck[7] == true){
        	return 0;
    	}
    	else if(honorsCheck[7] == true){
	    	weightedAcademyScore = honorsScale[academyScale] * 10;
    	}
		else if(honorsCheck[7] != true){
	    	weightedAcademyScore = generalScale[academyScale] * 10;
    	}
	}		
	else if(document.getElementById("split").style.visibility == "hidden"){
		if (voidCheck[7] == true){
        	weightedAcademyScore += 0;
    	}
		if (voidCheck[8] == true){
        	weightedAcademyScore += 0;
    	}
    	else if(voidCheck[7] == true && voidCheck[8] != true && honorsCheck[8] == true){
	    	weightedAcademyScore = honorsScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] == true && voidCheck[8] != true && honorsCheck[8] != true){
	    	weightedAcademyScore = generalScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] == true && honorsCheck[7] == true){
	    	weightedAcademyScore = honorsScale[academyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] == true && honorsCheck[7] != true){
	    	weightedAcademyScore = generalScale[academyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] != true && honorsCheck[7] == true && honorsCheck[8] == true){
	    	weightedAcademyScore += honorsScale[academyScale] * 5;
			weightedAcademyScore += honorsScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] != true && honorsCheck[7] != true && honorsCheck[8] != true){
	    	weightedAcademyScore += generalScale[academyScale] * 5;
			weightedAcademyScore += generalScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] != true && honorsCheck[7] == true && honorsCheck[8] != true){
	    	weightedAcademyScore += honorsScale[academyScale] * 5;
			weightedAcademyScore += generalScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] != true && honorsCheck[7] != true && honorsCheck[8] == true){
	    	weightedAcademyScore += generalScale[academyScale] * 5;
			weightedAcademyScore += honorsScale[splitAcademyScale] * 5;
    	}
	}
	return weightedAcademyScore;
}

//calculates the weighted score for elective
function weightedElective(electiveScale, honorsCheck, voidCheck){
	var weightedElectiveScore = 0;

	if(voidCheck[6] == true){
		return 0;
	}
	else{
		if (honorsCheck[6] == true){
			weightedElectiveScore = honorsScale[electiveScale] * 5;
		}
		else if (honorsCheck[6] != true){
			weightedElectiveScore = generalScale[electiveScale] * 5;
		}
		else{
			console.log("Weighted Elective Error");
		}
	}

	return weightedElectiveScore;
}

//calculates the unweighted score for elective
function language(languageScale, voidCheck){
	var languageScore = 0;

	if(voidCheck[5] == true){
		return 0;
	}
	else{
		languageScore = generalScale[languageScale] * 5;
	}
	
	return languageScore;
}

//calculates the unweighted score for academy
function academy(academyScale, splitAcademyScale, voidCheck){
	var academyScore = 0;

	if(document.getElementById("split").style.visibility != "hidden") {
    	if (voidCheck[7] == true){
        	return 0;
    	}
    	else {
	    	academyScore = generalScale[academyScale] * 10;
    	}
	}		
	else if(document.getElementById("split").style.visibility == "hidden"){
		if (voidCheck[7] == true){
        	academyScore += 0;
    	}
		if (voidCheck[8] == true){
        	academyScore += 0;
    	}
		
    	else if(voidCheck[7] == true && voidCheck[8] != true){
	    	academyScore = generalScale[splitAcademyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] == true){
	    	academyScore = generalScale[academyScale] * 5;
    	}
		else if(voidCheck[7] != true && voidCheck[8] != true){
	    	academyScore += generalScale[academyScale] * 5;
			academyScore += generalScale[splitAcademyScale] * 5;
    	}
	}

	return academyScore;
}

//calculates the unweighted score for elective
function elective(electiveScale, voidCheck){
	var electiveScore = 0;

	if(voidCheck[6] == true){
		return 0;
	}
	else{
		electiveScore = generalScale[electiveScale] * 5;
	}

	return electiveScore;
}

//counts the total amount of credits which the user has
function creditCounter(voidCheck){
	var creditCount = 45;
    
    if (voidCheck[0] == true) {
        creditCount -= 5;
    }
    if (voidCheck[1] == true) {
        creditCount -= 5;
    }
    if (voidCheck[2] == true) {
        creditCount -= 5;
    }
    if (voidCheck[3] == true) {
        creditCount -= 5;
    }
    if (voidCheck[4] == true) {
        creditCount -= 5;
    }
    if (voidCheck[5] == true) {
        creditCount -= 5;
    }
    if (voidCheck[6] == true) {
        creditCount -= 5;
    }
    if (voidCheck[7] == true && voidCheck[8] == true) {
        creditCount -= 10;
    }

	if (voidCheck[7] == true && voidCheck[8] != true && document.getElementById("split").style.visibility == "hidden") {
        creditCount -= 5;
    }
	if (voidCheck[7] == true && voidCheck[8] != true && document.getElementById("split").style.visibility != "hidden") {
        creditCount -= 10;
    }
	if (voidCheck[7] != true && voidCheck[8] == true) {
        creditCount -= 5;
    }

	return creditCount;
}

//final calculation of weighted gpa
function weightedGpaCalc(weightedScoreTotal, creditCount){


	var weightedGPA = 0;

	weightedGPA = weightedScoreTotal / creditCount;
	
	console.log("weightedGPA: " + weightedGPA);
	return weightedGPA;
}

//final calculation of unweighted gpa
function unweightedGpaCalc(unweightedScoreTotal, creditCount){
	var unweightedGPA = 0;

	unweightedGPA = unweightedScoreTotal / creditCount;

	console.log("unweightedGPA: " + unweightedGPA);
	
	return unweightedGPA;
}

//functions sets the visibility split academy options
function splitAcademy() {
    document.getElementById("split").style.visibility = "hidden";
    document.getElementById("afterSplit").style.visibility = "visible";
    document.getElementById("button").style.float = "none";
    document.getElementById("clear").style.float = "none";
    document.getElementById("clear").style.marginLeft = "5px";
}

function undoSplit () {
    document.getElementById("split").style.visibility = "visible";
    document.getElementById("afterSplit").style.visibility = "hidden";
    document.getElementById("button").style.float = "left";
    document.getElementById("clear").style.float = "left";
    document.getElementById("clear").style.marginLeft = "132px";
}

//set of four functions clears the information entered in the textboxes and checkmarks
function clearInputMP1(){
    document.mp1.mpone1.value = '';
    document.mp1.mpone2.value = '';
    document.mp1.mpone3.value = '';
    document.mp1.mpone4.value = '';
    document.mp1.mpone5.value = '';
    document.mp1.mpone6.value = '';
    document.mp1.mpone7.value = '';
    document.mp1.mpone8.value = '';
    document.mp1.mpone9.value = '';

    document.mp1.honors1.checked = false;
    document.mp1.honors2.checked = false;
    document.mp1.honors3.checked = false;
    document.mp1.honors4.checked = false;
    document.mp1.honors5.checked = false;
    document.mp1.honors6.checked = false;
    document.mp1.honors7.checked = false;
    document.mp1.honors8.checked = false;
    document.mp1.honors9.checked = false;
    
    document.mp1.void1.checked = false;
    document.mp1.void2.checked = false;
    document.mp1.void3.checked = false;
    document.mp1.void4.checked = false;
    document.mp1.void5.checked = false;
    document.mp1.void6.checked = false;
    document.mp1.void7.checked = false;
    document.mp1.void8.checked = false;
    document.mp1.void9.checked = false;
}

function clearInputMP2(){
    document.mp2.mptwo1.value = '';
    document.mp2.mptwo2.value = '';
    document.mp2.mptwo3.value = '';
    document.mp2.mptwo4.value = '';
    document.mp2.mptwo5.value = '';
    document.mp2.mptwo6.value = '';
    document.mp2.mptwo7.value = '';
    document.mp2.mptwo8.value = '';
	document.mp2.mptwo9.value = '';
    document.mp2.mptwo10.value = '';
    document.mp2.mptwo11.value = '';
    document.mp2.mptwo12.value = '';
    document.mp2.mptwo13.value = '';
    document.mp2.mptwo14.value = '';
    document.mp2.mptwo15.value = '';
    document.mp2.mptwo16.value = '';
	document.mp2.mptwo17.value = '';
    document.mp2.mptwo18.value = '';

	document.mp2.honors1.checked = false;
    document.mp2.honors2.checked = false;
    document.mp2.honors3.checked = false;
    document.mp2.honors4.checked = false;
    document.mp2.honors5.checked = false;
    document.mp2.honors6.checked = false;
    document.mp2.honors7.checked = false;
    document.mp2.honors8.checked = false;
    document.mp2.honors9.checked = false;
    
    document.mp2.void1.checked = false;
    document.mp2.void2.checked = false;
    document.mp2.void3.checked = false;
    document.mp2.void4.checked = false;
    document.mp2.void5.checked = false;
    document.mp2.void6.checked = false;
    document.mp2.void7.checked = false;
    document.mp2.void8.checked = false;
    document.mp2.void9.checked = false;
	
}

function clearInputMP3(){
    document.mp3.mpthree1.value = '';
    document.mp3.mpthree2.value = '';
    document.mp3.mpthree3.value = '';
    document.mp3.mpthree4.value = '';
    document.mp3.mpthree5.value = '';
    document.mp3.mpthree6.value = '';
    document.mp3.mpthree7.value = '';
    document.mp3.mpthree8.value = '';
	document.mp3.mpthree9.value = '';
    document.mp3.mpthree10.value = '';
    document.mp3.mpthree11.value = '';
    document.mp3.mpthree12.value = '';
    document.mp3.mpthree13.value = '';
    document.mp3.mpthree14.value = '';
    document.mp3.mpthree15.value = '';
    document.mp3.mpthree16.value = '';
	document.mp3.mpthree17.value = '';
    document.mp3.mpthree18.value = '';
    document.mp3.mpthree19.value = '';
    document.mp3.mpthree20.value = '';
    document.mp3.mpthree21.value = '';
    document.mp3.mpthree22.value = '';
    document.mp3.mpthree23.value = '';
    document.mp3.mpthree24.value = '';
	document.mp3.mpthree25.value = '';
    document.mp3.mpthree26.value = '';
    document.mp3.mpthree27.value = '';

	document.mp3.honors1.checked = false;
    document.mp3.honors2.checked = false;
    document.mp3.honors3.checked = false;
    document.mp3.honors4.checked = false;
    document.mp3.honors5.checked = false;
    document.mp3.honors6.checked = false;
    document.mp3.honors7.checked = false;
    document.mp3.honors8.checked = false;
    document.mp3.honors9.checked = false;
	  
    document.mp3.void1.checked = false;
    document.mp3.void2.checked = false;
    document.mp3.void3.checked = false;
    document.mp3.void4.checked = false;
    document.mp3.void5.checked = false;
    document.mp3.void6.checked = false;
    document.mp3.void7.checked = false;
    document.mp3.void8.checked = false;
    document.mp3.void9.checked = false;
}

function clearInputMP4(){
    document.mp4.mpfour1.value = '';
    document.mp4.mpfour2.value = '';
    document.mp4.mpfour3.value = '';
    document.mp4.mpfour4.value = '';
    document.mp4.mpfour5.value = '';
    document.mp4.mpfour6.value = '';
    document.mp4.mpfour7.value = '';
    document.mp4.mpfour8.value = '';
	document.mp4.mpfour9.value = '';
    document.mp4.mpfour10.value = '';
    document.mp4.mpfour11.value = '';
    document.mp4.mpfour12.value = '';
    document.mp4.mpfour13.value = '';
    document.mp4.mpfour14.value = '';
    document.mp4.mpfour15.value = '';
    document.mp4.mpfour16.value = '';
	document.mp4.mpfour17.value = '';
    document.mp4.mpfour18.value = '';
    document.mp4.mpfour19.value = '';
    document.mp4.mpfour20.value = '';
    document.mp4.mpfour21.value = '';
    document.mp4.mpfour22.value = '';
    document.mp4.mpfour23.value = '';
    document.mp4.mpfour24.value = '';
	document.mp4.mpfour25.value = '';
    document.mp4.mpfour26.value = '';
    document.mp4.mpfour27.value = '';
    document.mp4.mpfour28.value = '';
    document.mp4.mpfour29.value = '';
    document.mp4.mpfour30.value = '';
    document.mp4.mpfour31.value = '';
    document.mp4.mpfour32.value = '';
	document.mp4.mpfour33.value = '';
    document.mp4.mpfour34.value = '';
    document.mp4.mpfour35.value = '';
	document.mp4.mpfour36.value = '';

	document.mp4.honors1.checked = false;
    document.mp4.honors2.checked = false;
    document.mp4.honors3.checked = false;
    document.mp4.honors4.checked = false;
    document.mp4.honors5.checked = false;
    document.mp4.honors6.checked = false;
    document.mp4.honors7.checked = false;
    document.mp4.honors8.checked = false;
    document.mp4.honors9.checked = false;
	  
    document.mp4.void1.checked = false;
    document.mp4.void2.checked = false;
    document.mp4.void3.checked = false;
    document.mp4.void4.checked = false;
    document.mp4.void5.checked = false;
    document.mp4.void6.checked = false;
    document.mp4.void7.checked = false;
    document.mp4.void8.checked = false;
    document.mp4.void9.checked = false;
}