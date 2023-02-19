function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("dong", 28);  //직접 타입을 지정하는 방법
helloBasic(36,39);  // 값의 의해서 T가 추론이 된다.