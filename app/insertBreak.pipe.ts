import {Pipe} from 'angular2/core'

@Pipe({
	name: "insertBreak"
})
export class InsertBreakPipe {
	//replaces the first space with <br/>
	transform(str) {
		var arr = str.split(' ')
		str = ''

		for (var i in arr) {
			if (Number(i) == 1) str += arr[i] + ' '
			else str += arr[i] + '<br/>'
		}
		return str
	}
}