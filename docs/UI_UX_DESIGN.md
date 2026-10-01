# UI/UX Design System - Faded Examples AI Coding Environment

## 1. Design Philosophy

### Core Principles
1. **Scaffolded Learning Path**: Visualisasi yang jelas menunjukkan progression dari contoh lengkap → partially faded → mostly faded → problem solving
2. **Cognitive Load Management**: Interface dirancang untuk tidak membanjiri user dengan informasi sekaligus
3. **Transparency of Hidden Content**: User harus bisa memahami *mengapa* bagian tertentu disembunyikan dan *apa* yang sedang dipelajari
4. **Contextual Help**: Hints dan explanations muncul on-demand, bukan forced
5. **Progress Visibility**: Tracking clear progress dan mastery indicators

## 2. Color System & Palette

### Primary Colors
```
Brand Blue:    #3B82F6 (Main interaction, primary actions)
Brand Green:   #10B981 (Success, completion)
Brand Amber:   #F59E0B (Warning, faded code, caution)
Brand Red:     #EF4444 (Error, attention needed)
```

### Semantic Colors
```
Background:    #06131F (Deep dark blue - main bg)
Surface:       #0F172A (Slightly lighter - cards, panels)
Overlay:       #081218 (Very dark - overlays, deeper context)
Border:        rgba(148, 163, 184, 0.14) (Subtle dividers)
Text Primary:  #E5EEFB (Main text)
Text Secondary: #8AA3BD (Helper text, labels)
Text Tertiary:  #5B6B83 (Disabled, subtle)
```

### State Colors
```
Visible Region:  Background: rgba(34, 197, 94, 0.12), Text: #86EFAC
Faded Region:    Background: rgba(251, 191, 36, 0.12), Text: #FBBF24
Locked Region:   Background: rgba(148, 163, 184, 0.1), Text: #CBD5E1
In Progress:     Background: rgba(59, 130, 246, 0.15), Text: #7DD3FC
```

## 3. Typography System

### Font Stack
```
Primary: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI'
Monospace: 'SFMono-Regular', Consolas, 'Monaco', monospace
```

### Scale
```
H1:  40px / 56px  (Bold 700)    → Page titles
H2:  32px / 48px  (Bold 700)    → Section headers
H3:  24px / 36px  (Bold 700)    → Card titles
H4:  18px / 28px  (Bold 600)    → Subsection headers
Body: 16px / 24px (Regular 400) → Main content
Small: 14px / 21px (Regular 400) → Secondary content
Label: 12px / 18px (Medium 600)  → UI labels, badges
Tiny:  11px / 16px (Medium 600)  → Metadata, helper text
```

### Weight Usage
- **700 Bold**: Headings, important labels
- **600 Medium**: Buttons, active states, section labels
- **400 Regular**: Body text, descriptions
- **500 Medium**: Badge text, highlights

## 4. Component Library

### 4.1 Buttons

```
PRIMARY BUTTON
├─ Background: Linear gradient (#3B82F6 → #22C55E)
├─ Padding: 10px 16px
├─ Border Radius: 12px
├─ Font: 700, 14px
├─ States:
│  ├─ Default: Full opacity
│  ├─ Hover: translateY(-1px), box-shadow
│  ├─ Active: brightness(1.1)
│  └─ Disabled: opacity 0.5
└─ Usage: Main actions (Submit, Next Level, Start Task)

SECONDARY/GHOST BUTTON
├─ Background: rgba(148, 163, 184, 0.12)
├─ Border: 1px solid transparent
├─ Color: #DFEAF8
├─ Hover: border-color rgba(96, 165, 250, 0.35)
└─ Usage: Secondary actions (Save Draft, Cancel, Skip Hint)

ICON BUTTON
├─ Size: 36px × 36px
├─ Background: transparent / rgba(96, 165, 250, 0.1)
├─ Border Radius: 8px
└─ Usage: Quick actions, controls

OUTLINE BUTTON
├─ Border: 1px solid rgba(96, 165, 250, 0.35)
├─ Background: transparent
├─ Hover: Background rgba(59, 130, 246, 0.1)
└─ Usage: Navigation, options

PILL BUTTON (Status)
├─ Padding: 4px 8px
├─ Border Radius: 999px
├─ Font Size: 10px, bold
├─ Usage: Status badges (visible/faded/locked)
```

