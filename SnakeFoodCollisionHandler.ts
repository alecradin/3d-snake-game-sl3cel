import CollisionHandler from './CollisionHandler';
import Snake from './Snake';
import Food from './Food';
class snakeFoodCollisionHandler {
snake: Snake;
food: Food;
applyAction(){
  this.food.eat;
  this.snake.grow;
}
}
export default SnakeFoodCollsionHandler;