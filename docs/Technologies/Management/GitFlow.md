# What is Git Flow?
English | [한국어](./GitFlow-kr.md)

# How to join project?
## Fork project to your own github account.
## Setting local & remote repository.
- Clone or Connect your local repo to remote repo that forked the project.

## You have to install git flow in you local enviroment and follow git flow's common process.

### Common Process of Git Flow

- feature
    - start ```$ git flow feature start [branch-name]```
        - Name branch-name relate to feature that you work on.
    
    - finish
        - Leave commit by Working task.
        - After all work ```$ git flow feature finish [branch-name]```

- push to your remote repo that forked.
    - Request pull request. Write an issue number in title. 

- release
