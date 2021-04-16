new Set([1, 1, 2, 2, 3, 4]);
// Set(4) {1, 2, 3, 4}

[...new Set("referee")].join("");
// ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// m = Map {1, 2, 3] => true, [1, 2, 3] => false};

const hasDuplicate = (arr) => {
  const arrAsSet = new Set(arr);
  return arrAsSet.size === arr.length ? false : true;
};

const isVowel = (str) => {
  const vowelsAsArr = [..."aeiou"];
  if (vowelsAsArr.indexOf(str) !== -1) {
    return true;
  } else {
    false;
  }
};

const vowelCount = (str) => {
  const strAsArr = str.toLowerCase().split("");
  const vowelMap = new Map();
  strAsArr.forEach((element) => {
    if (isVowel(element)) {
      if (vowelMap.has(element)) {
        vowelMap.set(element, vowelMap.get(element) + 1);
      } else {
        vowelMap.set(element, 1);
      }
    }
  });
  return vowelMap;
};
