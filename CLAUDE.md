# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어로 답변
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어로 작성 (표준 코드 컨벤션 준수)

## 프로젝트 개요

의류 쇼핑몰 웹사이트 (Spring Boot MVC + Thymeleaf + Oracle DB)

## 빌드 및 실행

```bash
# 서버 실행
mvn spring-boot:run

# 빌드 (jar 생성)
mvn clean package

# 테스트 실행
mvn test

# 단일 테스트 실행
mvn test -Dtest=클래스명
```

서버 실행 후 http://localhost:8080 접속

## 아키텍처

**패턴**: Spring MVC — Controller → Service → Repository → Oracle DB

**렌더링**: 서버사이드 렌더링 (Thymeleaf). 정적 자원은 `src/main/resources/static/`에 위치.

**핵심 흐름**:
- 요청 → `controller/` 에서 처리
- 비즈니스 로직 → `service/`
- DB 접근 → `repository/` (Spring Data JPA)
- 뷰 → `resources/templates/*.html` (Thymeleaf)

## 주요 경로

| 경로 | 설명 |
|------|------|
| `src/main/java/com/shop/controller/` | MVC 컨트롤러 |
| `src/main/java/com/shop/service/` | 서비스 레이어 |
| `src/main/java/com/shop/repository/` | JPA 리포지토리 |
| `src/main/java/com/shop/entity/` | JPA 엔티티 |
| `src/main/resources/templates/` | Thymeleaf HTML 템플릿 |
| `src/main/resources/static/css/` | 스타일시트 |
| `src/main/resources/static/js/` | 클라이언트 스크립트 |
| `src/main/resources/static/images/` | 이미지 파일 |

## DB 설정

`application.properties`의 Oracle 연결 정보를 실제 환경에 맞게 수정 필요:
```
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=your_username
spring.datasource.password=your_password
```

DB 미연결 상태에서 실행 시 `application.properties`의 `spring.autoconfigure.exclude` 설정이 DataSource 자동 구성을 비활성화함.

## 디자인 시스템

다크 테마 CSS 변수 (`style.css`):
- `--bg-primary: #111111` — 전체 배경
- `--bg-secondary: #1a1a1a` — 보조 섹션 배경
- `--text-primary: #f0f0f0` — 기본 텍스트
- `--text-secondary: #888888` — 보조 텍스트
- 폰트: Playfair Display (로고/타이틀), Noto Sans KR (본문)
