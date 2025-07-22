const customName = document.getElementById('customName');
const generate = document.getElementById('generate');
const story = document.getElementById('story');

function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const insertX = ['the spaghetti monster', 'a friendly alien', 'a talking duck'];
const insertY = ['in the Sahara desert', 'at a rock concert', 'inside a volcano'];
const insertZ = ['screamed loudly', 'danced salsa', 'turned into a banana'];

generate.addEventListener('click', () => {
  let newStory = `Once upon a time, :insertX: was spotted :insertY:. Everyone was shocked when it :insertZ:.`;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertX:', xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);

  if (customName.value !== '') {
    newStory = newStory.replace('Everyone', customName.value);
  }

  story.textContent = newStory;
});
