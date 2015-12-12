#pragma strict

import UnityEngine.UI;

enum States {
  cell, mirror, sheets_0, lock_0, cell_mirror, sheet_1, lock_1, freedom
}

var myState: States;
var text: Text;

function Start() {
  myState = States.cell;
}

function Update() {
  print(myState);
  if (myState == States.cell) stateCell();
  else if (myState == States.sheets_0) stateSheets0();
  else if (myState == States.mirror) stateMirror();
  else if (myState == States.lock_0) stateLock0();
  else if (myState == States.cell_mirror) stateCellMirror();
  else if (myState == States.sheet_1) stateSheet1();
  else if (myState == States.lock_1) stateLock1();
  else if (myState == States.freedom) stateFreedom();
}

function stateCell() {
  text.text = "You are in a prison cell, and you want to escape. There are some dirty " +
    "sheets on the bed, a mirror on the wall, and the door is locked from the outside.\n\n" +
    "Press S to View Sheets, M to View Mirror and L to View Lock";
  if (Input.GetKeyDown("s")) myState = States.sheets_0;
  else if (Input.GetKeyDown("m")) myState = States.mirror;
  else if (Input.GetKeyDown("l")) myState = States.lock_0;
}

function stateSheets0() {
  text.text = "You can't believe you sleep in these things. Surely it's time somebody changed " +
    "them. The pleasures of prison life I guess!\n\n" +
    "Press R to return to roaming you cell";
  if (Input.GetKeyDown("r")) myState = States.cell;
}

function stateMirror() {
  text.text = "The dirty old mirror on the wall seems loose.\n\n" +
    "Press T to Take the mirror, or R to Return to cell";
  if (Input.GetKeyDown("r")) myState = States.cell;
  else if (Input.GetKeyDown("t")) myState = States.cell_mirror;
}

function stateLock0() {
  text.text = "This is one of those button locks. You have no idea what the " +
    "combination is. You wish you could somehow see where the dirty " +
    "fingerprints were, maybe that would help.\n\n" +
    "Press R to Return to roaming your cell";
  if (Input.GetKeyDown("r")) myState = States.cell;
}

function stateCellMirror() {
  text.text = "You are still in your cell, and you STILL want to escape! There are " +
    "some dirty sheets on the bed, a mark where the mirror was, " +
    "and that pesky door is still there, and firmly locked!\n\n" +
    "Press S to view Sheets, or L to view Lock";
  if (Input.GetKeyDown("s")) myState = States.sheet_1;
  else if (Input.GetKeyDown("l")) myState = States.lock_1;
}

function stateSheet1() {
  text.text = "Holding a mirror in your hand doesn't make the sheets look " +
    "any better.\n\n" +
    "Press R to Return to roaming your cell";
  if (Input.GetKeyDown("r")) myState = States.cell_mirror;
}

function stateLock1() {
  text.text = "You carefully put the mirror through the bars, and turn it round " +
    "so you can see the lock. You can just make out fingerprints around " +
    "the buttons. You press the dirty buttons, and hear a click.\n\n" +
    "Press O to Open, or R to Return to your cell";
  if (Input.GetKeyDown("r")) myState = States.cell_mirror;
  else if (Input.GetKeyDown("o")) myState = States.freedom;
}

function stateFreedom() {
  text.text = "You are FREE!\n\n" +
    "Press P to Play again";
  if (Input.GetKeyDown("p")) myState = States.cell;
}
