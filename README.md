<img width="314" height="108" alt="image" src="https://github.com/user-attachments/assets/8e95b194-1d5f-4090-8b98-d3161c015d0b" />

---
통합과학 원소기호 퀴즈 웹, 큐즈의 프론트엔드 레포지토리입니다.

<br>

## 프로젝트 개요
원소 기호를 기반으로 한 과학 퀴즈 웹

주요 기능:
  * 원소 기호 퀴즈
  * 점수 기록 및 랭킹
---
설치 방법
```bash
git clone https://github.com/QUEZ-science/Quez-FE
cd Quez-FE
npm install
npm run dev
```

## 브랜치 전략
* `main` : 항상 배포 가능한 상태로 유지
* `dev` : 모든 개발 작업의 기준 브랜치
* 이외 : 기능/버그 별 브랜치 생성 후 dev에 pr

  ```bash
  git checkout dev
  git checkout -b feat/login
  git checkout -b fix/header-bug
  ```
<br>

## 커밋 컨벤션
| 타입 | 설명 | 예시 |
|------------|------|------|
| `feat`     | 기능 추가 | `feat: 로그인 기능 구현` |
| `fix`      | 버그 수정 | `fix: 헤더 클릭 시 오류 수정` |
| `docs`     | 문서 수정 | `docs: README 업데이트` |
| `style`    | 코드 포맷, 스타일 변경 | `style: 버튼 색상 변경` |
| `refactor` | 코드 리팩토링 | `refactor: 로그인 로직 리팩토링` |
| `test`     | 테스트 추가, 수정 | `test: 로그인 테스트 케이스 추가` |
| `chore`    | 빌드, 환경 설정, 기타 | `chore: 패키지 업데이트` |

## PR 생성
1. GitHub에서 dev브랜치로 PR생성
2. 제목: 커밋 메시지 스타일로 간단하게 작성
3. PR 본문: 무엇을 변경했는지, 왜 변경했는지 작성
4. 리뷰 요청, 승인 후 dev 브랜치에 merge

## PR 규칙
1. main 브랜치에 직접 Merge 금지
2. 기능 단위 브랜치 사용
3. PR과정에서 코드 리뷰
