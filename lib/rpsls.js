export function rps(move){
	const moves = ["rock", "paper","scissors"];
	const rand = Math.floor(Math.random() * 3);
	const oppMove = moves[rand];
	if(move == undefined){
		return{ player: moves[rand]};
	}
	if(!moves.includes(move.toLowerCase())){
		throw new Error("Not a Move");
	}
	let res;
	if(move == oppMove){
		res = "tie";
	}
	else if(move == "rock" && oppMove == "scissors" ||  move == "paper" && oppMove == "rock" ||  move == "scissors" && oppMove == "paper"){
		res = "win";
	}
	else{
		res = "lose";
	}
	return {player: move, opponet: oppMove, result: res};
}
export function rpsls(move){
	const moves = ["rock", "paper", "scissors", "spock", "lizard"];
    	const rand = Math.floor(Math.random() * 5);
    	const oppMove = moves[rand];
	if(move == undefined){
                return{ player: moves[rand]};
        }
	if(!moves.includes(move.toLowerCase())){
                throw new Error("Not a Move");
        }
	let res;
	if(move == oppMove){
                res = "tie";
        }
	else if((move === "lizard" && oppMove === "spock") ||(move === "spock" && oppMove === "scissors") ||(move === "paper" && oppMove === "rock") || (move === "rock" && oppMove === "lizard") ||(move === "lizard" && oppMove === "paper") || (move === "scissors" && oppMove === "paper") || (move === "scissors" && oppMove === "lizard") || (move === "rock" && oppMove === "scissors") || (move === "paper" && oppMove === "spock") || (move === "spock" && oppMove === "rock")){
		res = "win";
	}
	else{
		res = "lose";
	} 
	return {player: move, opponet: oppMove, result: res};
}
