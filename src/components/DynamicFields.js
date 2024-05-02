import {InputType} from "../utils/Constants";
import {TEXT} from "./forms/TEXT";
import {DATE} from "./forms/DATE";
import {EMAIL} from "./forms/EMAIL";
import {NUMBER} from "./forms/NUMBER";


const DynamicFields = ({divClass, inputClass, formControl, formHook}) => {
	switch(formControl["type"]) {
		case InputType.TEXT:
			return TEXT({divClass, inputClass, formControl, formHook});
		case InputType.EMAIL:
			return EMAIL({divClass, inputClass, formControl, formHook});
		case InputType.NUMBER:
			return NUMBER({divClass, inputClass, formControl, formHook});
		case InputType.DATE:
			return DATE({ divClass, inputClass, formControl, formHook });
			/*
        Create as many custom input/Select/TextArea component as possible, inline with INPUTTYPE CONSTANTS
      */

		default:
			return null
	}
}

export default DynamicFields;
