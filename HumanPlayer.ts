import Player from "./Player";
import InputHandler from "./InputHandler";
import SnakeController from "./SnakeController";

class HumanPlayer {
  p : Player;
  ih : InputHandler;
  sc : SnakeController
  constructor(){
    this.ih = InputHandler;
    this.sc = SnakeController;
  }
} 
export default HumanPlayer;