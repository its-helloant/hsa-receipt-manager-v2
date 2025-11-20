'use client';

import React, { useState } from "react";
import Image from "next/image";
import { SelectFileButton } from "./SelectFileButton";

export function ImagePreview() {

    const [fileSource, setFileSource] = useState<string>("");

    // testing fetching test image from s3
    React.useEffect(() => {
        fetchImage();
    }, []);


    const uploadImage = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Failed to upload file: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }

    const fetchImage = async () => {
        const response = await fetch('/api/fetch');
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const blob = await response.blob();
        const file = new File([blob], 'test.png', { type: 'image/png' });
        setFileSource(URL.createObjectURL(file));
    }


    const handleImageSelectedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];
        if (file) {
            try {
                uploadImage(file);
                setFileSource(URL.createObjectURL(file));
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    
    return (
        <div className="place-content-center">
            {fileSource && <Image src={fileSource} height={400} width={500} alt="Image" />}
            <SelectFileButton onFileChange={handleImageSelectedEvent} />
        </div>
    )
}