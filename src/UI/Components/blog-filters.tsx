"use client";

import { Input } from "@/UI/Components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/UI/Components/select";
import { Search } from "lucide-react";
import { useState } from "react";

interface BlogFiltersProps {
  categories: string[];
  onSearchChange: (search: string) => void;
  onCategoryChange: (category: string) => void;
}

export function BlogFilters({
  categories,
  onSearchChange,
  onCategoryChange,
}: BlogFiltersProps) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={handleSearchChange}
          className="pl-10"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>
      <Select onValueChange={onCategoryChange}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
