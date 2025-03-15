'use client'

import DropboxImageList from "components/dropbox-image-list";
import FileDragDropZone from "components/file-dropdragzone";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import { useState } from "react";

export default function Home() {
  const [searchInput, setSearchInput] = useState("")
  return (
  <main className="w-full p-2 flex flex-col gap-4">

    {/* { Logo } */}
    <Logo />

    {/* Search Images */}
    <SearchComponent 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
    />

    {/* File Drag&Drop Zone */}
    <FileDragDropZone />

    {/* Dropbox Image List */}
    <DropboxImageList />

  </main>
  );
}