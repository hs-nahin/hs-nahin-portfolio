"use client";

import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronRight,
  Code2,
  FileText,
  Folder,
  FolderOpen,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const fileStructure = [
  {
    name: "portfolio",
    type: "folder",
    expanded: true,
    children: [
      {
        name: "about.md",
        type: "file",
        icon: User,
        description: "Profile and introduction",
      },
      {
        name: "skills.js",
        type: "file",
        icon: Code2,
        description: "Technical expertise",
      },
      {
        name: "projects",
        type: "folder",
        expanded: false,
        children: [
          {
            name: "CodeLink.jsx",
            type: "file",
            icon: FileText,
            description: "Collaborative platform",
          },
          {
            name: "CareerHive.jsx",
            type: "file",
            icon: FileText,
            description: "Job board platform",
          },
        ],
      },
      {
        name: "contact.tsx",
        type: "file",
        icon: Mail,
        description: "Get in touch",
      },
    ],
  },
];

export function FileExplorer({ activeFile, onFileSelect, className }) {
  const [expandedFolders, setExpandedFolders] = useState(["portfolio"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sync tree expansion with active file
  useEffect(() => {
    if (activeFile === "CodeLink.jsx" || activeFile === "CareerHive.jsx") {
      setExpandedFolders(prev => {
        if (!prev.includes("projects")) {
          return [...prev, "projects"];
        }
        return prev;
      });
    }
  }, [activeFile]);

  const toggleFolder = (folderName) => {
    setExpandedFolders((prev) =>
      prev.includes(folderName)
        ? prev.filter((name) => name !== folderName)
        : [...prev, folderName]
    );
  };

  const handleFileSelect = (fileName) => {
    onFileSelect(fileName);
    setIsMobileOpen(false); // Close mobile menu when file is selected
  };

  const renderFileTree = (items, depth = 0) => {
    return items.map((item, index) => {
      const isExpanded = expandedFolders.includes(item.name);
      const isActive = activeFile === item.name;
      
      // Special highlighting for project files when they're active
      const isProjectFile = item.name === "CodeLink.jsx" || item.name === "CareerHive.jsx";
      const shouldHighlight = isProjectFile && (
        activeFile === item.name || 
        (activeFile === "CodeLink.jsx" && item.name === "CodeLink.jsx") ||
        (activeFile === "CareerHive.jsx" && item.name === "CareerHive.jsx")
      );
      
      const IconComponent =
        item.icon ||
        (item.type === "folder"
          ? isExpanded
            ? FolderOpen
            : Folder
          : FileText);

      return (
        <div key={item.name} className="file-item">
          <div
            className={cn(
              "flex items-center space-x-2 px-2 py-1.5 cursor-pointer transition-smooth file-tree-item rounded-sm",
              "hover:bg-accent/50",
              (isActive || shouldHighlight) && "bg-primary/10 border-l-2 border-primary",
              depth > 0 && "ml-4"
            )}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
            onClick={() => {
              if (item.type === "folder") {
                toggleFolder(item.name);
              } else {
                handleFileSelect(item.name);
              }
            }}
          >
            {item.type === "folder" && (
              <div className="transition-transform duration-200">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
            )}

            <IconComponent
              className={cn(
                "w-4 h-4",
                item.type === "folder"
                  ? "text-blue-500"
                  : "text-muted-foreground",
                (isActive || shouldHighlight) && "text-primary"
              )}
            />

            <span
              className={cn(
                "text-sm font-mono",
                (isActive || shouldHighlight) ? "text-primary font-medium" : "text-foreground"
              )}
            >
              {item.name}
            </span>

            {item.description && (
              <span className="text-xs text-muted-foreground ml-auto hidden lg:block">
                {item.description}
              </span>
            )}
          </div>

          {item.type === "folder" && isExpanded && item.children && (
            <div className="overflow-hidden">
              {renderFileTree(item.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm border"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* File Explorer */}
      <div
        className={cn(
          "bg-muted/20 border-r border-border flex flex-col",
          // Mobile styles
          "md:relative md:translate-x-0 md:w-80",
          // Mobile positioning
          "fixed top-0 left-0 h-full w-80 z-50 transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
      >
        {/* Sidebar header */}
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <h2 className="text-sm font-semibold text-foreground">EXPLORER</h2>
        </div>

        {/* Scrollable file list */}
        <div className="flex-1 overflow-y-auto p-2">
          {renderFileTree(fileStructure)}
        </div>
      </div>
    </>
  );
}