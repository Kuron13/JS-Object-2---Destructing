// TODO: write your code here

console.log('worked');

export default function getSpecialAttaks (char) {
  const attacksList = []

  const { special } = char
  for (const attackIndex in special) {
    const {id, name, icon, description = 'Описание недоступно'} = special[attackIndex];
    attacksList.push({id: id, name: name, icon: icon, description: description});
  }

  console.log(attacksList)
  return attacksList;
}