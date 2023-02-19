function helloString(message: string): string{
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들이 생겨난다.


function hello(message: any): any {
  return message;
}
console.log(hello("dong").length);
console.log(hello(28).length);
// any를 사용시 아무 타입의 데이터가 들어오게 된다.
// console.log(hello(28).length); 원래는 length를 사용하지 못 하지만 에러가 안뜨고 입력이 가능하다.
// 이렇게 된다면 컴파일에서는 괜찮지만 런타임에서  undefrined 가 나온다.
// 모든 타입을 받아서 모든 타입으로 return 해준다.
// 그래서 들어가는 타입을 변수같은걸로 활용을 해서 리턴된 타입의 연관을 시켜준다면 괜찮을거라는 생각이 들었고 그 아이디어에서 출발을 한게 generic이다.


function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("dong").length);  
//function helloGeneric<"dong">(message: "dong"): "dong"    결과물을 string 로 추론을 하게된다.
// console.log(helloGeneric(28).length);  
//unction helloGeneric<28>(message: 28): 28  결과물을 number 로 추론을 하게된다. 그러므로 에러가 나온다.
console.log(helloGeneric(true));
//function helloGeneric<true>(message: true): true   결과물을 boolean 으로 추론을 하게된다.

//들어오는 input에 따라 그 타입으로 output을 해준다.