### 4.2 Cards & Panels

```
CARD (Default)
├─ Background: rgba(15, 23, 42, 0.8)
├─ Border: 1px solid rgba(148, 163, 184, 0.14)
├─ Border Radius: 18px
├─ Padding: 18px
├─ Box Shadow: none (minimal)
└─ Hover: Border color strengthens slightly

CARD (Highlighted/Interactive)
├─ Border: 1px solid rgba(96, 165, 250, 0.35)
├─ Background: Linear gradient or rgba(59, 130, 246, 0.1)
├─ Cursor: pointer
└─ Hover: Border becomes more vibrant

SUMMARY CARD (Top Section)
├─ Layout: 2fr 1fr 1fr columns
├─ Spacing: gap 18px
├─ Height: ~120px
├─ Content: [Icon] Label | Value
└─ Highlight variant: Border & gradient special treatment

EDITOR PANEL
├─ Background: rgba(2, 6, 23, 0.9) (Darkest)
├─ Border: 1px solid rgba(96, 165, 250, 0.18)
├─ Border Radius: 16px
├─ Padding: 20px
├─ Font: Monospace, 14px, line-height 1.6
├─ Min Height: 340px
└─ Features: Line numbers, syntax highlight (future)

SIDE PANEL (Region/Learning Map)
├─ Width: minmax(260px, 0.9fr)
├─ Contains: Region list, focus box
├─ Background: Consistent with cards
└─ Sticky (optional): Remain visible on scroll
```

### 4.3 Input Elements

```
CODE INPUT / TEXTAREA
├─ Background: rgba(2, 6, 23, 0.95)
├─ Border: 1px solid rgba(96, 165, 250, 0.18)
├─ Padding: 16px 18px
├─ Font: Monospace, 14px
├─ Focus: Border color → #60A5FA, box-shadow
├─ Placeholder: Color #5B6B83
└─ Line Height: 1.6 (code readability)

TEXT INPUT
├─ Background: rgba(15, 23, 42, 0.8)
├─ Border: 1px solid rgba(148, 163, 184, 0.14)
├─ Padding: 12px 16px
├─ Border Radius: 12px
├─ Focus: Border #3B82F6, box-shadow
└─ Label: Above, small text, medium weight

CHECKBOX / TOGGLE
├─ Size: 20px × 20px
├─ Background (unchecked): rgba(148, 163, 184, 0.1)
├─ Background (checked): #3B82F6
├─ Border Radius: 6px / 999px
└─ Transition: 0.2s ease
```

### 4.4 Badges & Labels

```
CONCEPT BADGE
├─ Background: rgba(56, 189, 248, 0.16)
├─ Border: 1px solid rgba(56, 189, 248, 0.28)
├─ Color: #7DD3FC
├─ Padding: 5px 10px
├─ Border Radius: 999px
├─ Font Size: 11px, bold
└─ Icon (optional): ✓

HINT BADGE
├─ Background: rgba(34, 197, 94, 0.12)
├─ Border: 1px solid rgba(34, 197, 94, 0.24)
├─ Color: #86EFAC
└─ Same sizing as concept

WARNING BADGE
├─ Background: rgba(251, 191, 36, 0.12)
├─ Border: 1px solid rgba(251, 191, 36, 0.26)
├─ Color: #FBBF24
└─ For alerts, needs attention

ERROR BADGE
├─ Background: rgba(239, 68, 68, 0.12)
├─ Border: 1px solid rgba(239, 68, 68, 0.24)
├─ Color: #FCA5A5
└─ For critical issues
```

