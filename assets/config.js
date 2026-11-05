/* ============================================================
   사이트 설정 — GitHub 저장소 방식
   ------------------------------------------------------------
   자료실 파일은 이 저장소의 files/ 폴더에 보관합니다.
   파일을 올리면 GitHub API로 자동 인식되어 사이트에 표시됩니다.
   (별도 서버·DB 없음, 무료, 절대 잠들지 않음)

   저장소를 만든 뒤 아래 GITHUB_OWNER 를 본인 GitHub 아이디로 바꾸세요.
   설정 전에는 사이트가 자동으로 '데모 모드'로 동작합니다.
============================================================ */
window.APP_CONFIG = {
  // 완성된 연구보고서 공개 시 true로 변경합니다. 기존 저장 파일은 유지합니다.
  REPORTS_READY: true,
  // 공개할 보고서만 명시합니다. 폴더의 기존 보관 파일은 자동 공개하지 않습니다.
  REPORT_FILES: [
  {
    "name": "20261102. 연구학교 결과보고서(강진중앙초)_인쇄본.pdf",
    "title": "2026. 연구학교 결과보고서",
    "description": "하이터치-하이테크(HTHT) 수업 네비게이터를 통한 학생 주도성 기르기",
    "pages": 63,
    "size": 3680923,
    "view_url": "files/reports/research-report-2026-11-02.pdf",
    "download_url": "files/reports/research-report-2026-11-02.pdf"
  },
  {
    "name": "2026. AI·디지털 기반 교수·학습 혁신 연구학교 계획서(강진중앙초)_최종.pdf",
    "title": "2026. 연구학교 계획서",
    "description": "AI·디지털 기반 교육자료 활용 교수·학습 혁신 연구학교 운영 계획 · 2026. 4.",
    "pages": 24,
    "size": 7547241,
    "view_url": "files/reports/research-plan-2026.pdf",
    "download_url": "files/reports/research-plan-2026.pdf"
  }
],
  GITHUB_OWNER:  "phdkim0244-droid",   // 본인 GitHub 아이디
  GITHUB_REPO:   "gangjin-research-hub",   // 저장소 이름
  GITHUB_BRANCH: "main",

  // 자료 분류 → 폴더 경로. 이 폴더에 파일을 올리면 해당 탭에 자동 표시됩니다.
  FOLDERS: {
    report: "files/reports",  // 연구보고서
    form:   "files/forms",    // 각종 서식
  },
};


