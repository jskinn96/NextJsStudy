
export default function Loading() {

    //g page.tsx에서 영화 데이터를 받기 전 까지 로딩 표식을 띄운다. 로딩은 경로 마다 영역을 가지므로 / < 영역 전용이기에 다른 라우팅 페이지에는 작동 하지 않음
    return (
        <h1>Home Loading...</h1>
    );
} 