'use client';

import React, { useState, useRef } from "react";
import { Input } from "@/components/ui/input"

export function SelectFileButton() {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click();
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // if (file) {
    //   setButtonText(`File Selected: ${file.name}`);
    // }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Input 
      ref={fileInputRef} 
      id="picture" 
      type="file" 
      accept="image/*" 
      onChange={handleFileChange} 
      className='text-muted-foreground file:border-input file:text-foreground p-0 pr-3 italic file:mr-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic'
      />
    </div>  
  )
}
