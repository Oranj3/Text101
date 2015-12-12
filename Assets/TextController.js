#pragma strict

import UnityEngine.UI;

enum States { cell, mirror, sheets_0, lock_0, cell_mirror, sheet_1, lock_1, freedom }

var myState: States;
var text: Text;

function Start () {
	myState = States.cell;
}

function Update () {
	print(myState);
	if (myState == States.cell) {
		stateCell();
	} else if (myState == States.sheets_0) {
		stateSheets0();
	}
}

function stateCell () {
	text.text = "You are in a prison cell, and you want to escape. There are some dirty " +
				"sheets on the bed, a mirror on the wall, and the door is locked from the outside.\n\n" +
				"Press S to View Sheets, M to View Mirror and L to View Lock";
	if (Input.GetKeyDown("s")) {
		myState = States.sheets_0;
	}
}

function stateSheets0 () {
	text.text = "You can't believe you sleep in these things. Surely it's time somebody changed " +
				"them. The pleasures of prison life I guess!\n\n" +
				"Press R to return to roaming you cell";
	if (Input.GetKeyDown("r")) {
		myState = States.cell;
	}
}