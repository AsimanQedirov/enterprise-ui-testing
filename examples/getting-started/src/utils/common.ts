export const getGreater = (a: number, b: number): number => {
  return a > b ? a : b;
}


export const fizzBuzz = (n : number) : string => {
  if(n % 3 === 0 && n % 5 === 0)
    return "FizzBuzz";
  if(n % 3 === 0)
    return "Fizz";
  if(n % 5 === 0)
    return "Buzz";
  return n.toString();
}

export const factarial = (num : number) : number => {
  if(num === 1 || num == 0) return 1;
  return num * factarial(num - 1);
}

export const fetchData = async () => {
  return new Promise((resolve , _reject) => {
    resolve('Finished');
  });
}
export const fetchComplexData = async () => {
  return new Promise((resolve , _reject) => {
    resolve({
      status : 200,
      data : {
        id : 1,
        name : "John"
      },
      message : "Success"
    });
  });
}
export const rejectedData = async () => {
  return new Promise((resolve , reject) => {
    reject('Failed');
  });
}