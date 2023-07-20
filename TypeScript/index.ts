import axios from 'axios';

// Example GET request
async function getAll(): Promise<void> {
  let x = await axios
    .get('https://api.github.com/users/NAYANKUMAR21')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(x);
}
getAll();
let name: string = 'nayan';
let kumar: number = 0;
let arrat: number[] = [1, 2, 3];
let string: string[] = ['nayan', 'kumar'];

