'use client';

import React, { useState } from "react";
import Image from "next/image";
import { SelectFileButton } from "./SelectFileButton";

export function ImagePreview() {

    const [imageFileName, setImageFileName] = useState<string>("");
    
    const handleImageSelectedEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                setImageFileName(URL.createObjectURL(file));
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    
    return (
        <div className="place-content-center">
            {imageFileName && <Image src={imageFileName} height={400} width={500} alt="Image" />}
            <SelectFileButton onFileChange={handleImageSelectedEvent} />
        </div>
    )
}