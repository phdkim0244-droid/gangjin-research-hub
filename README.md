# 강진중앙초 연구학교 운영 홍보 · 자료실

하이터치-하이테크(HTHT) 수업 네비게이터를 통한 학습자 주도성 기르기 — 연구학교 운영을 소개하고 자료를 공유하는 단일 페이지 웹앱입니다.

- **홍보:** 연구 개요 · 3대 과제 · 비전 · 학습자 주도성 인포그래픽
- **자료실:** 연구보고서(파일) · 수업자료(외부 링크) · 각종 서식(파일)
- **기술:** 단일 `index.html` + **GitHub 저장소에 파일 보관** + GitHub Pages 배포
- **서버·DB 없음 → 무료, 항상 켜짐, 절대 잠들지 않음**

파일을 `files/` 폴더에 올리면 GitHub API로 **자동 인식**되어 사이트 목록에 나타납니다. 별도 로그인·업로드 서버가 필요 없습니다.

---

## 폴더 구조
```
index.html            앱 전체(홍보 + 자료실)
assets/config.js      설정(내 GitHub 아이디 등)
files/reports/        연구보고서 → 이 폴더에 파일을 올리면 '연구보고서' 탭에 표시
files/forms/          각종 서식   → 이 폴더에 올리면 '각종 서식' 탭에 표시
```
> 새 분류를 추가하려면 `files/` 아래 폴더를 만들고 `config.js` 의 `FOLDERS` 에 등록하면 됩니다.

## 배포 (GitHub Pages) — 5분
1. GitHub에서 새 저장소 생성 (예: `gangjin-research-hub`, **Public**)
2. 이 폴더 전체를 저장소에 올리기 (GitHub 웹의 **Add file → Upload files** 로 드래그해도 됨)
3. `assets/config.js` 를 열어 **`GITHUB_OWNER`** 를 본인 GitHub 아이디로 수정
   ```js
   window.APP_CONFIG = {
     GITHUB_OWNER:  "phdkim0244",          // ← 본인 아이디
     GITHUB_REPO:   "gangjin-research-hub", // 저장소 이름과 동일하게
     GITHUB_BRANCH: "main",
     FOLDERS: { report: "files/reports", form: "files/forms" },
   };
   ```
4. **Settings → Pages → Branch: main / root** 선택 → 저장
5. 1~2분 뒤 `https://<아이디>.github.io/gangjin-research-hub/` 공개

## 자료 추가·삭제
- **추가:** GitHub 저장소에서 `files/reports`(또는 `files/forms`) 폴더 → **Add file → Upload files** → 파일 드래그 → **Commit changes**. 1~2분 뒤 사이트에 자동 표시.
- **삭제/이름변경:** 같은 폴더에서 파일을 열고 휴지통 아이콘 또는 이름 수정 후 Commit.
- **파일 이름이 곧 자료 제목**이 됩니다. `_`(밑줄)는 사이트에서 공백으로 표시됩니다.

## 로컬에서 보기
```bash
python3 -m http.server 3200
```
→ http://localhost:3200 (로컬에서는 GitHub 목록 대신 데모 예시가 보입니다. 배포 후 실제 파일이 표시됩니다.)

## 자료 분류
| 탭 | 내용 | 방식 |
|----|------|------|
| 운영 개요 | 연구 전반 인포그래픽 | 페이지 내장 |
| 연구보고서 | 계획서·중간보고서 | `files/reports/` 파일 |
| 수업자료 | HTHT 네비게이터 · 수업자료실 | 외부 링크 |
| 각종 서식 | 서식 자료 | `files/forms/` 파일 |

## 참고 — GitHub API 한도
자료 목록은 GitHub 공개 API로 읽습니다(비로그인 시 IP당 시간당 60회). 소규모 홍보 사이트에는 충분하며, 방문이 많아지면 목록을 캐시하거나 정적 목록으로 전환할 수 있습니다.
