import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

export class AwsS3Client {
    private s3Client: S3Client;
    constructor() {
        const s3Config: S3ClientConfig = {
            region: "auto",
            endpoint: `https://${process.env.AWS_ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
          }
        }
        this.s3Client = new S3Client({...s3Config});
    }
}