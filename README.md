# SSAFY 8기 특화프로젝트 B108 '맞닥'\_ver2

- SSAFY 8기 특화프로젝트 B108 '맞닥'\_ver2
- [✔ Project Summary](#-project-summary)
  - 👩‍💻개발 기간 : 2023.02.27 ~ 2023.04.07
  - 🛠️리팩토링 기간 : 2023.06.05 ~ 2023.07.07
  * 🔗 [🛠️ 리팩토링](/DOCS/리팩토링.md)
  * 🔗 🎥[시연 영상](https://youtu.be/y8pSuRFYZq8)
- [✔ Information](#-information)
  - [메인 기능](#메인-기능)
    - [🏣 병원 검색](#-병원-검색)
    - [💊 약 검색](#-약-검색)
    - [📑 마이페이지](#-마이페이지)
  - [기대효과](#기대효과)
- [설계 및 산출물](#설계-및-산출물)

<br>
<br>

<p align="left">
<img src="DOCS/images/screenshots/main_main.png" width="32%" />
<img src="DOCS/images/screenshots/hospital_search.png" width="32%" />
<img src="DOCS/images/screenshots/drug_search.png" width="32%"/>
<p>

<br>

# ✔ Project Summary

### 👩‍💻개발 기간 : 2023.02.27 ~ 2023.04.07

[🔗 ver1 Repository](https://github.com/PengSaDan/Matdoc/tree/master-old)

<details>
<summary>팀원</summary>
<div markdown="1">

- 권지훈 (팀장) - Back-End, Front-End
- 이승민 - Back-End, ppt
- 조원희 - Back-End, Docs, presentation
- 한인환 - Front-End
- 송기라 - Front-End
- 안효관 - DevOps, Back-End

</div>
</details>

### 🛠️리팩토링 기간 : 2023.06.05 ~ 2023.07.07

- 권지훈 : 약 관련 부분 Back-End, Front-End
- 조원희 : 병원 관련 부분 Back-End, Front-End

## 🔗 [🛠️ 리팩토링](/DOCS/리팩토링.md)

## 🔗 🎥[시연 영상](https://youtu.be/y8pSuRFYZq8)

<br>

# ✔ Information

## 메인 기능

- 현 위치에서 **5km 이내에 영업중**인 병원 정보 제공
- **증상에 따른** 병원정보 제공
- 병원 및 의약품의 **자세한** 정보 제공
- 복용중인 **약 관리** 및 병원 **즐겨찾기**
  <br>
  <br/>

### 🏣 병원 검색

- 단어를 이용한 검색과, 버튼을 이용한 진료과목, 운영시간 다중선택을 중복적으로 이용해 병원을 검색할 수 있습니다.
- 결과 리스트를 거리순, 진료중 여부로 재정렬할 수 있습니다.

<p align="left">
<img src="DOCS/images/gif/맞닥_병원검색.gif" width="32%" />
<img src="DOCS/images/screenshots/hospital_list.png" width="32%" />
<img src="DOCS/images/screenshots/hospital_detail.png" width="32%"/>
</p>
<br/>

### 💊 약 검색

- 약 이름, 색상, 모양, 분할선, 식별문자를 중복적으로 이용해 약을 검색할 수 있습니다.

<p align="left">
<img src="DOCS/images/gif/맞닥_약검색.gif" 
width="32%"/>
<img src="DOCS/images/screenshots/drug_search.png" width="32%"/>
<img src="DOCS/images/screenshots/drug_detail.png" width="32%"/>
</p>

<br/>

### 📑 마이페이지

- 로그인한 유저는 찜한 병원, 약바구니, 나의 약봉지 서비스를 이용할 수 있습니다. 카카오로그인을 지원합니다.
- 병원명 옆 `+` 버튼을 눌러 병원을 즐겨찾기 할 수 있습니다. `✓` 버튼을 한 번 더 누르면 즐겨찾기가 해제됩니다.
- 약 이름 옆 `+` 버튼을 눌러 약 바구니에 약을 추가할 수 있습니다. 약 바구니에 추가된 약은 마이페이지에서 확인할 수 있습니다.
- 약 바구니에서 약들을 선택해 나의 약봉지로 만들 수 있습니다. 나의 약봉지는 약 관리를 위한 기능으로 제목과, 간단한 설명을 추가할 수 있습니다.

<p align="left">
<img src="DOCS/images/gif/맞닥_병원즐겨찾기.gif" width="32%"/>
<img src="DOCS/images/screenshots/main_main.png" width="32%" />
<img src="DOCS/images/gif/맞닥_약바구니.gif" width="32%"/>
</p>

<br/>

## 기대효과

---

- 아플 때 **신속하게** 원하는 조건의 병원을 찾을 수 있다.
- 의약품의 **성분** 및 **함께 복용하면 안 되는** 약을 확인함으로써 유용하게 **건강을 관리**할 수 있다.
- 병원 및 의약품의 자세한 정보를 **맞닥**에서 **한 번에** 알 수 있다.

![Untitled](DOCS/images/%EA%B8%B0%EB%8C%80%ED%9A%A8%EA%B3%BC.png)

<br>

# 설계 및 산출물

### 🏣 [기획서](./DOCS/맞닥_기획서.md)

### 📜 [기능명세서](./DOCS/기능명세서.md)

### 💾 [ERD](./DOCS/ERD.md)

### 📡 [API명세서](./DOCS/API명세서.md)

### 🔑 [DB컬럼설명](./DOCS/DB컬럼설명.md)

### 🗺 [아키텍쳐설계도](./DOCS/아키텍쳐.md)

### 🏹 [포팅메뉴얼](./DOCS/포팅메뉴얼.md)

<br>
