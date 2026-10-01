# Arsitektur Faded Worked-Examples AI Coding Environment

## 1. Konsep Inti

### 1.1 Apa itu Boilerplate Blindspot?
**Masalah**: Developer sering meng-copy-paste boilerplate code tanpa benar-benar memahami setiap bagian. Ini menciptakan "blindspot" dimana kode berjalan tetapi user tidak tahu mengapa.

**Solusi**: Faded Worked-Examples secara progresif menghilangkan bagian kode yang sudah dipahami, memaksa user untuk memahami logic yang tersembunyi.

### 1.2 Konsep Faded Worked-Examples
Diadaptasi dari pedagogical research (Atkinson et al., 2003):
- **Stage 1 (Full Example)**: Kode lengkap dengan penjelasan inline
- **Stage 2 (Partially Faded)**: Beberapa bagian boilerplate dihilangkan, user harus isi
- **Stage 3 (Mostly Faded)**: Hanya core logic yang terlihat, user isi sisa boilerplate
- **Stage 4 (Problem Solving)**: User menulis dari scratch, AI sebagai guide

## 2. Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────┐
│                     USER INTERFACE LAYER                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Web Editor   │  │ VS Code Ext  │  │ Dashboard    │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  ORCHESTRATION LAYER                         │
│  ┌───────────────────────────────────────────────────��──┐   │
│  │           Task & Learning State Manager              │   │
│  │  - Track progress  - Determine fade level            │   │
│  │  - Manage hints    - Validate completion             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│               FADED SCAFFOLDING ENGINE LAYER                 │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ Template Engine  │  │ Code Masking &   │                │
│  │ - Parse snippets │  │ Fading Logic     │                │
│  │ - Generate tasks │  │ - Mark regions   │                │
│  │                  │  │ - Generate gaps  │                │
│  └──────────────────┘  └──────────────────┘                │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ Validation & AST │  │ AI Integration   │                │
│  │ Analysis         │  │ Layer            │                │
│  │ - Type checking  │  │ - Generate hints │                │
│  │ - Logic verify   │  │ - Suggest fixes  │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    DATA & PERSISTENCE LAYER                  │
│  ┌──────────────┐  ┌─────────��────┐  ┌──────────────┐       │
│  │ Snippet DB   │  │ User Progress│  │ Learning     │       │
│  │              │  │ & Analytics  │  │ Profiles     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

## 3. Core Components Detail

### 3.1 Template Engine
**File**: `engine/template-engine.ts`

```typescript
interface WorkedExample {
  id: string;
  title: string;
  description: string;
  language: 'javascript' | 'java' | 'php';
  fullCode: string;
  regions: CodeRegion[];
  learningObjectives: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface CodeRegion {
  id: string;
  startLine: number;
  endLine: number;
  type: 'boilerplate' | 'logic' | 'import' | 'configuration';
  explanation: string;
  criticality: 'essential' | 'important' | 'optional';
}

interface FadeLevel {
  level: 1 | 2 | 3 | 4;
  visibleRegions: string[];
  hiddenRegions: string[];
  hints: string[];
}
```

**Responsibilities**:
- Parse kode dan identifikasi regions
- Generate multiple fade levels dari satu contoh
- Create template dengan placeholders
- Manage region metadata

### 3.2 Code Masking & Fading Logic
**File**: `engine/code-masking.ts`

```typescript
class CodeMaskingEngine {
  // Algoritma untuk determine yang bagian di-fade berdasarkan:
  // 1. Region criticality
  // 2. User learning stage
  // 3. Previously mastered concepts
  
  generateFadedCode(example: WorkedExample, fadeLevel: number): string {
    // Output contoh dengan gaps yang sesuai
  }
  
  createPlaceholders(region: CodeRegion): Placeholder[] {
    // Generate contextual hints untuk region yang di-fade
  }
  
  calculateOptimalFadeSequence(example: WorkedExample): FadeLevel[] {
    // Determine order mana regions di-fade pertama
  }
}
```

