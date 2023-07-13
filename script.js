
var flag = 1;
var scoreX=0,scoreO=0;
var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    
b1btn = document.getElementById("button-1");
b2btn = document.getElementById("button-2");
b3btn = document.getElementById("button-3");
b4btn = document.getElementById("button-4");
b5btn = document.getElementById("button-5");
b6btn = document.getElementById("button-6");
b7btn = document.getElementById("button-7");
b8btn = document.getElementById("button-8");
b9btn = document.getElementById("button-9");



b1btn.addEventListener("click", function placetextValue1() {
	if (flag == 1) {
		document.getElementById("button-1").value = "X";
		b1btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-1").value = "O";
		b1btn.disabled = true;
		flag = 1;
	}
});
b2btn.addEventListener("click", function placetextValue2() {
	if (flag == 1) {
		 document.getElementById("button-2").value = "X";
		b2btn.disabled = true;
		flag = 0;
	}
	else {
		 document.getElementById("button-2").value  = "O";
		b2btn.disabled = true;
		flag = 1;
	}
});
b3btn.addEventListener("click", function placetextValue3() {
	if (flag == 1) {
		document.getElementById("button-3").value = "X";
		b3btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-3").value = "O";
		b3btn.disabled = true;
		flag = 1;
	}
}
);
b4btn.addEventListener("click", function placetextValue4() {
	if (flag == 1) {
		document.getElementById("button-4").value = "X";
		b4btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-4").value = "O";
		b4btn.disabled = true;
		flag = 1;
	}
}
);
b5btn.addEventListener("click", function placetextValue5() {
	if (flag == 1) {
		document.getElementById("button-5").value= "X";
		b5btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-5").value = "O";
		b5btn.disabled = true;
		flag = 1;
	}
}
);
b6btn.addEventListener("click", function placetextValue6() {
	if (flag == 1) {
		document.getElementById("button-6").value = "X";
		b6btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-6").value= "O";
		b6btn.disabled = true;
		flag = 1;
	}
}
);
b7btn.addEventListener("click", function placetextValue7() {
	if (flag == 1) {
		document.getElementById("button-7").value = "X";
		b7btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-7").value = "O";
		b7btn.disabled = true;
		flag = 1;
	}
}
);
b8btn.addEventListener("click", function placetextValue8() {
	if (flag == 1) {
		document.getElementById("button-8").value = "X";
		b8btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-8").value = "O";
		b8btn.disabled = true;
		flag = 1;
	}
}

);
b9btn.addEventListener("click", function placetextValue9() {
	if (flag == 1) {
		document.getElementById("button-9").value = "X";
		b9btn.disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("button-9").value = "O";
		b9btn.disabled = true;
		flag = 1;
	}
});

b1btn.setAttribute("onclick", "checkWinner();");
b2btn.setAttribute("onclick", "checkWinner();");
b3btn.setAttribute("onclick", "checkWinner();");
b4btn.setAttribute("onclick", "checkWinner();");
b5btn.setAttribute("onclick", "checkWinner();");
b6btn.setAttribute("onclick", "checkWinner();");
b7btn.setAttribute("onclick", "checkWinner();");
b8btn.setAttribute("onclick", "checkWinner();");
b9btn.setAttribute("onclick", "checkWinner();");



