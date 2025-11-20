'use server';

import { AwsS3Client } from '@/lib/aws-s3/aws-s3-client';

export async function GET() {
    try {
        const s3Client = new AwsS3Client();
        const response = await s3Client.fetchFile();
        
        if (!response.Body) {
            throw new Error('Failed to fetch file');
        }
        
        const byteArray = await response.Body.transformToByteArray();
        const contentType = response.ContentType || 'image/png';
        
        // Return binary data with proper headers
        return new Response(Buffer.from(byteArray), {
            headers: {
                'Content-Type': contentType,
                'Content-Length': byteArray.length.toString(),
            },
        });
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Failed to fetch file' }, { status: 500 });
    }
}