## 5. Layout Grids & Spacing

### Spacing Scale
```
xs:  4px
sm:  8px
md:  12px
lg:  16px
xl:  20px
2xl: 24px
3xl: 28px
4xl: 32px
```

### Main Layout Grid
```
Sidebar:      260px fixed
Main Content: 1fr flexible
Gutter:       28px padding (main panel)
Component Gap: 18px

Responsive Breakpoints:
- Desktop (1200px+): Full sidebar + main
- Tablet (768px-1199px): Sidebar collapses, 1 column layout
- Mobile (<768px): Sidebar hidden, full-width main
```

### Workspace Grid (Primary Content Area)
```
Desktop Layout:
┌─────────────────────────────────────────┐
│ Header (Topbar)                         │
├─────────────────────────────────────────┤
│ Summary Cards (Grid 3 cols)             │
├──────────────────────────┬──────────────┤
│                          │              │
│  Editor Panel            │ Side Panel   │
│  (minmax 0, 2fr)         │ (260px)      │
│                          │              │
├──────────┬───────────┬──────────────────┤
│ Feedback │ Hints     │ Progress/Stats   │
│ (1.2fr)  │ (1.2fr)   │ (1fr)            │
└──────────┴───────────┴──────────────────┘
```

### Tablet Layout
```
┌─────────────────────────┐
│ Header                  │
├─────────────────────────┤
│ Summary Cards (2 cols)  │
├─────────────────────────┤
│ Editor Panel (full)     │
├─────────────────────────┤
│ Side Panel (full)       │
├─────────────────────────┤
│ Feedback/Hints/Stats    │
│ (Stacked vertical)      │
└─────────────────────────┘
```

## 6. Navigation & Information Architecture

### Sidebar Navigation
```
Structure:
├─ Brand (Logo + Text)
├─ Main Nav Section
│  ├─ Learning Tasks (Active)
│  ├─ Progress Dashboard
│  ├─ AI Feedback History
│  └─ Challenge Library
├─ Current Stage Card
│  ├─ Fade Level Indicator
│  ├─ Progress Summary
│  └─ Quick Stats
└─ Footer
   ├─ Settings
   └─ Help
```

### Top Navigation (Topbar)
```
Left:
├─ Breadcrumb or Chapter
├─ Task Title
└─ Objective

Right:
├─ Save Draft (Ghost Button)
└─ Submit (Primary Button)
```

## 7. Key Screens & Flows

### Screen 1: Learning Dashboard
```
Purpose: Show available tasks and current progress
Layout:
├─ Hero Section (Welcome back, [name])
├─ Quick Stats Grid
│  ├─ Total Concepts Learned
│  ├─ Current Streak
│  └─ Accuracy Score
├─ Active Task Card (Highlighted)
│  ├─ Title, Difficulty
│  ├─ Progress bar
│  └─ "Continue" button
└─ Suggested Tasks Grid
   ├─ Task Card × N
   ├─ Difficulty badge
   └─ Fade level indicator
```

### Screen 2: Task Workspace (Current - Main Flow)
```
Purpose: Complete a faded worked-example task
Components:
├─ Topbar
│  ├─ Chapter / Task Title
│  ├─ Objective Summary
│  └─ Save / Submit buttons
├─ Summary Cards (3 columns)
│  ├─ Objective (Highlighted)
│  ├─ Difficulty
│  └─ Completion %
├─ Main Workspace
│  ├─ Editor Panel (2/3 width)
│  │  ├─ Code with regions highlighted
│  │  ├─ Placeholders for gaps
│  │  └─ Line numbers
│  └─ Side Panel (1/3 width)
│     ├─ Learning Map (Region list)
│     └─ Current Focus Box
├─ Bottom Analysis (3 columns)
│  ├─ AI Feedback Panel
│  ├─ Adaptive Hints
│  └─ Progress Stats
└─ Modal: Success / Next Level Recommendation
```

