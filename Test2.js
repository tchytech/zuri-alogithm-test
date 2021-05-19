const checkYuGiOh = (n) => {
 
  if (typeof n === "string" && isNaN(n)) return `invalid parameter: ${n}`;

  if (typeof n === "number") {
    const myNewlyFormed = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
        myNewlyFormed.push(i);
      }

      if (i % 2 === 0) {
        myNewlyFormed.push("yu");
        if (i % 5 === 0) {
          myNewlyFormed[myNewlyFormed.length - 1] = "yu-oh";
        }

        if (i % 3 === 0) {
          myNewlyFormed[myNewlyFormed.length - 1] = "yu-gi";
          if (i % 5 === 0) {
            myNewlyFormed[myNewlyFormed.length - 1] = "yu-gi-oh";
          }
        }
      }

      if (i % 2 == 0 && i % 3 === 0) {
      } else {
        if (i % 3 === 0) {
          myNewlyFormed.push("gi");
          if (i % 5 === 0) {
            myNewlyFormed[myNewlyFormed.length - 1] = "gi-oh";
          }
        }
      }

      if (i % 2 == 0 && i % 5 === 0) {
      } else {
        if (i % 3 == 0 && i % 5 === 0) {
        } else {
          if (i % 5 === 0) {
            myNewlyFormed.push("oh");
          }
        }
      }
    }
    return myNewlyFormed;
  }
};

const sol1 = checkYuGiOh("fizzbuzz is meh");
const sol2 = checkYuGiOh(10);
const sol3 = checkYuGiOh(5);

console.log(sol1);
console.log(sol2);
console.log(sol3);