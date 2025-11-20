'use server';

import { AwsS3Client } from '@/lib/aws-s3/aws-s3-client';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const s3Client = new AwsS3Client();
        const response = await s3Client.uploadFile(file);
        return Response.json({ message: 'File uploaded successfully' })
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Failed to upload file' }, { status: 500 });
    }
}