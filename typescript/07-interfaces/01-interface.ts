// ------------------------------------------------------------------------------
// 📌 인터페이스 (Interfaces)
// ⭐️ URL : https://bit.ly/3hxqF8J
// ------------------------------------------------------------------------------
// - 인터페이스는 타입 별칭과 같은 목적으로 사용되지만, 문법 구문이 다릅니다.
// - 인터페이스를 사용해 객체의 모양을 설명하는 제사용 가능한 모듈형 타입을 생성할 수 있습니다.
// ------------------------------------------------------------------------------

// Point 타입을 인터페이스로 변경해봅니다.

{
  // Type Alias
  type PointOne = {
    x: number;
    y: number;
  };

  // Interface
  interface PointTwo {
    x: number;
    y: number;
  }

  let pointOne: PointOne = { x: 10, y: 0 };
  let pointTwo: PointTwo = { x: -10, y: -5 };
}

// Person 타입을 인터페이스로 변경해봅니다.

{
  // type Person = {
  //   name: string;
  //   age: number;
  //   gender: "남성" | "여성";
  // };

  interface Person {
    name: string;
    age: number;
    gender: "남성" | "여성";
  }

  const sayHappyBirthDay = (person: Person): string => {
    return `${person.name}! ${person.age} 번째 생일을 생일 축하해! 🎉`;
  };

  const suyeon = {
    name: "이수연",
    age: 36,
    gender: "여성",
  };

  console.log(sayHappyBirthDay(suyeon as Person));
}