**Algoritma Fading**:
1. **Level 1**: 0% fading - semua visible dengan annotations
2. **Level 2**: 30-40% fading - hide imports & config
3. **Level 3**: 60-70% fading - hide helper functions & boilerplate
4. **Level 4**: 100% fading - only core logic visible

### 3.3 Task & Learning State Manager
**File**: `engine/learning-manager.ts`

```typescript
interface LearningState {
  userId: string;
  currentTask: Task;
  fadeLevel: number;
  masteredConcepts: string[];
  attemptCount: number;
  hintUsageCount: number;
  completionTime: number;
  readinessScore: number; // 0-100, determine if ready untuk next level
}

class LearningStateManager {
  // Track mana yang user sudah mengerti
  updateMasteredConcepts(userId: string, concept: string): void {}
  
  // Tentukan fade level berikutnya
  recommendNextFadeLevel(state: LearningState): number {}
  
  // Hitung readiness untuk advance
  calculateReadinessScore(state: LearningState): number {}
  
  // Generate adaptive hints
  generateContextualHint(state: LearningState, region: CodeRegion): string {}
}
```

**Metrics untuk Progress**:
- **Completion Rate**: % kode yang benar di-fill
- **Hint Ratio**: berapa banyak hints dipakai
- **Time to Complete**: waktu untuk selesaikan task
- **Concept Mastery**: retention dari hidden concepts
- **Attempt Efficiency**: jumlah attempt sampai correct

### 3.4 Validation & AST Analysis
**File**: `engine/ast-validator.ts`

```typescript
class ASTValidator {
  // Parse user code menggunakan parser (Babel untuk JS, etc)
  parseUserCode(code: string, language: string): AST {}
  
  // Compare dengan expected AST
  validateLogic(userAST: AST, expectedAST: AST): ValidationResult {}
  
  // Check tipe-tipe errors
  checkSemanticCorrectness(ast: AST): SemanticError[] {}
  checkStructuralCorrectness(ast: AST): StructuralError[] {}
  
  // Generate specific feedback
  generateFeedback(errors: Error[]): Feedback[] {}
}

interface ValidationResult {
  isCorrect: boolean;
  conceptsMastered: string[];
  conceptsNeedWork: string[];
  specificErrors: CodeError[];
  suggestions: Suggestion[];
}
```

### 3.5 AI Integration Layer
**File**: `engine/ai-integration.ts`

```typescript
class AICodeAssistant {
  // Generate contextual hints based pada:
  // - Hidden region content
  // - User learning stage
  // - Common mistakes
  async generateHint(
    context: {
      hiddenCode: string;
      regionType: string;
      fadeLevel: number;
      userAttempt?: string;
    }
  ): Promise<string> {}
  
  // Suggest improvements atau next steps
  async suggestNextStep(
    state: LearningState
  ): Promise<TaskRecommendation> {}
  
  // Explain mengapa code di-hidden di stage ini
  async explainFadingStrategy(
    region: CodeRegion,
    fadeLevel: number
  ): Promise<string> {}
  
  // Generate alternative implementations
  async generateAlternativeApproach(
    example: WorkedExample
  ): Promise<WorkedExample> {}
}
```

**AI Prompting Strategy**:
- Gunakan few-shot prompting dengan contoh yang sama structure
- Context include: full code, hidden parts, user mistakes, learning stage
- Output: helpful hints yang guide tanpa give away

## 4. Data Models

### 4.1 Task Model
```typescript
interface Task {
  id: string;
  exampleId: string;
  userId: string;
  currentFadeLevel: number;
  userCode: string;
  feedback: Feedback[];
  status: 'in-progress' | 'completed' | 'abandoned';
  startedAt: Date;
  completedAt?: Date;
  metrics: TaskMetrics;
}

interface TaskMetrics {
  attemptsCount: number;
  hintUsageCount: number;
  timeSpent: number;
  conceptsIdentified: string[];
  mistakesPattern: string[];
}
```

