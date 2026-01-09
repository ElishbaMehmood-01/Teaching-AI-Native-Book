---
id: 1
title: Create Constitution File
stage: general
date: 2026-01-07
surface: agent
model: Qwen Code
feature: none
branch: main
user: user
command: Create constitution.md file
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - D:\1 Hackathon\software-development-book/teaching-ai-native-book\.specify\memory\constitution.md
tests:
 - none
---

## Prompt

Write Constitution prompt in constitution.md
Below is the current project constitution for the book "Teaching AI Native Book":
Project: Teaching AI Native Book

Purpose:
Develop a comprehensive, AI-native educational book that teaches AI-native and spec-driven software development principles. The book will be authored using Spec-Kit Plus and Claude Code, built with Docusaurus, and deployed to GitHub Pages as a publicly accessible learning resource.

Core principles:
- Technical accuracy grounded in verified and authoritative sources
- Clear and pedagogical explanations for a computer science and software engineering audience
- Spec-first content creation (all chapters derived from explicit specifications)
- Reproducibility of both content and build pipeline
- Ethical and transparent use of AI-assisted authoring

Key standards:
- All factual, conceptual, and technical claims must be verifiable
- Citation format: APA style
- Source types: at least 50% peer-reviewed literature or authoritative technical documentation
- AI-generated content must be reviewed, validated, and corrected where necessary
- Writing clarity target: Flesch–Kincaid grade level 10–12
- Zero tolerance for plagiarism; all reused ideas must be properly cited

Constraints:
- Format: Docusaurus-based documentation site
- Deployment platform: GitHub Pages
- Structure: 8–12 well-defined chapters with explicit specifications
- All chapters written in Markdown
- Code examples must be accurate, runnable, and clearly explained
- Visual aids (diagrams, workflows, or architecture illustrations) included where relevant

Tooling requirements:
- Spec-Kit Plus for specification-driven authoring
- Claude Code as the primary AI-assisted development environment
- Docusaurus for content generation and site structure
- GitHub for version control and continuous deployment

Success criteria:
- Every chapter traceable to an approved specification
- The Docusaurus site builds without errors
- The book is successfully deployed and accessible via GitHub Pages
- Zero plagiarism detected by automated checks
- Content passes technical and educational review standards

## Response snapshot

I've successfully created the constitution.md file with the project constitution for the "Teaching AI Native Book". The file now contains:

1. **Core Principles** - Six key principles covering technical accuracy, spec-first content creation, pedagogical excellence, ethical AI-assisted authoring, reproducibility, and visual/structural standards
2. **Tooling Requirements** - Specific tools to be used (Spec-Kit Plus, Claude Code, Docusaurus, GitHub)
3. **Development Workflow** - Process guidelines for content creation
4. **Governance** - Rules for how the constitution applies to the project

The constitution reflects all the key elements you provided, including the focus on technical accuracy, spec-driven development, educational quality, ethical AI use, and proper tooling. It's been saved to the expected location at `D:\1 Hackathon\teaching-ai-native-book\.specify\memory\constitution.md`.

Is there anything else you'd like me to adjust in the constitution?

## Outcome

- ✅ Impact: Created project constitution file that defines principles and standards for the Teaching AI Native Book project
- 🧪 Tests: none
- 📁 Files: Created .specify/memory/constitution.md with project constitution
- 🔁 Next prompts: None needed
- 🧠 Reflection: Successfully implemented the project constitution based on the provided requirements

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS - Constitution file created with all required elements
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A