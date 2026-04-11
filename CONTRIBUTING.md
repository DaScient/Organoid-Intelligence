# Contributing to Organoid Intelligence Repository

Thank you for your interest in contributing to the open-source companion repository for **"Organoid Intelligence: Biological Computing In Living Systems"**. We welcome contributions from researchers, educators, engineers, and students.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

### Reporting Issues

- Use the [GitHub Issues](https://github.com/DaScientist/Organoid-Intelligence/issues) tracker.
- Search existing issues before opening a new one.
- Use the appropriate issue template if available.
- Include sufficient detail: what you expected, what happened, how to reproduce.

### Suggesting Enhancements

- Open an issue with the label `enhancement`.
- Describe the motivation and use case clearly.
- If proposing new content, describe the scientific basis.

### Submitting Pull Requests

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the style guidelines below.
4. Commit with descriptive messages: `git commit -m "feat: add chapter on X"`
5. Push and open a Pull Request against `main`.
6. Fill in the PR template completely.
7. Request a review from a maintainer.

## Style Guidelines

### Markdown / Textbook Content

- Use ATX-style headers (`##`, `###`)
- Keep line lengths under 120 characters
- Use LaTeX-style math in `$$...$$` blocks for equations
- Include figure placeholders for any referenced visuals
- Cite primary literature; avoid self-referential claims without evidence
- Maintain consistent terminology with the glossary in Appendix A

### Python Code

- Follow PEP 8 style
- Use type hints for function signatures
- Document all public functions with docstrings (Google style)
- Ensure code runs under Python 3.9+
- Include `if __name__ == '__main__':` blocks in executable scripts
- Test your code before submitting

### Lab Protocols

- Follow the existing LP-00X template format
- Include version numbers, BSL levels, and dates
- Use generic catalog numbers or clearly label them as examples
- Have all safety information in Section 2

## Development Setup

```bash
git clone https://github.com/DaScientist/Organoid-Intelligence.git
cd Organoid-Intelligence
pip install -r visualizations/python/requirements.txt
pip install python-docx  # for generate_docx.py
```

## Review Process

All pull requests are reviewed by maintainers. Reviews focus on:

- Scientific accuracy
- Clarity and accessibility
- Code correctness and style
- Consistency with the rest of the repository

## Attribution

Contributors will be acknowledged in the repository's Contributors section. Significant contributions to textbook content may be noted in the Acknowledgments of future editions.

## Questions?

Open a GitHub Discussion or contact the maintainers through the Issues tracker.
