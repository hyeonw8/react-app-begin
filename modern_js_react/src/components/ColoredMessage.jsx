export const ColoredMessage = (props) => {
  //props 분할 대입
  const {color, children} = props;

  const contentStyle = {
    //color : color, => 객체 생략 표기법 규칙
    color, 
    fontSize : '20px',
  };

  return <p style={contentStyle}>{children}</p>
}