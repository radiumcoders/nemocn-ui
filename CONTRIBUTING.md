# Contributing to nemocn/ui

Thanks for your interest in contributing to nemocn/ui! We welcome contributions from developers who share our vision of creating beautiful, neon-themed UI components.

## Getting Started

1. Fork the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm dev`

## Development

This project is built on top of [shadcn/ui](https://ui.shadcn.com) and follows their component patterns.

### Project Structure

```
src/components/
├── ui/                     # Enhanced shadcn/ui components
│   ├── button.tsx          # Enhanced Button with neon variants
│   └── ...                 # Other shadcn components
├── nemocn/                 # Custom nemocn/ui components
│   └── container.tsx       # Pattern-based layout container
└── ...
```

### Design Principles

- **Neon First**: Components should embrace the neon aesthetic
- **shadcn/ui Compatible**: Extend existing shadcn components when possible
- **Dark Mode Native**: All components must work seamlessly in dark mode
- **Accessible**: Maintain shadcn/ui's accessibility standards
- **Copy-Paste Friendly**: Follow shadcn's philosophy of component ownership

## Code Standards

- Use TypeScript for all components
- Follow shadcn/ui patterns and interfaces
- Implement responsive design with Tailwind CSS
- Maintain accessibility standards
- Write clear, descriptive commit messages

## Component Guidelines

### Enhancing shadcn/ui Components

When enhancing existing shadcn/ui components:

1. Preserve the original component API
2. Add neon-themed variants through className props
3. Maintain all accessibility features
4. Ensure dark mode compatibility

### Creating Custom Components

For new components:

1. Follow shadcn/ui naming conventions
2. Use the `cn()` utility for className merging
3. Implement proper TypeScript interfaces
4. Include JSDoc comments

## Submitting Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test your changes: `pnpm build`
4. Commit with a descriptive message: `git commit -m "feat: add neon glow to Button"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Create a pull request

### Pull Request Guidelines

- Provide a clear description of changes
- Include screenshots for visual changes
- Ensure all components work in both light and dark modes
- Test compatibility with existing shadcn/ui components

## Component Checklist

Before submitting a component:

- [ ] Follows neon design principles
- [ ] Compatible with shadcn/ui patterns
- [ ] Works in dark mode
- [ ] Maintains accessibility standards
- [ ] Responsive design implemented
- [ ] TypeScript definitions included
- [ ] JSDoc comments added

## Questions?

If you have questions about contributing, feel free to open an issue or start a discussion.

Thank you for contributing to nemocn/ui! 🌟