### Screen 3: Challenge Library
```
Purpose: Browse and select learning tasks
Layout:
├─ Header with filters
│  ├─ Difficulty filter
│  ├─ Language filter
│  ├─ Topic filter
│  └─ Sort (Most Popular, Newest, etc)
├─ Challenge Cards Grid
│  ├─ Title + Description
│  ├─ Difficulty badge
│  ├─ Concepts covered
│  ├─ Estimated time
│  ├─ Completion %
│  └─ "Start" / "Continue" button
└─ Pagination / Infinite Scroll
```

### Screen 4: Progress Dashboard
```
Purpose: Visualize learning journey and mastery
Layout:
├─ Overall Stats
│  ├─ Total Hours Learned
│  ├─ Tasks Completed
│  ├─ Concepts Mastered
│  └─ Current Streak
├─ Mastery by Topic (Chart)
│  └─ Bar/radar chart showing progress per concept
├─ Recent Activity
│  └─ Timeline of completed tasks
├─ Learning Path
│  └─ Visual progression through fade levels
└─ Recommendations
   └─ "Next challenges suited for you"
```

## 8. Interaction Patterns

### Fade Level Progression
```
User Flow:
1. User opens task at Fade Level 2
2. User sees: Some boilerplate hidden, core logic visible
3. User fills in gaps and submits
4. System validates:
   - IF correct → Show success modal
                  → Ask "Ready for Level 3?"
                  → Show what will be hidden next
   - IF incorrect → Show specific feedback
                   → Offer hints
                   → Allow retry
5. User confirms next level OR repeats current
6. Fade level advances, code updates
```

### Hint System
```
Trigger: User clicks "Get Hint" or after N attempts
Display:
├─ Tooltip near faded region
├─ Progressive hints (1st hint vague, 2nd more specific)
├─ Explanation of WHY it was faded
└─ Option to see full hidden code (unlocks master understanding)

Tracking:
- Count hints used
- Compare with expected mastery level
- Adjust difficulty recommendations
```

### Validation Feedback
```
On Submit:
1. Parse user code
2. Check against expected AST
3. Show results:
   - Overall: ✓ Correct / ✗ Needs work
   - Per-region: Validation status
   - Specific errors highlighted in code
4. AI-generated feedback panel
5. Suggested next step
```

## 9. Micro-interactions & Animations

### Transitions
```
Standard: 0.2s ease (default for hover, focus)
Fade: 0.3s ease-in-out (showing/hiding content)
Slide: 0.4s cubic-bezier(0.4, 0, 0.2, 1) (panel transitions)
Pop: 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) (modal entrance)
```

### Hover States
```
Button: translateY(-1px) + shadow
Card: Border color brighten, subtle glow
Region Item: Background color increase, selected styling
Code Line: Background highlight on hover (future)
```

### Loading States
```
- Skeleton screens for panels
- Pulsing dot indicator
- "Loading..." text in panels
- Disable submit button during validation
```

### Success/Error States
```
Success:
├─ Green checkmark icon
├─ Confetti/celebration animation
├─ Modal with next steps
└─ Progress bar update with animation

Error:
├─ Red error icon
├─ Shake animation on input
├─ Error message with suggestion
└─ Retry button highlight
```

## 10. Accessibility (A11y) Considerations

### WCAG 2.1 Level AA Compliance
```
- Contrast Ratios: All text meets 4.5:1 minimum
- Focus Indicators: Visible 2px outline on focus
- Color Alone: Not sole indicator (use icons/text too)
- Keyboard Navigation: Tab order logical, no traps
- Screen Reader: Semantic HTML, ARIA labels where needed
- Motion: Respect prefers-reduced-motion
- Text Scaling: Support up to 200% zoom
```

