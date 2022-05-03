import Button from '../Atoms/Button';
import styled from "styled-components";
import { IoLocationSharp } from 'react-icons/io5';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationPage = () => {
  const navigate = useNavigate();
  const geoPosition = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position)
        navigate('/mainpage')
      },
      function (error) {
        navigate('/location');
        console.error(error);
      },
    );
  };
  // 버튼을 클릭하면 위치정보 동의 요청
  // 동의가 수락되면 메인페이지로 이동
  // 거절한다면 페이지 유지
  return (
    <BackGround>
      <TitleTag>
        위치 정보를 켜면{"\n"}
        다른 사람들의 하트를{"\n"}
        받아볼 수 있어요!
      </TitleTag> 
      <Button
        width="160px"
        height="40px"
        bgColor="white"
        textColor="black"
        fontSize="12px"
        icon={<IoLocationSharp />}
        shadow
        onClick={geoPosition}
      >
        위치 정보 켜기
      </Button>
    </BackGround>
  )
}

const TitleTag = styled.p`
  white-space: pre-line;
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 40px;
`
const BackGround = styled.div`
  background: linear-gradient(197.56deg, #63DAE2 0%, #7FADE8 100%);
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default LocationPage;