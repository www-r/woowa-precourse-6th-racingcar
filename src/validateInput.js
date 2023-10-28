import { ERROR, REG_EXP } from './constants';
import CustomError from './CustomError';

export function validateName(inputArr) {
	if (inputArr.length === 0) {
		throw new CustomError(ERROR.NAME, ERROR.NO_INPUT);
	}
	if (inputArr.length === 1) {
		throw new CustomError(ERROR.NAME, ERROR.NO_ALONE);
	}
	const validNameArr = inputArr.map((name) => {
		if (name.length > 5) {
			throw new CustomError(ERROR.NAME, ERROR.ONLY_UNDER_FIVE);
		} else {
			return name;
		}
	});
	console.log('valid name Arr:', validNameArr);
	return validNameArr;
}

export function validateNumber(input) {
	if (containsSpecialCharacter(input)) {
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (containsCharacters(input)) {
		throw new CustomError(ERROR.NAME, ERROR.ONLY_NUMBER);
	}
	if (input === 0) {
		throw new CustomError(ERROR.NAME, ERROR.NO_ZERO);
	}
	return input;
}
function containsSpecialCharacter(str) {
	const regex = new RegExp(REG_EXP.SPECIAL_CHARACTER);
	return regex.test(str);
}
function containsCharacters(str) {
	const regex = new RegExp(REG_EXP.STRING_CHARACTER);
	return regex.test(str);
}
