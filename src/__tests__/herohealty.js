import healthy from '../HeroHealthy';
// test("checked",()=>{
//     const res = 45
//     expect(res).toBe(45)
// })

// test('checked Herohealthy', () => {
//   const hero = { name: 'Маг', health: 16 };
//   const res = healthy(hero);
//   expect(res).toBe('wounded');
// });
const listData = [
  ['healthy', { name: '1', health: 90 }],
  ['wounded', { name: '1', health: 48 }],
  ['critical', { name: '1', health: 14 }],
  ['dead', { name: '1', health: 0 }],
];
const handler = test.each(listData);
handler('check  %s', (stat, heroAny) => {
  const res = healthy(heroAny);
  expect(res).toBe(stat);
});