### Keyboard Shortcuts (Future)
```
Ctrl/Cmd + S: Save Draft
Ctrl/Cmd + Enter: Submit
Tab: Navigate regions
Shift+Tab: Navigate backwards
H: Get Hint
L: Next Fade Level
? : Help
```

## 11. Dark Mode & Theme Customization

### Current Theme
```
Name: Deep Ocean (Dark)
Background: #06131F
Surface: #0F172A
Accent: #3B82F6 (Blue)
Success: #10B981 (Green)
Warning: #F59E0B (Amber)
```

### Future Theme Support
```
- Light Mode (Inverted palette)
- High Contrast Mode (WCAG AAA)
- Custom color themes
- Font size adjustment
```

## 12. Responsive Design Breakpoints

```
Mobile (320px - 639px):
├─ Sidebar: Hidden (hamburger menu)
├─ Layout: Single column, stacked
├─ Components: Full width, reduced padding
└─ Font sizes: Slightly reduced

Tablet (640px - 1023px):
├─ Sidebar: Collapsible / Side drawer
├─ Layout: 2-column where possible
├─ Components: Optimized spacing
└─ Editor & panels: Stack vertically

Desktop (1024px+):
├─ Sidebar: Full visible
├─ Layout: As designed (multi-column)
├─ Components: Full spacing
└─ All features visible
```

## 13. Component Hierarchy & Composition

### Atomic Design Approach
```
Atoms:
├─ Button (primary, secondary, icon, outline)
├─ Badge (concept, hint, warning, error)
├─ Input (text, code, checkbox)
├─ Label & Typography
└─ Icons

Molecules:
├─ Button Group (multi-select actions)
├─ Card (with header, content, footer)
├─ Input Field (label + input + helper text)
├─ Metric Box (label + value + unit)
└─ Region Item (label + status + description)

Organisms:
├─ Topbar (with breadcrumb, title, actions)
├─ Sidebar (brand, nav, card)
├─ Editor Panel (with controls + code area)
├─ Learning Map (region list + focus box)
├─ Feedback Panel (title + content list)
└─ Stats Panel (metrics + progress bar)

Templates:
├─ Task Workspace (all organisms combined)
├─ Dashboard (summary + task grid)
├─ Challenge Library (filters + card grid)
└─ Progress View (stats + charts)
```

## 14. File Structure for Design Assets

```
design/
├─ colors/
│  └─ palette.css (all color variables)
├─ typography/
│  ├─ type-scale.css
│  └─ font-stack.css
├─ components/
│  ├─ buttons.css
│  ├─ cards.css
│  ├─ inputs.css
│  ├─ badges.css
│  └─ layout.css
├─ layouts/
│  ├─ sidebar.css
│  ├─ workspace.css
│  └─ responsive.css
├─ animations/
│  └─ transitions.css
└─ figures/
   ├─ wireframes/ (PDF/PNG)
   ├─ mockups/ (Figma links)
   └─ prototypes/ (Interactive)
```

---

## Design Checklist for Implementation

- [ ] Color variables in CSS (document as custom properties)
- [ ] Typography scale implemented
- [ ] Button styles (all variants)
- [ ] Card & panel styles
- [ ] Form input styles
- [ ] Badge & label styles
- [ ] Responsive layout tested (mobile/tablet/desktop)
- [ ] Accessibility: Contrast check
- [ ] Accessibility: Keyboard navigation
- [ ] Accessibility: Screen reader labels
- [ ] Loading & error states
- [ ] Hover & focus states
- [ ] Animations & transitions smooth
- [ ] Dark mode tested
- [ ] 200% zoom tested
- [ ] Touch-friendly sizes (mobile)

---

**Next Steps**:
1. Convert this design spec to Figma file (Visual mockups)
2. Create CSS custom properties & utility classes
3. Implement remaining component variants
4. Test across devices
5. Gather feedback from potential users
