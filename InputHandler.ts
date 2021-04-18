import Player from "./Player";
import Snake from "./Snake";
interface InputHandler {
  display (p: Player) : void;
  madeLeftMove(){

  }
  madeRightMove(){

  }
  resetLeftMove(){

  }
  resetRightMove(){

  }
}
export default InputHandler;