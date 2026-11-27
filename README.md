```mermaid
graph LR
    %% 前置流程
    A[原始] --> B[根源]
    A --> C[iu原始时代]
    B --> D[余烬]
    C --> D
    D --> E[机动]
    E --> F[iu蒸汽时代]
    F --> G[气动]
    G --> H[末地]
    I[星辉] --> H

    %% 末地后的三条线
    H --> J[基础电力]
    J --> K[改良电力]
    K --> L[太空]
    
    H --> M[ae]
    H --> N[mek]

    H --> O[深渊]
    O --> P[神秘]
    P --> Q[巫术]
    Q --> R[血魔法]
    R --> S[植物魔法]

    %% 最终汇总到 EnderIO
    L --> T[EnderIO]
    M --> T
    N --> T
    S --> T

    %% 样式调整以区分阶段
    classDef pre fill:#f5f5f5,stroke:#9e9e9e,stroke-width:2px;
    classDef endmod fill:#ffcdd2,stroke:#b71c1c,stroke-width:2px;
    classDef magic fill:#e1bee7,stroke:#4a148c,stroke-width:2px;
    classDef tech fill:#bbdefb,stroke:#0d47a1,stroke-width:2px;
    
    class A,B,C,D,E,F,G,I pre;
    class J,K,L,M,N tech;
    class O,P,Q,R,S magic;
    class T endmod;
```P