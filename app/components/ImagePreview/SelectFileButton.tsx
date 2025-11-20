'use client';

import React, { useRef } from "react";
import { Input } from "@/components/ui/input"

export function SelectFileButton({ onFileChange }: { onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="place-content-center">
      <Input 
      ref={fileInputRef} 
      id="picture" 
      type="file" 
      accept="image/*" 
      onChange={onFileChange} 
      className='text-muted-foreground file:border-input file:text-foreground p-0 pr-3 italic file:mr-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic'
      />
    </div>  
  )
}
