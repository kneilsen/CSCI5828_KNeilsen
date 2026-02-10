# CLAUDE.md - AI Assistant Guide for CSCI5828_KNeilsen Repository

## Repository Overview

This is an academic repository for **CSCI 5828: Foundations of Software Engineering** course, owned by Kristopher Neilsen. The repository contains homework assignments, essays, and supporting materials related to software engineering concepts.

**Repository Type:** Academic coursework repository
**Primary Language:** Markdown (documentation), JavaScript (programming assignments)
**Course Context:** Graduate-level software engineering fundamentals

## Repository Structure

```
CSCI5828_KNeilsen/
├── README.md                      # Simple repository identifier
├── homework01.md                  # Homework 1: Brooks' "No Silver Bullet" analysis
├── total_size.js                  # Homework 3: Recursive directory size calculator
├── Essay10Image1.PNG              # Supporting images for essays
├── Essay10Image2.PNG
├── Essay10Image3.PNG
├── Essay10Image4.PNG
├── Lean-Agile Principles.png      # Diagram for Lean-Agile concepts
└── .gitattributes                 # Git configuration
```

## File Organization Patterns

### Documentation Files
- **Homework assignments**: Named `homework##.md` (e.g., homework01.md)
- **Essays**: Likely follow similar naming patterns
- **Images**: PNG files with descriptive names, referenced in markdown files

### Code Files
- **JavaScript files**: Named descriptively for their function (e.g., total_size.js)
- **No build system**: Pure JavaScript with Node.js runtime dependencies only

## Key Conventions

### Markdown Documentation Style
1. Headers use clear hierarchy (h4 for name, h5 for course, h6 for dates)
2. Questions are numbered and bolded
3. Answers provide detailed context and examples
4. Academic writing style with proper citations

### JavaScript Code Style (total_size.js)
- **Callback-based**: Uses Node.js fs callbacks (not promises/async-await)
- **Recursive pattern**: Handles nested directories recursively
- **Console logging**: Verbose output for debugging and tracking progress
- **Error handling**: Basic error logging with string conversion
- **Indentation**: Mixed tabs and spaces (preserve existing style)

### File Naming Conventions
- Lowercase for code files (total_size.js)
- Sentence case for markdown (homework01.md)
- PascalCase for images (Essay10Image1.PNG)
- Use descriptive names that indicate content

## Development Workflows

### When Working with Markdown Files
1. **Always read first**: Check existing format and structure
2. **Preserve formatting**: Maintain header hierarchy and numbering
3. **Keep academic tone**: Formal writing appropriate for graduate coursework
4. **Image references**: Use relative paths when linking to PNG files

### When Working with JavaScript
1. **Node.js context**: Code uses Node.js fs module, not browser JavaScript
2. **Testing**: Run with `node total_size.js <directory_path>`
3. **Dependencies**: Only core Node.js modules (no package.json needed)
4. **Style preservation**: Keep existing callback patterns and indentation

### Git Workflow
- **Branch naming**: Feature branches use `claude/` prefix with session ID suffix
- **Commit messages**: Clear, descriptive messages following conventional style
- **Push commands**: Use `git push -u origin <branch-name>` for new branches
- **Main branch**: `master` (not `main`)

## Academic Context

### Course Topics Covered
Based on homework01.md, the course covers:
- Essential vs. Accidental difficulties (Brooks)
- Software complexity, conformity, changeability, invisibility
- "No Silver Bullet" argument
- Software engineering vs. Computer Science
- Abstractions, conversations, specification, translation, iteration

### Assignment Types
1. **Essay questions**: Theoretical analysis with examples
2. **Programming assignments**: Practical implementation (e.g., total_size.js)
3. **Image-based submissions**: Screenshots and diagrams

## AI Assistant Guidelines

### When Adding New Files
1. **Match existing patterns**: Follow naming conventions and structure
2. **Consider course context**: Content should align with software engineering topics
3. **Documentation first**: Academic repo prioritizes explanation over code
4. **No unnecessary tooling**: Don't add build systems, linters, or config files unless requested

### When Modifying Code
1. **Preserve callback style**: Don't modernize to async/await without explicit request
2. **Keep logging verbose**: Console output is important for academic demonstration
3. **Maintain error handling**: Even basic error handling serves pedagogical purpose
4. **Test changes**: Run code with sample directories before committing

### When Working with Documentation
1. **Cite sources**: Academic integrity is paramount
2. **Provide examples**: Each concept should have practical illustration
3. **Clear explanations**: Write for understanding, not brevity
4. **Proper attribution**: Keep author name, course, and date headers

### Code Analysis Approach
When asked to analyze or explain code:
1. Describe the algorithm/approach at high level
2. Explain callback flow and asynchronous patterns
3. Identify potential issues (but frame as learning opportunities)
4. Connect to course concepts when relevant (e.g., abstraction, iteration)

## Technical Specifications

### JavaScript Environment
- **Runtime**: Node.js (version not specified, assume modern LTS)
- **Required modules**: `fs` (file system)
- **Execution**: Command-line with arguments via `process.argv`
- **Output**: Console-based (stdout)

### total_size.js Behavior
- **Purpose**: Recursively calculates total size of files in a directory
- **Usage**: `node total_size.js <directory_path>`
- **Features**:
  - Handles subdirectories recursively
  - Processes files asynchronously with callbacks
  - Accumulates total size across all files
  - Logs progress for each file and directory
- **Edge cases**: Empty directories, error handling for missing files/permissions

## Common Tasks

### Adding New Homework Assignment
```bash
# Create markdown file
# Follow homework01.md structure:
# - Header with name, course, date
# - Numbered questions in bold
# - Detailed answers with examples
```

### Running JavaScript Assignments
```bash
# Basic execution
node total_size.js /path/to/directory

# Test with current directory
node total_size.js .

# Expected output format:
# - Entry count
# - Per-file size additions
# - Subdirectory processing
# - Final total size
```

### Adding Supporting Images
- Use PNG format for diagrams and screenshots
- Name descriptively (e.g., Essay10Image1.PNG)
- Reference in markdown using relative paths
- Keep images in root directory for simplicity

## Git Best Practices for This Repo

1. **Commit granularity**: One assignment or logical change per commit
2. **Branch strategy**: Use claude/ prefixed branches for AI-assisted work
3. **No force pushes**: Preserve academic work history
4. **Push after completion**: Ensure work is backed up after each assignment

## Things to Avoid

1. **Don't add unnecessary complexity**: No webpack, babel, typescript unless required
2. **Don't modernize without reason**: Callback style is fine for this context
3. **Don't remove academic content**: All homework submissions should be preserved
4. **Don't change authorship**: Keep Kristopher Neilsen as author in headers
5. **Don't add .gitignore excessively**: Simple repo doesn't need complex ignore patterns

## Questions to Ask

When given ambiguous requests, clarify:
1. Is this a new assignment or modification of existing work?
2. Should code follow existing callback style or use modern patterns?
3. Are there specific course requirements or rubrics to follow?
4. Should changes be made to existing files or create new ones?

## Resources and References

- Brooks, Frederick P. "No Silver Bullet: Essence and Accidents of Software Engineering"
- Course: CSCI 5828 - Foundations of Software Engineering
- Academic year: 2018 (based on homework01.md date)

---

**Last Updated**: 2026-02-10
**Purpose**: Guide AI assistants in understanding and working with this academic repository effectively while respecting its educational context and existing conventions.
