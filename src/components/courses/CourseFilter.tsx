'use client';

import React, { useEffect, useState } from 'react';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

interface CourseFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  courseCategories: { value: string; label: string }[];
  courseTypes: { value: string; label: string }[];
  courseLevels: { value: string; label: string }[];
  totalCourses: number;
  filteredCourses: number;
}

export default function CourseFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedLevel,
  setSelectedLevel,
  courseCategories,
  courseTypes,
  courseLevels,
  totalCourses,
  filteredCourses,
}: CourseFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedType('all');
    setSelectedLevel('all');
  };

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedCategory !== 'all' ||
    selectedType !== 'all' ||
    selectedLevel !== 'all';

  const activeFiltersCount = [
    searchTerm !== '',
    selectedCategory !== 'all',
    selectedType !== 'all',
    selectedLevel !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="bg-white border border-gray-200 p-10 md:px-20 md:py-10 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between md:mb-5">
        <div
          className="flex items-center gap-10 cursor-pointer lg:cursor-default"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-10 justify-between w-full mb-10">
            <>
              {!isScrolled && (
                <div className="flex items-center gap-10">
                  <Filter size={20} className="text-gray-600" />
                  <h3 className="md:text-lg font-semibold text-gray-800">
                    Filters -
                  </h3>
                </div>
              )}
              <p className="text-sm text-gray-600">
                Showing {filteredCourses} of {totalCourses} courses
              </p>
            </>
            {/* Active filters count badge */}
            {hasActiveFilters && (
              <span className="bg-primary text-white text-xs px-6 py-2 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </div>
          {/* Mobile toggle icon */}
          <div className="lg:hidden">
            {isExpanded ? (
              <ChevronUp size={20} className="text-gray-600" />
            ) : (
              <ChevronDown size={20} className="text-gray-600" />
            )}
          </div>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className={`${
              isExpanded ? 'flex' : 'hidden lg:flex'
            } items-center gap-5 text-sm text-gray-500 hover:text-gray-700 transition-colors`}
          >
            <X size={16} />
            Clear all
          </button>
        )}
      </div>

      {/* Filter Content - Hidden on mobile when collapsed */}
      <div
        className={`lg:block overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'max-h-[1000px] opacity-100'
            : 'max-h-0 opacity-0 lg:max-h-[1000px] lg:opacity-100'
        }`}
      >
        {/* Filters - Inline Layout */}
        <div className="flex flex-col lg:flex-row gap-20 mb-10">
          {/* Search */}
          <div className="flex-1 text-sm">
            <label className="block font-medium text-gray-700 mb-10">
              Search Courses
            </label>
            <div className="relative">
              <Search
                size={18}
                className="absolute left-15 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description, or tags..."
                className="w-full pl-40 pr-15 py-12 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-200 text-sm">
            <label className="block font-medium text-gray-700 mb-10">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-10 py-12 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {courseCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="lg:w-200 text-sm">
            <label className="block font-medium text-gray-700 mb-10">
              Course Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-10 py-12 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {courseTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div className="lg:w-200 text-sm">
            <label className="block font-medium text-gray-700 mb-10">
              Level
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-10 py-12 border border-gray-300  focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {courseLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="pt-10 text-sm border-t border-gray-200">
            <h4 className="font-medium text-gray-700 mb-15">Active Filters:</h4>
            <div className="flex flex-wrap gap-10">
              {searchTerm && (
                <span className="inline-flex items-center gap-5 px-10 py-5 bg-primary/10 text-primary text-xs ">
                  Search: &quot;{searchTerm}&quot;
                  <button
                    onClick={() => setSearchTerm('')}
                    className="hover:text-primary/70"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-5 px-10 py-5 bg-primary/10 text-primary text-xs ">
                  {
                    courseCategories.find((c) => c.value === selectedCategory)
                      ?.label
                  }
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:text-primary/70"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedType !== 'all' && (
                <span className="inline-flex items-center gap-5 px-10 py-5 bg-primary/10 text-primary text-xs ">
                  {courseTypes.find((t) => t.value === selectedType)?.label}
                  <button
                    onClick={() => setSelectedType('all')}
                    className="hover:text-primary/70"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedLevel !== 'all' && (
                <span className="inline-flex items-center gap-5 px-10 py-5 bg-primary/10 text-primary text-xs ">
                  {courseLevels.find((l) => l.value === selectedLevel)?.label}
                  <button
                    onClick={() => setSelectedLevel('all')}
                    className="hover:text-primary/70"
                  >
                    <X size={12} />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