### 4.2 Snippet/Example Storage
```typescript
// Database schema untuk examples
// SQLite/PostgreSQL

CREATE TABLE worked_examples (
  id UUID PRIMARY KEY,
  title VARCHAR,
  description TEXT,
  language VARCHAR,
  full_code TEXT,
  difficulty VARCHAR,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE code_regions (
  id UUID PRIMARY KEY,
  example_id UUID REFERENCES worked_examples,
  start_line INT,
  end_line INT,
  type VARCHAR, -- boilerplate, logic, import, config
  criticality VARCHAR, -- essential, important, optional
  explanation TEXT
);

CREATE TABLE learning_states (
  id UUID PRIMARY KEY,
  user_id VARCHAR,
  task_id UUID REFERENCES tasks,
  fade_level INT,
  mastered_concepts TEXT[], -- JSONB array
  created_at TIMESTAMP
);
```

## 5. Request/Response Flow

### 5.1 Load Task Flow
```
Client Request
    ↓
[GET /api/tasks/:taskId]
    ↓
LearningManager.getCurrentState(userId)
    ↓
Should advance fade level? 
    ├─ YES → Calculate next level (Level 2)
    └─ NO → Keep current level
    ↓
CodeMaskingEngine.generateFadedCode(example, fadeLevel)
    ↓
Return:
{
  taskId: "...",
  fadeLevel: 2,
  codeSkeleton: "...", // with placeholders
  explanations: {...},
  hiddenConcepts: [...],
  hints: [...]
}
```

### 5.2 Submit Code Flow
```
Client Submit
    ↓
[POST /api/tasks/:taskId/submit]
{
  userCode: "...",
  fadeLevel: 2
}
    ↓
ASTValidator.validateLogic(userCode, expectedCode)
    ↓
ValidationResult:
├─ Correct?
│  ├─ YES → Mark concepts mastered
│  │   ↓
│  │   LearningManager.updateMasteredConcepts()
│  │   ↓
│  │   Ready for next level?
│  │   ├─ YES → Recommend fadeLevel++
│  │   └─ NO → Repeat current level
│  │
│  └─ NO → Analyze mistakes
│      ↓
│      AIAssistant.generateHint(context)
│      ↓
│      Return feedback + suggestions
```

## 6. Implementation Phases

### Phase 1: Core Engine (Weeks 1-2)
- [ ] Template engine untuk parse & manage examples
- [ ] Basic code masking logic untuk 4 fade levels
- [ ] Simple AST validator untuk JavaScript
- [ ] Minimal database schema

### Phase 2: Web Interface (Weeks 3-4)
- [ ] React editor component dengan code highlighting
- [ ] Task loader & submission handler
- [ ] Progress dashboard
- [ ] Hint system UI

### Phase 3: AI Integration (Weeks 5-6)
- [ ] OpenAI/Claude API integration
- [ ] Smart hint generation
- [ ] Error analysis & explanation
- [ ] Adaptive fade recommendations

### Phase 4: VS Code Extension (Weeks 7-8)
- [ ] Extension scaffold
- [ ] Editor integration
- [ ] Sync dengan web platform

### Phase 5: Multi-Language Support (Week 9+)
- [ ] Java parser & validator
- [ ] PHP parser & validator
- [ ] Language-specific best practices

## 7. Key Decisions

| Aspek | Pilihan | Alasan |
|-------|---------|--------|
| **Backend** | Node.js + Express | Performance, JavaScript ecosystem |
| **Frontend** | React + TypeScript | Type safety, component reusability |
| **Code Parsing** | Babel (JS), Espree, etc | Accurate AST for semantic checking |
| **Database** | PostgreSQL + Redis | Scalability, caching for performance |
| **AI Provider** | OpenAI/Claude API | Quality & reliability |
| **Deployment** | Docker + AWS/Vercel | Container orchestration |

## 8. Security & Privacy Considerations

- User code validation dalam sandbox (use vm2 atau Docker)
- Don't expose hidden code sampai user sudah siap
- Track all attempts untuk plagiarism detection
- GDPR compliance untuk user data

---

**Next Steps**:
1. Finalize struktur folder
2. Create setup documentation
3. Begin Phase 1 implementation
