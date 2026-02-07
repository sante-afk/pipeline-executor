#### structure project
```text
pipeline-executor/
├─ services/
│  ├─ control-plane/
│  │  ├─ src/
│  │  │  ├─ components/
│  │  │  │  ├─ Column/
│  │  │  │  │  ├─ Column.css
│  │  │  │  │  ├─ Column.tsx
│  │  │  │  ├─ Input/
│  │  │  │  │  ├─ Input.css
│  │  │  │  │  ├─ Input.tsx
│  │  │  │  ├─ Layouts/
│  │  │  │  │  ├─ HBox.tsx
│  │  │  │  │  ├─ VBox.tsx
│  │  │  │  ├─ Task/
│  │  │  │  │  ├─ Task.css
│  │  │  │  │  ├─ Task.tsx
│  │  │  ├─ types/
│  │  │  │  │  ├─ column.ts
│  │  │  │  │  ├─ task.ts
│  │  │  ├─ App.css
│  │  │  ├─ App.tsx
│  │  │  ├─ index.css
│  │  │  ├─ main.tsx
│  │  ├─ .gitignore
│  │  ├─ eslint.config.js
│  │  ├─ index.html
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  ├─ vite.config.ts
│  ├─ identity-service/
│  │  ├─ .vite/
│  │  │  ├─ deps/
│  │  │  │  │  ├─ _metadata.json
│  │  │  │  │  ├─ package.json
│  │  ├─ src/
│  │  │  ├─ components/
│  │  │  │  ├─ Layouts/
│  │  │  │  │  ├─ HBox.tsx
│  │  │  │  │  ├─ VBox.tsx
│  │  │  │  ├─ LoginPage/
│  │  │  │  │  ├─ LoginPage.css
│  │  │  │  │  ├─ LoginPage.tsx
│  │  │  ├─ types/
│  │  │  │  │  ├─ column.ts
│  │  │  │  │  ├─ task.ts
│  │  │  ├─ app.css
│  │  │  ├─ app.tsx
│  │  │  ├─ index.css
│  │  │  ├─ main.tsx
│  │  ├─ .gitignore
│  │  ├─ index.html
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ tsconfig.app.json
│  │  ├─ tsconfig.json
│  │  ├─ tsconfig.node.json
│  │  ├─ vite.config.ts
│  ├─ data-store/
│  ├─ pipeline-executor/
│  │  ├─ .gradle/
│  │  │  ├─ 9.3.0/
│  │  │  │  ├─ checksums/
│  │  │  │  │  ├─ checksums.lock
│  │  │  │  │  ├─ md5-checksums.bin
│  │  │  │  │  ├─ sha1-checksums.bin
│  │  │  │  ├─ executionHistory/
│  │  │  │  │  ├─ executionHistory.bin
│  │  │  │  │  ├─ executionHistory.lock
│  │  │  │  ├─ expanded/
│  │  │  │  ├─ fileChanges/
│  │  │  │  │  ├─ last-build.bin
│  │  │  │  ├─ fileHashes/
│  │  │  │  │  ├─ fileHashes.bin
│  │  │  │  │  ├─ fileHashes.lock
│  │  │  │  │  ├─ resourceHashesCache.bin
│  │  │  │  ├─ vcsMetadata/
│  │  │  │  ├─ gc.properties
│  │  │  ├─ buildOutputCleanup/
│  │  │  │  ├─ buildOutputCleanup.lock
│  │  │  │  ├─ cache.properties
│  │  │  │  ├─ outputFiles.bin
│  │  │  ├─ vcs-1/
│  │  │  │  ├─ gc.properties
│  │  │  ├─ file-system.probe
│  │  ├─ .idea/
│  │  │  ├─ .gitignore
│  │  │  ├─ compiler.xml
│  │  │  ├─ gradle.xml
│  │  │  ├─ misc.xml
│  │  │  ├─ vcs.xml
│  │  │  ├─ workspace.xml
│  │  ├─ build/
│  │  │  ├─ classes/
│  │  │  │  ├─ java/
│  │  │  │  │  ├─ main/
│  │  │  │  │  │  ├─ com/
│  │  │  │  │  │  │  ├─ example/
│  │  │  │  │  │  │  │  ├─ pipelineexecutor/
│  │  │  │  │  │  │  │  │  ├─ PipelineExecutorApplication.class
│  │  │  ├─ generated/
│  │  │  │  ├─ sources/
│  │  │  │  │  ├─ annotationProcessor/
│  │  │  │  │  │  ├─ java/
│  │  │  │  │  │  │  ├─ main/
│  │  │  │  │  ├─ headers/
│  │  │  │  │  │  ├─ java/
│  │  │  │  │  │  │  ├─ main/
│  │  │  ├─ resources/
│  │  │  │  ├─ main/
│  │  │  │  │  ├─ static/
│  │  │  │  │  ├─ templates/
│  │  │  │  │  ├─ application.properties
│  │  │  ├─ tmp/
│  │  │  │  ├─ compileJava/
│  │  │  │  │  ├─ previous-compilation-data.bin
│  │  ├─ src/
│  │  │  ├─ main/
│  │  │  │  ├─ java/
│  │  │  │  │  ├─ com/
│  │  │  │  │  │  ├─ example/
│  │  │  │  │  │  │  ├─ pipelineexecutor/
│  │  │  │  │  │  │  │  ├─ controller/
│  │  │  │  │  │  │  │  │  ├─ PipelineExecutorController.java
│  │  │  │  │  │  │  │  ├─ model/
│  │  │  │  │  │  │  │  │  ├─ User.java
│  │  │  │  │  │  │  │  ├─ repository/
│  │  │  │  │  │  │  │  ├─ service/
│  │  │  │  ├─ resources/
│  │  │  │  │  ├─ static/
│  │  │  │  │  ├─ templates/
│  │  ├─ HELP.md
```