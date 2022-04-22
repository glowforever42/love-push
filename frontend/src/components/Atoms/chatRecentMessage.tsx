// 페이지 내부에서 가장 최근에 받은 메세지 계속 갱신
// 0.5초 ?

const ChatRecentMessage = () => {

//   const [recentMessage, setRecentMessage] = useState('');
//   const 
// 채팅 리스트를 받아오는 컴포넌트에서 가져오도록
// 가장 최근 메세지를 넘겨달라고 하좌
// 채팅 리스트 쪽에서 채팅을 다 받아오면 좀 무거워져서 랜더링이 늦을거같음.
// API를 한개 만들어서 최근 메세지하고 안읽은 메세지의 개수를 같이 전달해주는 형식이 맞을것 같음.
// 주호가 채팅을 어떻게 했는지를 파악하고 해야하는 문제.
//   useEffect(()=> {
//     
//   })
// 마지막 메세지는 메시지 object 안에 있는 거에서 찾아서 넣으면 되겠넴.
// 있는것 - > 메세지 타입, 메세지 고유번호 (없을 수도 있음), 방 고유번호, 전송한 사람(ID) , 내용 (Content) .
// 채팅방 미리보기는 마지막꺼를 바인드 해주면 될듯 채팅양이 20개 날아오니까.
// 채팅 내부 -> 기능 부분은 주호가 완성해서 줄것.

// 프론트랑 백 둘다 붙어야하는 부분...을 작업중.
// 완성 할 때마다 얘기를 해줌.
// 데이터를 주고 받고 하는 부분은 줄 것이다.
// { id : 123
//   content: '안녕'
//   sendtime(createAt): 01:00 
// }
  return (
    <div>
      <h1>가장 최근에 받은 메세지</h1>
      <h1>안녕</h1>
    </div>
  )
}

export default ChatRecentMessage;