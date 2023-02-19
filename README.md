# generic

## generic, any 다른점

```ts
function hello(message: any): any {
  return message;
}
console.log(hello("dong").length);
console.log(hello(28).length);
```

```plaintext
any를 사용시 아무 타입의 데이터가 들어오게 된다.
console.log(hello(28).length); 원래는 length를 사용하지 못 하지만 에러가 안뜨고 입력이 가능하다.
이렇게 된다면 컴파일에서는 괜찮지만 런타임에서  undefrined 가 나온다.
모든 타입을 받아서 모든 타입으로 return 해준다.
그래서 들어가는 타입을 변수같은걸로 활용을 해서 리턴된 타입의 연관을 시켜준다면 괜찮을거라는 생각이 들었고
그 아이디어에서 출발을 한게 generic이다.
```

```ts
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric("dong").length);  
//function helloGeneric<"dong">(message: "dong"): "dong"    
//결과물을 string 로 추론을 하게된다.

console.log(helloGeneric(28).length);  
//unction helloGeneric<28>(message: 28): 28  결과물을 number 로 추론을 하게된다. 
//그러므로 에러가 나온다.

console.log(helloGeneric(true));
//function helloGeneric<true>(message: true): true   
//결과물을 boolean 으로 추론을 하게된다.
```

```plaintext
들어오는 input에 따라 그 타입으로 output을 해준다.
```

## generic Basci

```ts
function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("dong", 28);  //직접 타입을 지정하는 방법
helloBasic(36,39);  // 값의 의해서 T가 추론이 된다.
```

## generics Array & Tuple

```ts
////Array////
function helloArray<T>(message: T[]): T {
  return message[0];
}
helloArray(["Hello", "world"]);
//function helloArray<string>(message: string[]): string
helloArray(["Hello", 5])
//function helloArray<string | number>(message: (string | number)[]): string | number
//union 타입으로 나온다.


////Tuple////
function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}
helloTuple(["Hello", "world"]);
//function helloTuple<string, string>(message: [string, string]): string
helloTuple(["Hello", 5]);
//function helloTuple<string, number>(message: [string, number]): string
```