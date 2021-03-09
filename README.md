# 블랙서바이벌 전적검색/기록 어플리케이션
[링크](https://eeong-blacksurvival.web.app)
## 개발 스택

- 백엔드	
	- Node.js, Express, AWS EC2, Nginx, letsencrypt

- 데이터베이스
	- MongoDB, Mongoose

- 프론트엔드	
	- Vue.js, Vuerouter

- 퍼블리싱
	- Semantic UI

## 구조

 1. 게임 랭크 확인, 전적 검색, 아이템 빌드를 제작, 저장할 수 있는 앱.

 2. Node - Express 프레임워크 기반 서버 개발.

 3. cors로 교차출처 프로세스 지원.

 4. Vue 클라이언트 단에서 들어오는 요청 처리.	
	- 전적/랭크: 받은 요청을 fetch로 처리하여 api의 컨텐츠를 Vue에 전달.
	- 기록: 작성,읽기,수정,삭제 등의 요청을 받으면 해당 라우터에서 mongoose의 model을 통해 데이터베이스에 요청.
	- 아이템: 앞단에서 특정아이템 혹은 목록을 요청하면 MongoDB에 요청하여 데이터를 받아옴

 5. AWS EC2 인스턴스에 Node - Express 서버 배포.

 6. AWS EC2 인스턴스에 MongoDB 설치 및 클라이언트 실행.

 7. Vue에선 axios로 배포된 서버와 통신.

 8. vue-router로 컴포넌트, 루트 관리.

 9. vue-cli로 배포 및 테스트, 트랜스파일러는 Babel, 번들러는 WebPack 사용.

 10. 빌드된 프로젝트를 firebase로 배포.

 11. firebase로 배포된 앱은 https 프로토콜을 사용하므로 http로 빌드된 서버와 통신하기위해 EC2의 Node 서버에 인증서 발급. 

 12. Nginx를 프록시 서버로 사용하여 도메인과 uri에 api요청을 보내면 Node 서버로 포트포워딩.