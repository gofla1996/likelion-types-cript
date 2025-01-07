// ------------------------------------------------------------------------------
// 📌 DOM 타입 정의(DOM Type Declaration)
// ⭐️ URL : https://bit.ly/3E3l4yz
// ------------------------------------------------------------------------------
// - TypeScript를 사용해 문서 객체 모델(DOM)을 사용할 경우, 적절한 타입을 지정해야 합니다.
// ------------------------------------------------------------------------------

// body가 참조하는 타입을 지정합니다.
// TypeScript는 body가 다양한 타입인 점을 감안해 사용자에게 오류가 발생할 수 있음을 경고합니다.
// body의 타입이 객체인지 여부에 따라 조건 처리되도록 구현하여 TypeScript가 오류를 표시하지 않도록 합니다.

{
  const body = document.querySelector("body") as HTMLBodyElement; // 개발자: <body>
  // const unkownElement = document.querySelector('.demo .target .element'); // ???
  // unkownElement?.addEventListner('pointermove, () -> {}'); // 아 놓침..

  // body 변수 참조 값이 null이 아닌 경우에 아래 코드 실행
  // if(body) {
  body.addEventListener("click", (e) => {
    console.log("clicked body element");
  });
  // }
}
