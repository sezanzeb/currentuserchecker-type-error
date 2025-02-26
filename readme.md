https://github.com/typestack/routing-controllers/issues/1495

```
yarn
yarn build
```

```
➜  currentuserchecker git:(main) yarn build
yarn run v1.22.22
$ tsc --project src/tsconfig.prod.json
src/http-service.ts:18:3 - error TS2322: Type '() => Promise<User | null>' is not assignable to type 'CurrentUserChecker'.
  Type 'Promise<User | null>' is not assignable to type 'User | Promise<User | null> | null'.
    Type 'Promise<import("/mnt/data/Code/currentuserchecker/src/user").User | null>' is not assignable to type 'Promise<User | null>'.
      Type 'import("/mnt/data/Code/currentuserchecker/src/user").User | null' is not assignable to type 'User | null'.
        Type 'import("/mnt/data/Code/currentuserchecker/src/user").User' is not assignable to type 'User'.
          'User' could be instantiated with an arbitrary type which could be unrelated to 'import("/mnt/data/Code/currentuserchecker/src/user").User'.

18   currentUserChecker: async () => await getCurrentUser(),
     ~~~~~~~~~~~~~~~~~~


Found 1 error in src/http-service.ts:18

error Command failed with exit code 2.
```