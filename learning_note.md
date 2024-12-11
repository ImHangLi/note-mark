# Building a Responsive Layout with `twMerge` and React

Learn to create a flexible, responsive layout using `twMerge` and React components in `AppLayout.tsx`.

## What is `twMerge`?

`twMerge` from `tailwind-merge` merges multiple Tailwind CSS class names into one, simplifying dynamic class management in React.

## Components in `AppLayout.tsx`

### `Rootlayout`

The main layout component using flexbox for full screen height.

```tsx
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Rootlayout = ({ className, children, ...props }: ComponentProps<'main'>) => (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
        {children}
    </main>
)
```

### `Sidebar`

Renders an `aside` element with specific dimensions and overflow handling.

```tsx
export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => (
    <aside className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-auto', className)} {...props}>
        {children}
    </aside>
)
```

### `Content`

A `forwardRef` component rendering a flexible `div`. Allows passing refs to child components, useful for accessing DOM elements directly.

```tsx
import { forwardRef, ComponentProps } from 'react'

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
            {children}
        </div>
    )
)

Content.displayName = 'Content'
```

## Components in `DraggableTopBar.tsx`

### `DraggableTopBar`

A transparent header component to make the window draggable. This allows users to drag through the top of the window.

```tsx
export const DraggableTopBar = () => {
    return <header className="absolute inset-0 h-8 bg-transparent" />
}
```

