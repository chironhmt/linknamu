import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 커넥션은 요청이 들어올 때 최초 1회만 생성하고 전역에 캐싱해 재사용한다.
// (모듈 로드 시점에 바로 연결하면 MONGODB_URI가 없는 빌드 환경에서 실패한다.)
export function getMongoClient(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("Missing MONGODB_URI environment variable");
    }

    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}
