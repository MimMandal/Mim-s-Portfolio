// app/resume.tsx
"use client";

import React from "react";

const Resume: React.FC = () => {
  return (
    <div className="p-8 bg-white text-black container mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <a
        href="/resume/resume.pdf"
        download="resume.pdf"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
      <iframe
        src="/resume/resume.pdf"
        width="100%"
        height="600px"
        className="mt-8"
      ></iframe>
    </div>
  );
};

export default Resume;
