1. 윈도우에서 리눅스로 데이터 옮기기
    
    [[Linux] 윈도우에서 리눅스 서버에 파일 전송하기](https://baekh-93.tistory.com/50)
    
    ```bash
    1. PowerShell 실행.
    
    2. 전송할 파일 경로로 이동.
    
    3. 리눅스 서버로 파일 전송.(리눅스 서버의 ID, IP, PW 필요)
    명령어: scp 파일명 서버계정ID@서버계정IP:받을경로
    ex) scp text.csv hadoop@xxx.xxx.xx.xxx:home/hadoop/data
    # 서버계정ID 확인
    whoami 
    # 서버계정IP 확인
    hostname -I 
    ```
    

1. HDFS 서버에 데이터 올리기
    
    ```bash
    1. 하둡 실행
    명령어: start-all.sh
    jps 실행해서 Resource Manager가 없으면 start-yarn.sh
    
    2. hdfs에 디렉토리 생성
    명령어: hdfs dfs -mkdir /user/hive/warehouse/data
    
    3. 디렉토리에 파일 붙여넣기
    복사할 파일이 있는 경로로 이동 후,
    명령어: hdfs dfs -put XXX.csv /user/hive/warehouse/data
    ```
    
2. HQL 파일 작성하기
    - a) csv파일 hive 테이블에 넣기
        
        ```sql
        -- xxx 테이블이 있다면 삭제
        DROP TABLE IF EXISTS xxx;
        
        CREATE EXTERNAL TABLE IF NOT EXISTS xxx ( # 외부테이블로 생성
        code STRING,
        name STRING,
        number INT,
        rate DOUBLE)
        ROW FORMAT DELIMITED
        FILEDS TERMINATED BY ',' -- ,로 필드 구분
        LINES TERMINATED BY '\n'  -- \n 으로 라인을 구분
        STORED AS TEXTFILE
        LOCATION 'hdfs://127.0.0.1:9000/user/hive/warehouse/data' -- 해당 경로의 데이터를 테이블에 등록
        tblproperties ("skip.header.line.count"="1"); -- 파일의 첫 줄은 넣지 않는다
        ```
        
    - b) hive 테이블들 처리하여 새로운 테이블에 넣기
        
        ```bash
        # 새로운 테이블을 넣을 hdfs 디렉토리 생성
        명령어: hdfs dfs -mkdir /user/hive/warehouse/data/join
        ```
        
        ```sql
        -- aaa 테이블이 있다면 삭제
        DROP TABLE IF EXISTS aaa;
        
        CREATE EXTERNAL TABLE IF NOT EXISTS aaa ( # 외부테이블로 생성
        code STRING,
        name STRING,
        number INT,
        rate DOUBLE)
        STORED AS ORC
        LOCATION 'hdfs://127.0.0.1:9000/user/hive/warehouse/data/join';
        
        INSERT OVERWRITE TABLE aaa
        SELECT a.code, 
        a.name , 
        b.number, 
        b.rate
        FROM aaa a left join bbb b
        on a.code = b.code;
        ```
        
    - 참고) 테이블 타입
        
        ### **MANAGED**
        
        테이블 생성시 옵션을 따로 주지 않으면 매니지드 테이블이 생성됩니다. 세션이 종료되어도 테이블의 데이터와 파일은 유지 됩니다. 테이블을 DROP 하면 파일도 함께 삭제 됩니다.
        
        ### **EXTERNAL**
        
        EXTERNAL 옵션은 매니지드 테이블과 파일 삭제 정책을 제외하고 동일합니다. 익스터널 테이블은 DROP하면 파일은 그대로 유지됩니다. 사용자의 실수로 인한 파일 삭제를 방지하기 위해서 EXTERNAL 테이블로 관리하는 것이 좋습니다.
        
        ### **TEMPORARY**
        
        TEMPORARY 옵션은 현재 세션에서만 사용하는 테이블을 생성 할 수 있습니다. 현재 세션이 종료되면 제거되기 때문에 임시 테이블 생성에 사용하면 좋습니다.
        
    - 참고) 저장 포맷(STORED AS)
        
        💡**TEXTFILE**: 일반적으로 external 테이블 생성 시 사용. 데이터를 텍스트 파일 형태(csv)로 HDFS에 저장한 뒤 external 테이블을 생성. 구분자로 field와 row가 구별되어야 하며, 테이블 생성 시 DELIMITED 옵션을 사용하여 구분자를 명시한다.
        
        **SEQUENCEFILE**: 데이터를 압축하여 저장. row기반으로 데이터를 저장. 코드 테이블, 디멘전 테이블 처럼 데이터와 컬럼이 적은 테이블에 적용한다.
        
        **RCFILE**: 컬럼 기반으로 데이터를 압축하여 저장하는 파일 형식. 
        
        💡**ORC**: RCFile을 개선시킨 파일 형식. 컬럼 기반 저장 방식을 사용. 현재 파일 형식중에서 가장 많이 사용되는 파일 형식.
        
        **PARQUET**: 컬럼 기반 저장 방식을 사용하는 파일 형식. HIVE와 PIG만 지원되는 ORC에 비해 더 다양한 하둡 에코 시스템을 지원하고 있다.
        
        **AVRO**: 데이터 직렬화 시스템. 하둡의 직렬화 방식의 단점인 언어 이식성을 해결하기 위해 만들어진 프로젝트.
        
    
3. HQL 실행하기
    
    ```bash
    명령어: hive -f hql파일이 있는 디렉토리/hql파일명.hql
    xe) hive -f /home/hadoop/data/test.hql
    ```
    
4. hive 접속 및 테이블 조회, 데이터 조회
    
    ```bash
    hive
    > show tables;
    > select * from aaa limit 10;
    ```