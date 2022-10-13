# What is Git Flow?
[English](./GitFlow.md) | 한국어

# 프로젝트에 어떻게 참여할 수 있나요?
## 자신의 깃헙 계정에 이 프로젝트를 Fork하세요.
## 로컬과 원격 저장소를 설정하세요.
- 로컬 저장소와 프로젝트에 fork한 원격 저장소를 clone 하거나 연결하세요.

## 깃 플로우를 로컬 환경에 설치해주세요. 깃 플로우 일반적인 과정을 따라주세요.

### 깃 플로우 일반적인 과정

- feature
    - start ```$ git flow feature start [branch-name]```
        - 브랜치 이름을 진행하려는 작업과 관려된 이름으로 지어주세요.
    
    - finish
        - 커밋은 동작하는 단위로 남겨주세요.
        - 작업이 끝난 후에 ```$ git flow feature finish [branch-name]``` 로 마무리지어주세요.

- fork한 저장소에 push 해주세요.
    - pull request를 요청하세요. 제목에 이슈 넘버를 넣어주세요. 