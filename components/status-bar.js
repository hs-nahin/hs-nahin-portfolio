"use client";

import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Wifi,
} from "lucide-react";
import { useEffect, useState } from "react";

export function StatusBar({ activeFile, className = "" }) {
  const [time, setTime] = useState(new Date());
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getFileInfo = (filename) => {
    const extensions = {
      ".md": "Markdown",
      ".js": "JavaScript",
      ".jsx": "React JSX",
      ".tsx": "TypeScript React",
    };

    const ext = filename.includes(".") ? `.${filename.split(".").pop()}` : "";
    return extensions[ext] || "File";
  };

  return (
    <>
      {/* Toggle button for mobile only */}
      <div className="md:hidden fixed bottom-0 right-4 z-50 mb-[44px]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-primary text-primary-foreground p-1 rounded-full shadow-lg border border-border"
        >
          {collapsed ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* StatusBar (hidden on mobile unless expanded) */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-40
          px-4 py-1 border-t border-border backdrop-blur-sm
          bg-primary text-primary-foreground text-xs font-mono
          flex items-center justify-between
          transition-all duration-300 ease-in-out
          ${className}
          ${collapsed ? "hidden md:flex" : "flex"}
        `}
        style={{ height: "36px" }}
      >
        <div className="flex items-center space-x-4 overflow-x-auto">
          <div className="flex items-center space-x-1">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>

          <div className="flex items-center space-x-1">
            <CheckCircle className="w-3 h-3" />
            <span>No issues</span>
          </div>

          <div>{getFileInfo(activeFile)}</div>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto">
          <div className="flex items-center space-x-1">
            <Wifi className="w-3 h-3" />
            <span>Connected</span>
          </div>

          <div>{time.toLocaleTimeString()}</div>
        </div>
      </div>
    </>
  );
}
