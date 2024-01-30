import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(protected player: Fighter, protected environment:(SimpleFighter | Fighter)[] = []) {
    super(player);
  }

  override fight(): number {
    while (this.player.lifePoints >= 0) {
      this.environment.forEach((monster) => this.player.attack(monster));
      this.environment.forEach((monster) => monster.attack(this.player));
    }

    return super.fight();
  }
}

export default PVE;