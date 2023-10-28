import { RESULT } from './constants';
import { Console } from '@woowacourse/mission-utils';

export function endGame(gameResult) {
	const winnerArr = compareGameResult(gameResult);
	reportWinner(winnerArr);
}

function compareGameResult(gameResult) {
	let winnerArr = [];
	let maxScore = 0;
	for (user in gameResult) {
		winnerArr.push(user);
		if (gameResult[user] > maxScore) {
			maxScore = gameResult[user];
		} else {
			winner.pop();
		}
	}
	return winnerArr;
}
function reportWinner(winnerArr) {
	const winner = winnerArr.join(' ,');
	Console.print(RESULT.FINAL_WINNER + winner);
}

