class ArrayMethods {
  clearAllPreviousLi(lis) {
    //deletes all previous lis created when clicked on a method
    lis.innerHTML = "";
  }

  createLiItems(arr) {
    //creates an li and assigns it as a child to already existed ul
    let ul = document.querySelector(".result-list");
    let li = document.createElement("li");
    li.classList.add("result-item");
    ul.appendChild(li);
    li.innerHTML = arr;
  }

  changeCardDescription(title, code, link) {
    const cardTitle = document.querySelector(".card-title");
    const cardCode = document.querySelector(".card-code");
    const cardLink = document.querySelector(".card-link");
    cardTitle.innerHTML = title;
    cardCode.innerHTML = code;
    cardLink.href = link;
  }

  filter(array) {
    //creates an example method
    const filterArr = array.filter((a) => a > 4);
    let code = `The filter() method creates a new array with array elements that passes a test
      myArray.filter((arr) => {
        return arr > 4;
      })
      `;
    let link = "https://getbootstrap.com/docs/4.4/components/tooltips/";
    //returns and displays the result
    return filterArr.map((arr) => {
      this.createLiItems(arr);
      this.changeCardDescription("Filter Array", code, link);
    });
  }

  map(array) {
    const mapArr = array.map((a) => a * 2);
    let code = `The map() method creates a new array by performing a function on each array element.
        The map() method does not execute the function for array elements without values.
        The map() method does not change the original array.

        myArray.map((arr) => {
          return arr * 2;
        })
        `;
    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map";
    return mapArr.map((arr) => {
      this.createLiItems(arr);
      this.changeCardDescription("Map Array", code, link);
    });
  }

  every(array) {
    const everyArr = array.every((a) => a > 10);
    let code = `The every() method check if all array values pass a test.

        myArray.every((arr) => {
          return arr > 10;
        })
          `;
    let link =
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every";
    return (
      this.createLiItems("All array elements are larger than 10 = false"),
      this.changeCardDescription("Every Array", code, link)
    );
  }

  forEach(array) {
    let displayArr = [];
    const forEachArr = array.forEach((a) => {
      displayArr.push(a);
    });
    console.log(forEachArr);
    let code = `The forEach() method calls a function (a callback function) once for each array element.

        myArray.forEach(el => {
            console.log(el)
        })
          `;
    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach";
    return displayArr.map((arr) => {
      this.createLiItems(arr);
      this.changeCardDescription("ForEach Array", code, link);
    });
  }

  some(array) {
    const someArr = array.some((a) => a > 3);
    let code = `The some() method checks if some array values pass a test.

        myArray.some((arr) => {
          return arr > 3;
        })`;
    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some";
    return (
      this.createLiItems(someArr),
      this.changeCardDescription("Some Array", code, link)
    );
  }

  find(array) {
    const findArr = array.find((a) => a * 2);
    let code = `The find() method returns the value of the first array element that passes a test function.

        myArray.find((arr) => {
          return arr === 7;
        })`;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find";
    return (
      this.createLiItems("Great! 7 is found!"),
      this.changeCardDescription("Find Array", code, link)
    );
  }
  reduce(array) {
    const reduceArr = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    let code = `The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

    const reducer = (accumulator, currentValue) => accumulator + currentValue;`;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce";
    return (
      this.createLiItems(reduceArr),
      this.changeCardDescription("Reduce Array", code, link)
    );
  }

  //Some other widely used array methods

  join(array) {
    const joinArr = array.join(" :) ");
    let code = `The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
    separated by commas or a specified separator string.
    If the array has only one item, then that item will be returned without using the separator.

    let array = ["Look", "at", "all", "the", "smiles!"];
    let joined = array.join(" :) ");`;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join";
    return (
      this.createLiItems(joinArr),
      this.changeCardDescription("Join Array", code, link)
    );
  }

  reverse(array) {
    const reverseArr = array.reverse();
    let code = `The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

    let pets = ["dog", "cat", "hamster"];`;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse";
    return reverseArr.map((arr) => {
      this.createLiItems(arr),
        this.changeCardDescription("Reverse Array", code, link);
    });
  }

  slice(array) {
    const sliceArr = array.slice(2, 4);
    let code = `The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
     where start and end represent the index of items in that array.
    The original array will not be modified.

    let pets = ["dog", "cat", "hamster", "bird", "fish"];
    pets.slice(2,4);
    `;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice";
    return sliceArr.map((arr) => {
      this.createLiItems(arr),
        this.changeCardDescription("Slice Array", code, link);
    });
  }

  splice(array) {
    const months = ["Jan", "March", "April", "June"];
    const spliceArr = months.splice(1, 0, "Feb");
    let code = `The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    `;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice";
    return months.map((month) => {
      this.createLiItems(month),
        this.changeCardDescription("Splice Array", code, link);
    });
  }

  sort(array) {
    const sortArr = array.sort();
    let code = `The sort() method sorts the elements of an array in place and returns the sorted array.
    The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

    `;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort";
    return sortArr.map((arr) => {
      this.createLiItems(arr),
        this.changeCardDescription("Sort Array", code, link);
    });
  }

  includes(array) {
    const includesArr = array.includes(8);
    let code = `TThe includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    const array1 = [1, 4, 7, 4, 8, 6];

    array1.includes(8)
    `;

    let link =
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes";
    return (
      this.createLiItems(includesArr),
      this.changeCardDescription("Includes Array", code, link)
    );
  }
}

const iterationMethods = new ArrayMethods();

const resultList = document.querySelector(".result-list");
const filterButton = document.querySelector(".filter");
const mapButton = document.querySelector(".map");
const everyButton = document.querySelector(".every");
const forEachButton = document.querySelector(".forEach");
const someButton = document.querySelector(".some");
const findButton = document.querySelector(".find");
const reduceButton = document.querySelector(".reduce");
const joinButton = document.querySelector(".join");
const reverseButton = document.querySelector(".reverse");
const sliceButton = document.querySelector(".slice");
const spliceButton = document.querySelector(".splice");
const sortButton = document.querySelector(".sort");
const includesButton = document.querySelector(".includes");

filterButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.filter([1, 4, 7, 4, 8, 6]);
});

mapButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.map([1, 4, 7, 4, 8, 6]);
});

everyButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.every([1, 4, 7, 4, 8, 6]);
});

forEachButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.forEach([1, 4, 7, 4, 8, 6]);
});
someButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.some([1, 4, 7, 4, 8, 6]);
});

findButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.find([1, 4, 7, 4, 8, 6]);
});

reduceButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.reduce([1, 4, 7, 4, 8, 6]);
});

joinButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.join(["Look", "at", "all", "the", "smiles!"]);
});

reverseButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.reverse(["dog", "cat", "hamster"]);
});

sliceButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.slice(["dog", "cat", "hamster", "bird", "fish"]);
});

spliceButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.splice(["Jan", "March", "April", "June"]);
});

sortButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.sort([1, 4, 7, 4, 8, 6]);
});

includesButton.addEventListener("click", () => {
  iterationMethods.clearAllPreviousLi(resultList);
  iterationMethods.includes([1, 4, 7, 4, 8, 6]);
});
