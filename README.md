Design System Lab 🎨A professional React Component Library built with TypeScript, Material UI (MUI), and Framer Motion. This library focuses on high-quality, interactive UI components and smooth animations.🚀 InstallationThis library is hosted as a private repository on GitHub. To add it to your project, use the following command:Bashnpm install git+https://github.com/Paularix/design-system-lab.git
Note: Since the repository is private, ensure your environment is authenticated with GitHub (using a Personal Access Token or SSH key).🛠 UsageTo use the components, simply import them along with the color constants from the library:TypeScriptimport { InteractiveRevealCard, ActionButton, colors } from 'design-system-lab';

const MyComponent = () => {
  return (
    <InteractiveRevealCard 
      title="Paula Marcos"
      subtitle="Engineering & Design"
      accentColor={colors.purple}
      tags={['React', 'Vite', 'Design System']}
      href="https://github.com/Paularix"
    />
  );
};
🧪 Development WorkflowIf you want to contribute or modify components, follow these steps:1. Run StorybookTo view and test components in isolation:Bashnpm run storybook
2. Update and ExportAdd your components in src/components/.Export them in src/index.ts so they are accessible from the outside.3. Build for ProductionCrucial: Before pushing changes to GitHub, you MUST update the distribution folder:Bashnpm run build
This command generates the dist/ folder containing the compiled JavaScript and TypeScript definitions.4. Push to GitHubBashgit add .
git commit -m "feat: updated components"
git push origin main
🧱 Project StructureFolderDescriptiondist/Production Files. The actual code consumed by other apps.src/components/atomsSmallest components (Buttons, Links).src/components/moleculesCombined atoms with simple logic (Menus, Accordions).src/components/organismsComplex components (Cards, Layout containers).src/themeShared design tokens and color constants.⚠️ Requirements (Peer Dependencies)Your host project should have the following dependencies installed:react >= 18.0.0@mui/material >= 5.0.0framer-motion >= 10.0.0@emotion/react & @emotion/styled >= 11.0.0📄 LicensePrivate - All rights reserved.
