
/*
--------------------------------------------------------------------------

g cache: "no-store"  

- 실시간으로 **매번 최신 데이터**가 필요할 때
- 예: 관리자 페이지, 유저 대시보드, 실시간 로그, 실시간 가격

!### 코드
export async function getLiveData() {
    return fetch("https://api.example.com/live", {
        cache: "no-store",
    }).then((res) => res.json());
}
!###

- 기본 fetch는 자동 캐싱이 되기 때문에 **한 번 불러오면 그대로 유지됨**
- 이걸 무조건 **매번 fresh하게 불러오려면** `no-store` 써줘야 함

--------------------------------------------------------------------------

g next: { revalidate: N } 

- **자주 바뀌진 않지만**, 일정 주기로 업데이트되어야 할 때
- 예: 뉴스 기사 목록, 인기 상품 리스트, 홈 페이지 배너 등

!### 코드
export async function getPopularItems() {
    return fetch("https://api.example.com/popular", {
        next: { revalidate: 30 }, // 30초에 한 번 백그라운드 업데이트
    }).then((res) => res.json());
}
!###

- Next.js가 **백그라운드에서 자동으로 새로 고침** 처리해줌 (ISR)
- 사용자는 빠른 정적 페이지 + 개발자는 자동 갱신 이득

--------------------------------------------------------------------------

g cache: "force-cache"

- **빌드 시점**에 한 번 받아오고, 바뀌지 않는 데이터
- 예: 고정된 회사 소개, 이용약관, 정책 문서 등

!### 코드
export async function getTermsOfService() {
    return fetch("https://api.example.com/terms", {
        cache: "force-cache",
    }).then((res) => res.json());
}
!###

- 완전 정적 데이터는 캐싱해서 빠르게 제공하는 게 이득
- fetch 기본값이 이거지만 **명시하면 더 명확해짐**

--------------------------------------------------------------------------

g revalidateTag("tag")

- 어떤 **이벤트 발생 후에만** 특정 fetch 결과를 다시 가져오고 싶을 때
- 예: 글 작성 후 목록 다시 불러오기

!### 코드
export async function getPosts() {
    return fetch("https://api.example.com/posts", {
        next: { tags: ["posts"] }, // 태그 기반으로 캐싱
    }).then((res) => res.json());
}

import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

export async function revalidatePosts() {
    
    ? ... db 업데이트 코드가 있다고 가정

    revalidateTag("posts"); // 해당 태그 캐시 무효화 → 다음 요청은 fresh

    ? 우선 순위를 미루는 기능 ... 업데이트 이후 코드가 실행되어야 하므로 필요
    startTransition(() => {
        router.refresh(); // 서버 컴포넌트 재실행 → fresh fetch
    });
    ? useTransition을 사용하면 isPending(로딩)값을 받을 수 있어서 리프레시가 될 때 까지 로딩창을 보여줄 수 있음
    ? const [isPending, startTransition] = useTransition(); 
}
!###

- 직접적인 이벤트(글 작성 등) 후 캐시 강제 리셋
- `revalidateTag` = **정확하게 필요한 fetch만** 다시 하게 만듦 → 퍼포먼스 굿

--------------------------------------------------------------------------

g `POST`, `PATCH` 등 메서드 바꾸기 + 헤더 설정  

- 데이터를 서버에 보낼 때
- 예: 회원가입, 댓글 작성, 유저 정보 수정

!### 코드
export async function postComment(postId: string, content: string) {
    return fetch(`https://api.example.com/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
    });
}
!###

- Next.js 서버 컴포넌트는 GET 외 메서드는 클라이언트에서 실행해야 함
- 이 구조는 클라이언트 컴포넌트 + `useTransition`, `onSubmit`이랑 잘 어울림

--------------------------------------------------------------------------

g 마무리 요약 표
| 실시간 데이터 | `cache: "no-store"` | 대시보드, 실시간 로그 |
| 주기적 리페치 | `next: { revalidate: N }` | 인기글, 홈 배너 |
| 정적 캐시 | `cache: "force-cache"` | 회사소개, 약관 |
| 수동 리페치 | `next: { tags: [...] }` + `revalidateTag()` | 글 작성 후 목록 |
| 데이터 전송 | `method`, `headers`, `body` | POST, PATCH 요청 |
*/

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {

    try {

        const fetchData = await fetch(
            URL,
            {
                next: {
                    revalidate: 600
                }
            }
        );

        const res = await fetchData.json();

        return res;

    } catch (error) {

        console.error(error);
    }
}