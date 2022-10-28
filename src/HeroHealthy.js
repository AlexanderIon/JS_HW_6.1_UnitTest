export default function healthy(hero) {
  if (hero.health >= 50) {
    return 'healthy';
  }
  if (hero.health >= 15 && hero.health < 50) {
    return 'wounded';
  }
  if (hero.health < 15 && hero.health > 0) {
    return 'critical';
  }

  return 'dead';
}
