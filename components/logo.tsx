'use client'

import Image from "next/image"

export default function Logo() {
    // 정적인 로컬 이미지라면 public 폴더를 활용
    return (
    <div className="flex items-center gap-1">
        <Image 
        src="/images/dropbox_icon.png" 
        alt="Dropbox Logo" 
        width={50}
        height={30}
        className="!w-10 !h-auto"
        />
        <span className="text-xl font-bold">Minibox</span>
    </div>
    );
}