function checkWinner() {
	
	if ((document.getElementById("button-1").value == 'x' || document.getElementById("button-1").value == 'X') && ( document.getElementById("button-2").value == 'x' ||
		 document.getElementById("button-2").value == 'X') && (document.getElementById("button-3").value == 'x' || document.getElementById("button-3").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b4btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;
		b1btn.style.color = "rgb(40, 238, 167)";
		b2btn.style.color = "rgb(40, 238, 167)";
		b3btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-1").value == 'x' || document.getElementById("button-1").value == 'X') && (document.getElementById("button-4").value == 'x' ||
		document.getElementById("button-4").value == 'X') && (document.getElementById("button-7").value == 'x' || document.getElementById("button-7").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b2btn.disabled = true;
		b3btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b1btn.style.color = "rgb(40, 238, 167)";
		b4btn.style.color = "rgb(40, 238, 167)";
		b7btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-7").value == 'x' || document.getElementById("button-7").value == 'X') && (document.getElementById("button-8").value == 'x' ||
		document.getElementById("button-8").value == 'X') && (document.getElementById("button-9").value == 'x' || document.getElementById("button-9").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b3btn.disabled = true;
		b4btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;

		b7btn.style.color = "rgb(40, 238, 167)";
		b8btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-3").value == 'x' || document.getElementById("button-3").value == 'X') && (document.getElementById("button-6").value == 'x' ||
		document.getElementById("button-6").value == 'X') && (document.getElementById("button-9").value == 'x' || document.getElementById("button-9").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b4btn.disabled = true;
		b5btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;

		b3btn.style.color = "rgb(40, 238, 167)";
		b6btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-1").value == 'x' || document.getElementById("button-1").value == 'X') && (document.getElementById("button-5").value == 'x' ||
		document.getElementById("button-5").value == 'X') && (document.getElementById("button-9").value == 'x' || document.getElementById("button-9").value == 'X')) {
		document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b2btn.disabled = true;
		b3btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;

		b1btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-3").value == 'x' || document.getElementById("button-3").value == 'X') && (document.getElementById("button-5").value == 'x' ||
		document.getElementById("button-5").value == 'X') && (document.getElementById("button-7").value == 'x' || document.getElementById("button-7").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b3btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b7btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if (( document.getElementById("button-2").value == 'x' ||  document.getElementById("button-2").value == 'X') && (document.getElementById("button-5").value == 'x' ||
		document.getElementById("button-5").value == 'X') && (document.getElementById("button-8").value == 'x' || document.getElementById("button-8").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b9btn.disabled = true;

		b2btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b8btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}
	else if ((document.getElementById("button-4").value == 'x' || document.getElementById("button-4").value == 'X') && (document.getElementById("button-5").value == 'x' ||
		document.getElementById("button-5").value == 'X') && (document.getElementById("button-6").value == 'x' || document.getElementById("button-6").value == 'X')) {
        document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b3btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b4btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b6btn.style.color = "rgb(40, 238, 167)";
        scoreX+=1;
        document.getElementById("player1-score").value=scoreX;
	}

	else if ((document.getElementById("button-1").value == 'O' || document.getElementById("button-1").value == 'O') && ( document.getElementById("button-2").value == 'O' ||
		 document.getElementById("button-2").value == 'O') && (document.getElementById("button-3").value == 'O' || document.getElementById("button-3").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b4btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b1btn.style.color = "rgb(40, 238, 167)";
		b2btn.style.color = "rgb(40, 238, 167)";
		b3btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-1").value == 'O' || document.getElementById("button-1").value == 'O') && (document.getElementById("button-4").value == 'O' ||
		document.getElementById("button-4").value == 'O') && (document.getElementById("button-7").value == 'O' || document.getElementById("button-7").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b2btn.disabled = true;
		b3btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b1btn.style.color = "rgb(40, 238, 167)";
		b4btn.style.color = "rgb(40, 238, 167)";
		b7btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-7").value == 'O' || document.getElementById("button-7").value == 'O') && (document.getElementById("button-8").value == 'O' ||
		document.getElementById("button-8").value == 'O') && (document.getElementById("button-9").value == 'O' || document.getElementById("button-9").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b3btn.disabled = true;
		b4btn.disabled = true;
		b5btn.disabled = true;
		b6btn.disabled = true;

		b7btn.style.color = "rgb(40, 238, 167)";
		b8btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-3").value == 'O' || document.getElementById("button-3").value == 'O') && (document.getElementById("button-6").value == 'O' ||
		document.getElementById("button-6").value == 'O') && (document.getElementById("button-9").value == 'O' || document.getElementById("button-9").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b4btn.disabled = true;
		b5btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;
		b3btn.style.color = "rgb(40, 238, 167)";
		b6btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-1").value == 'O' || document.getElementById("button-1").value == 'O') && (document.getElementById("button-5").value == 'O' ||
		document.getElementById("button-5").value == 'O') && (document.getElementById("button-9").value == 'O' || document.getElementById("button-9").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b2btn.disabled = true;
		b3btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;

		b1btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b9btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-3").value == 'O' || document.getElementById("button-3").value == 'O') && (document.getElementById("button-5").value == 'O' ||
		document.getElementById("button-5").value == 'O') && (document.getElementById("button-7").value == 'O' || document.getElementById("button-7").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b3btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b7btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if (( document.getElementById("button-2").value == 'O' ||  document.getElementById("button-2").value == 'O') && (document.getElementById("button-5").value == 'O' ||
		document.getElementById("button-5").value == 'O') && (document.getElementById("button-8").value == 'O' || document.getElementById("button-8").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b1btn.disabled = true;
		b3btn.disabled = true;
		b4btn.disabled = true;
		b6btn.disabled = true;
		b7btn.disabled = true;
		b9btn.disabled = true;

		b2btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b8btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}
	else if ((document.getElementById("button-4").value == 'O' || document.getElementById("button-4").value == 'O') && (document.getElementById("button-5").value == 'O' ||
		document.getElementById("button-5").value == 'O') && (document.getElementById("button-6").value == 'O' || document.getElementById("button-6").value == 'O')) {
        document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Wins";
		b1btn.disabled = true;
		b2btn.disabled = true;
		b3btn.disabled = true;
		b7btn.disabled = true;
		b8btn.disabled = true;
		b9btn.disabled = true;

		b4btn.style.color = "rgb(40, 238, 167)";
		b5btn.style.color = "rgb(40, 238, 167)";
		b6btn.style.color = "rgb(40, 238, 167)";
        scoreO+=1;
        document.getElementById("player2-score").value=scoreO;
	}

	else if ((document.getElementById("button-1").value == 'X' || document.getElementById("button-1").value == 'O') && ( document.getElementById("button-2").value == 'X'
		||  document.getElementById("button-2").value == 'O') && (document.getElementById("button-3").value == 'X' || document.getElementById("button-3").value == 'O') &&
		(document.getElementById("button-4").value == 'X' || document.getElementById("button-4").value == 'O') && (document.getElementById("button-5").value == 'X' ||
			document.getElementById("button-5").value == 'O') && (document.getElementById("button-6").value == 'X' || document.getElementById("button-6").value == 'O') &&
		(document.getElementById("button-7").value == 'X' || document.getElementById("button-7").value == 'O') && (document.getElementById("button-8").value == 'X' ||
			document.getElementById("button-8").value == 'O') && (document.getElementById("button-9").value == 'X' || document.getElementById("button-9").value == 'O')) {
		document.getElementById('Info').innerHTML = "Match Tie";
	}
	else {

		if (flag == 1) {
		    document.getElementById('Info').innerHTML = document.getElementById("player1").value + " Turn";
		}
		else {
			document.getElementById('Info').innerHTML = document.getElementById("player2").value + " Turn";
		}
	}
}

const resetgame = document.getElementById("resetgame");
resetgame.addEventListener("click", function resetGame() {
    window.location.reload();
	document.getElementById("button-1").value =  document.getElementById("button-2").value = document.getElementById("button-3").value = document.getElementById("button-4").value = document.getElementById("button-5").value = document.getElementById("button-6").value = document.getElementById("button-7").value = document.getElementById("button-8").value = document.getElementById("button-9").value = '';
}
);


const playagain = document.getElementById("playagain");
playagain.addEventListener("click", function playAgain() {
    b1btn.disabled= false;
    b2btn.disabled= false;
    b3btn.disabled= false;
    b4btn.disabled= false;
    b5btn.disabled= false;
    b6btn.disabled= false;
    b7btn.disabled= false;
    b8btn.disabled= false;
    b8btn.disabled= false;
    b9btn.disabled= false;
 
	b1btn.style.color = "black" ;
    b2btn.style.color = "black" ;
    b3btn.style.color = "black" ;
    b4btn.style.color = "black" ;
    b5btn.style.color = "black" ;
    b6btn.style.color = "black" ;
    b7btn.style.color = "black" ;
    b8btn.style.color = "black" ;
    b9btn.style.color = "black" ;
	
	document.getElementById("button-1").value =  document.getElementById("button-2").value = document.getElementById("button-3").value = document.getElementById("button-4").value = document.getElementById("button-5").value = document.getElementById("button-6").value = document.getElementById("button-7").value = document.getElementById("button-8").value = document.getElementById("button-9").value = '';
})
;
