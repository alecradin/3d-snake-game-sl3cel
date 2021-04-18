import Snake from './Snake';
import Food from './Food';
import Actor from './Actor';
import SnakeFoodCollisionHandler from "./SnakeFoodCollisionHandler";
import SnakeSnakeCollisionHandler from "./SnakeSnakeCollisionHandler";
class actorCollisionHandlers {
  snake: Snake;
  food: Food;
  pairs: any;
  constructer(){
    this.pairs = new Map();
  }
  toKey(colliderType: Actor, collidedType: Actor){
    return colliderType + ", " + collidedType;
    }
    addCollisionAction(colliderType, collidedType, actionApplicator){
      Map.set(colliderType,actionApplicator);
    }
    hasCollisionAction(colliderType, collidedType){
      Map.has(colliderType, collidedType);
    }
    applyCollisionAction(collider, collided){
      Map.get(collider, collided);
    }
    newActorCollisionHandlers(colliderType: SnakeFoodCollisionHandler, colidedType: SnakeSnakeCollisionHandler){

    }
}
export default ActorCollisionHandlers;