const URL = 'https://www.omdbapi.com/?i=tt1285016&apikey=9aea0f73';

const getMovies = async () => {
  const result = await fetch(URL);
  const json = await result.json();
  console.log(json);
};
// getMovies();
export default getMovies;

const uid = () =>
  String(Date.now().toString(32) + Math.random().toString(16)).replace(
    /\./g,
    ''
  );
// console.log(uid());
// console.log('not asynchronous work');
// const button = document.createElement('button');
// button.classList.add('btn', 'btn-primary');
// button.innerHTML = 'Submit';
// document.body.append(button);
