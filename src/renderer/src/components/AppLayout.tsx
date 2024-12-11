import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Rootlayout component that serves as the main layout for the application.
 * It renders a `main` HTML element with a flexbox layout and full screen height.
 *
 * @param {string} className - Additional class names to apply to the `main` element.
 * @param {React.ReactNode} children - The content to be rendered inside the `main` element.
 * @param {ComponentProps<'main'>} props - Additional props to be passed to the `main` element.
 *
 * @returns {JSX.Element} The rendered `main` element with the specified layout and content.
 */
export const Rootlayout = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

/**
 * Sidebar component that renders an aside element with a specified class name and children.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.className - Additional class names to apply to the aside element.
 * @param {React.ReactNode} props.children - The content to be rendered inside the aside element.
 * @returns {JSX.Element} The rendered aside element.
 */
export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)}
      {...props}
    >
      {children}
    </aside>
  )
}

/**
 * A React forwardRef component that renders a div with a flexible layout and overflow handling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names to apply to the div.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the div.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} The rendered div element with the specified properties and children.
 */
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
