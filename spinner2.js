const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let index = 0;
function recursion(index) {
  if (index >= animation.length) {
    return process.stdout.write('\n')
  }
  setTimeout(() => {
    process.stdout.write(animation[index]);
    recursion(index = index + 1);
  }, 200);
} 
recursion(index);