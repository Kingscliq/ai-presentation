import { Boxes, Brain, ChevronLeft, ChevronRight, Code, Search, Settings, Zap } from 'lucide-react';
import React, { useState } from 'react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "The Evolution of Software Engineering",
      subtitle: "From Copy-Paste to AI-Powered Development",
      icon: Brain,
      content: (
        <div className="text-center space-y-6">
          <p className="text-2xl text-gray-300">A journey through how we build software</p>
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-4xl">📚</div>
            <div className="text-4xl">→</div>
            <div className="text-4xl">🔍</div>
            <div className="text-4xl">→</div>
            <div className="text-4xl">🤖</div>
          </div>
        </div>
      )
    },
    {
      title: "The Old Way: The Copy-Paste Era",
      subtitle: "2008-2020",
      icon: Search,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-4">The Skills That Mattered:</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Googling the right keywords</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Finding the perfect StackOverflow answer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Reading endless documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Memorizing syntax and APIs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Copy-paste-modify-repeat</span>
              </li>
            </ul>
          </div>
          <div className="text-center text-gray-400 italic mt-6">
            "I spent 3 hours finding the right regex pattern on StackOverflow..."
          </div>
        </div>
      )
    },
    {
      title: "The Problem with Copy-Paste Engineering",
      subtitle: "What we got wrong",
      icon: Code,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Not Scalable</h3>
              <p className="text-gray-300">Each new problem required starting from scratch</p>
            </div>
            <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Not Systematic</h3>
              <p className="text-gray-300">No consistent approach to problem-solving</p>
            </div>
            <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Context Switching</h3>
              <p className="text-gray-300">Constantly leaving your IDE to search</p>
            </div>
            <div className="bg-red-900/30 border border-red-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">❌ Cargo Cult Programming</h3>
              <p className="text-gray-300">Using code without understanding it</p>
            </div>
          </div>
          <div className="text-center mt-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-xl text-yellow-400 font-semibold">We confused memorization with engineering</p>
          </div>
        </div>
      )
    },
    {
      title: "The Realization",
      subtitle: "What Software Engineering Really Is",
      icon: Brain,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-lg border-2 border-purple-500">
            <h3 className="text-3xl font-bold text-center mb-6 text-purple-300">
              Software Engineering is NOT about syntax
            </h3>
            <p className="text-xl text-center text-gray-200">
              It's about systematic problem-solving
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-blue-400 mb-2">Understanding</h4>
              <p className="text-sm text-gray-300">Breaking down problems</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="font-bold text-blue-400 mb-2">Architecture</h4>
              <p className="text-sm text-gray-300">Designing solutions</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-blue-400 mb-2">Iteration</h4>
              <p className="text-sm text-gray-300">Refining approaches</p>
            </div>
          </div>

          <div className="text-center text-lg text-gray-300 mt-6 italic">
            "The best engineers think in systems and processes, not in syntax"
          </div>
        </div>
      )
    },
    {
      title: "Enter AI: A New Paradigm",
      subtitle: "From GPT to Production",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-6 rounded-lg border border-green-500">
            <h3 className="text-2xl font-bold text-green-400 mb-4">AI Enables True Engineering</h3>
            <p className="text-lg text-gray-200">
              AI handles the syntax, you focus on the problem-solving
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
              <div className="text-3xl">💭</div>
              <div>
                <h4 className="font-bold text-blue-400 text-lg">Think in Concepts</h4>
                <p className="text-gray-300">Describe what you want to achieve, not how</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
              <div className="text-3xl">⚡</div>
              <div>
                <h4 className="font-bold text-blue-400 text-lg">Rapid Iteration</h4>
                <p className="text-gray-300">Test ideas in seconds, not hours</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
              <div className="text-3xl">📈</div>
              <div>
                <h4 className="font-bold text-blue-400 text-lg">Scalable Approach</h4>
                <p className="text-gray-300">Systematic patterns that work across problems</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
              <div className="text-3xl">🎓</div>
              <div>
                <h4 className="font-bold text-blue-400 text-lg">Learn While Building</h4>
                <p className="text-gray-300">AI explains as it generates</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Evolution Timeline",
      subtitle: "How we got here",
      icon: Code,
      content: (
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500"></div>
            
            <div className="relative pl-20 pb-8">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-gray-600 border-4 border-gray-900"></div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-gray-400">Phase 1: StackOverflow Era</h4>
                <p className="text-gray-400">Search → Copy → Paste → Hope</p>
              </div>
            </div>

            <div className="relative pl-20 pb-8">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-yellow-600 border-4 border-gray-900"></div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-yellow-400">Phase 2: ChatGPT Copy-Paste</h4>
                <p className="text-gray-300">"Write me a function that..." → Copy → Still hoping</p>
                <p className="text-sm text-gray-400 mt-2">Better than Google, but still manual</p>
              </div>
            </div>

            <div className="relative pl-20 pb-8">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-900"></div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-blue-400">Phase 3: Prompt Engineering</h4>
                <p className="text-gray-300">Learning to communicate effectively with AI</p>
                <p className="text-sm text-gray-400 mt-2">Context, examples, constraints matter</p>
              </div>
            </div>

            <div className="relative pl-20 pb-8">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900"></div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-lg text-purple-400">Phase 4: AI-Powered IDEs</h4>
                <p className="text-gray-300">Cursor, GitHub Copilot, Continue.dev</p>
                <p className="text-sm text-gray-400 mt-2">AI integrated into your workflow</p>
              </div>
            </div>

            <div className="relative pl-20">
              <div className="absolute left-5 w-6 h-6 rounded-full bg-green-600 border-4 border-gray-900 animate-pulse"></div>
              <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-4 rounded-lg border border-green-500">
                <h4 className="font-bold text-lg text-green-400">Phase 5: MCPs & Context-Aware AI</h4>
                <p className="text-gray-200">AI understands your entire codebase and tools</p>
                <p className="text-sm text-green-400 mt-2">← We are here</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "What are MCPs?",
      subtitle: "Model Context Protocol",
      icon: Boxes,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-500">
            <h3 className="text-2xl font-bold text-purple-300 mb-3">Model Context Protocol</h3>
            <p className="text-lg text-gray-200">
              A standardized way for AI to interact with your tools, databases, APIs, and codebases
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-bold text-blue-400 mb-3">🔌 Connect Everything</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Your Git repositories</li>
                <li>• Database connections</li>
                <li>• External APIs</li>
                <li>• File systems</li>
                <li>• Cloud services</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-bold text-green-400 mb-3">🧠 Full Context</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• AI reads your entire codebase</li>
                <li>• Understands project structure</li>
                <li>• Knows your dependencies</li>
                <li>• Aware of your conventions</li>
                <li>• Follows your patterns</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-400 mb-3">⚡ Take Actions</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Create/modify files</li>
                <li>• Run commands</li>
                <li>• Query databases</li>
                <li>• Make API calls</li>
                <li>• Execute tests</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-5 rounded-lg">
              <h4 className="font-bold text-pink-400 mb-3">🔄 Continuous Flow</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• No context switching</li>
                <li>• Real-time feedback</li>
                <li>• Iterative development</li>
                <li>• End-to-end solutions</li>
                <li>• Production-ready code</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Setting Up Cursor",
      subtitle: "Your AI-Powered IDE",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-900/30 border border-blue-500 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Why Cursor?</h3>
            <p className="text-gray-300">Built from the ground up for AI-powered development. Fork of VS Code with native AI integration.</p>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">1. Download & Install</h4>
              <p className="text-sm text-gray-300 mb-2">Visit cursor.sh and download</p>
              <code className="text-xs bg-gray-900 px-2 py-1 rounded text-green-400">cursor.sh</code>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">2. API Key Setup</h4>
              <p className="text-sm text-gray-300 mb-2">Settings → Cursor Settings → Models</p>
              <ul className="text-xs space-y-1 text-gray-400 mt-2">
                <li>• OpenAI API key (recommended: gpt-4)</li>
                <li>• Or use Anthropic Claude</li>
                <li>• Or use built-in Cursor models</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">3. Key Features</h4>
              <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                <div className="bg-gray-900 p-2 rounded">
                  <span className="text-purple-400 font-bold">Cmd/Ctrl + K:</span>
                  <p className="text-gray-400">Edit code with AI</p>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <span className="text-purple-400 font-bold">Cmd/Ctrl + L:</span>
                  <p className="text-gray-400">Chat with AI</p>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <span className="text-purple-400 font-bold">@-mentions:</span>
                  <p className="text-gray-400">Reference files/docs</p>
                </div>
                <div className="bg-gray-900 p-2 rounded">
                  <span className="text-purple-400 font-bold">Tab:</span>
                  <p className="text-gray-400">Accept suggestions</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-2">4. Enable MCPs</h4>
              <p className="text-sm text-gray-300 mb-2">Cursor Rules (.cursorrules file in root)</p>
              <code className="text-xs bg-gray-900 px-2 py-1 rounded block text-gray-400 mt-2">
                Add project-specific AI instructions
              </code>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "VS Code + AI Extensions",
      subtitle: "Alternative setup",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Essential Extensions</h3>
            
            <div className="space-y-3">
              <div className="bg-gray-900 p-3 rounded">
                <h4 className="font-bold text-green-400">GitHub Copilot</h4>
                <p className="text-sm text-gray-300 mt-1">$10/month - Industry standard</p>
                <p className="text-xs text-gray-500 mt-1">Inline suggestions + Copilot Chat</p>
              </div>

              <div className="bg-gray-900 p-3 rounded">
                <h4 className="font-bold text-purple-400">Continue.dev</h4>
                <p className="text-sm text-gray-300 mt-1">Free & Open Source</p>
                <p className="text-xs text-gray-500 mt-1">Similar to Cursor, bring your own LLM</p>
              </div>

              <div className="bg-gray-900 p-3 rounded">
                <h4 className="font-bold text-blue-400">Codeium</h4>
                <p className="text-sm text-gray-300 mt-1">Free alternative to Copilot</p>
                <p className="text-xs text-gray-500 mt-1">Decent for autocomplete</p>
              </div>

              <div className="bg-gray-900 p-3 rounded">
                <h4 className="font-bold text-yellow-400">Tabnine</h4>
                <p className="text-sm text-gray-300 mt-1">Privacy-focused option</p>
                <p className="text-xs text-gray-500 mt-1">Can run locally</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-2">Quick Setup:</h4>
            <ol className="text-sm space-y-2 text-gray-300">
              <li>1. Install VS Code</li>
              <li>2. Extensions → Search "Continue" or "GitHub Copilot"</li>
              <li>3. Sign in / Add API key</li>
              <li>4. Configure MCP servers in settings.json</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      title: "Prompt Engineering Basics",
      subtitle: "Communicating with AI effectively",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg">
              <h4 className="font-bold text-red-400 mb-3">❌ Bad Prompt</h4>
              <code className="text-xs bg-gray-900 p-2 rounded block text-gray-300">
                make it work
              </code>
            </div>
            
            <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-3">✓ Good Prompt</h4>
              <code className="text-xs bg-gray-900 p-2 rounded block text-gray-300">
                Refactor this function to handle edge cases: null inputs, empty arrays, and negative numbers. Add error handling and JSDoc comments.
              </code>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-3">The SPEC Framework:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">S</span>
                <span className="text-gray-300"><strong>Specific:</strong> What exactly do you want?</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">P</span>
                <span className="text-gray-300"><strong>Purpose:</strong> Why does it need to do this?</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">E</span>
                <span className="text-gray-300"><strong>Examples:</strong> Show input/output examples</span>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-400 font-bold">C</span>
                <span className="text-gray-300"><strong>Constraints:</strong> Tech stack, performance, style</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-400 mb-3">Pro Tips:</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Use @-mentions to reference files for context</li>
              <li>• Break complex tasks into smaller prompts</li>
              <li>• Ask AI to explain its approach first</li>
              <li>• Iterate: "Now add X" or "Refactor to use Y"</li>
              <li>• Be specific about error handling and edge cases</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Advanced: MCP Configuration",
      subtitle: "Connecting your tools",
      icon: Boxes,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-purple-400 mb-3">Popular MCP Servers:</h4>
            
            <div className="space-y-3 text-sm">
              <div className="bg-gray-900 p-3 rounded">
                <h5 className="text-green-400 font-bold">Filesystem MCP</h5>
                <p className="text-gray-400 text-xs mt-1">Read/write project files</p>
              </div>
              
              <div className="bg-gray-900 p-3 rounded">
                <h5 className="text-blue-400 font-bold">Git MCP</h5>
                <p className="text-gray-400 text-xs mt-1">Commit, branch, diff operations</p>
              </div>
              
              <div className="bg-gray-900 p-3 rounded">
                <h5 className="text-yellow-400 font-bold">PostgreSQL MCP</h5>
                <p className="text-gray-400 text-xs mt-1">Query and modify databases</p>
              </div>
              
              <div className="bg-gray-900 p-3 rounded">
                <h5 className="text-pink-400 font-bold">Brave Search MCP</h5>
                <p className="text-gray-400 text-xs mt-1">Web search capabilities</p>
              </div>

              <div className="bg-gray-900 p-3 rounded">
                <h5 className="text-orange-400 font-bold">GitHub MCP</h5>
                <p className="text-gray-400 text-xs mt-1">Issues, PRs, repo management</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-2">Setup Location:</h4>
            <p className="text-xs text-gray-300 mb-2">Cursor: Settings → Features → MCP</p>
            <p className="text-xs text-gray-300">VS Code + Continue: .continue/config.json</p>
          </div>

          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="font-bold text-green-400 mb-2 text-sm">Example config.json:</h4>
            <pre className="text-xs bg-gray-900 p-2 rounded overflow-x-auto text-gray-300">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", 
               "/path/to/project"]
    }
  }
}`}
            </pre>
          </div>
        </div>
      )
    },
    {
      title: "Workflow Examples",
      subtitle: "AI-powered development in action",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500">
            <h4 className="font-bold text-blue-400 mb-2">Example 1: Building a Feature</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <p><span className="text-green-400">1.</span> "Create a user authentication system with JWT"</p>
              <p><span className="text-green-400">2.</span> AI generates models, routes, middleware</p>
              <p><span className="text-green-400">3.</span> "Add password reset functionality"</p>
              <p><span className="text-green-400">4.</span> "Write tests for the auth flow"</p>
              <p><span className="text-green-400">5.</span> "Add rate limiting to prevent brute force"</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-500">
            <h4 className="font-bold text-purple-400 mb-2">Example 2: Debugging</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <p><span className="text-yellow-400">1.</span> Select buggy code</p>
              <p><span className="text-yellow-400">2.</span> Cmd+K: "Fix this bug and explain what was wrong"</p>
              <p><span className="text-yellow-400">3.</span> AI identifies issue, provides fix + explanation</p>
              <p><span className="text-yellow-400">4.</span> Learn and move forward</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-4 rounded-lg border border-green-500">
            <h4 className="font-bold text-green-400 mb-2">Example 3: Refactoring</h4>
            <div className="text-sm space-y-2 text-gray-300">
              <p><span className="text-blue-400">1.</span> "Refactor this to use TypeScript generics"</p>
              <p><span className="text-blue-400">2.</span> "Make it more functional and less imperative"</p>
              <p><span className="text-blue-400">3.</span> "Extract repeated logic into a helper function"</p>
              <p><span className="text-blue-400">4.</span> Code improves while you learn patterns</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Best Practices",
      subtitle: "How to work effectively with AI",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-900/30 border border-green-500 p-4 rounded-lg">
              <h4 className="font-bold text-green-400 mb-3">✓ Do This:</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Review all generated code</li>
                <li>• Ask AI to explain complex parts</li>
                <li>• Test thoroughly</li>
                <li>• Iterate and refine</li>
                <li>• Learn from the patterns</li>
                <li>• Use @-mentions for context</li>
              </ul>
            </div>

            <div className="bg-red-900/30 border border-red-500 p-4 rounded-lg">
              <h4 className="font-bold text-red-400 mb-3">✗ Avoid This:</h4>
              <ul className="text-sm space-y-2 text-gray-300">
                <li>• Blindly accepting code</li>
                <li>• No testing or validation</li>
                <li>• Vague prompts</li>
                <li>• Ignoring security concerns</li>
                <li>• Copy-paste without understanding</li>
                <li>• Not providing context</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-3">The Golden Rule:</h4>
            <p className="text-lg text-center text-gray-200 italic">
              "You're still the engineer. AI is your super-powered assistant."
            </p>
          </div>

          <div className="bg-purple-900/30 border border-purple-500 p-4 rounded-lg">
            <h4 className="font-bold text-purple-400 mb-3">Security Checklist:</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>✓ Always validate AI-generated security code</li>
              <li>✓ Never commit API keys or secrets</li>
              <li>✓ Review authentication/authorization logic</li>
              <li>✓ Test input validation and sanitization</li>
              <li>✓ Verify database queries for SQL injection</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "The Future is Here",
      subtitle: "What this means for you",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-lg border-2 border-purple-500">
            <h3 className="text-2xl font-bold text-center mb-4 text-purple-300">
              Software Engineering Has Evolved
            </h3>
            <p className="text-lg text-center text-gray-200">
              Focus on what matters: problem-solving, architecture, and impact
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="font-bold text-blue-400 mb-2">10x Faster</h4>
              <p className="text-sm text-gray-300">Build in hours, not days</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold text-green-400 mb-2">Better Quality</h4>
              <p className="text-sm text-gray-300">Consistent, tested, documented</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-4xl mb-2">📚</div>
              <h4 className="font-bold text-purple-400 mb-2">Always Learning</h4>
              <p className="text-sm text-gray-300">Understand as you build</p>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500 p-6 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-3 text-xl">What You Should Do Today:</h4>
            <ol className="space-y-2 text-gray-300">
              <li>1. Install Cursor or set up Continue.dev in VS Code</li>
              <li>2. Configure MCPs for your most-used tools</li>
              <li>3. Start with a small task and practice prompt engineering</li>
              <li>4. Review and learn from the generated code</li>
              <li>5. Gradually tackle bigger challenges</li>
            </ol>
          </div>

          <div className="text-center text-2xl text-gray-300 mt-8 italic">
            "The future belongs to engineers who can think systematically and communicate effectively with AI"
          </div>
        </div>
      )
    },
    {
      title: "Resources & Next Steps",
      subtitle: "Continue your journey",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-blue-400 mb-3">Tools & Platforms:</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-green-400 font-bold">cursor.sh</p>
                <p className="text-gray-400 text-xs">AI-first IDE</p>
              </div>
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-purple-400 font-bold">continue.dev</p>
                <p className="text-gray-400 text-xs">Open source alternative</p>
              </div>
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-blue-400 font-bold">github.com/copilot</p>
                <p className="text-gray-400 text-xs">GitHub's AI assistant</p>
              </div>
              <div className="bg-gray-900 p-3 rounded">
                <p className="text-yellow-400 font-bold">modelcontextprotocol.io</p>
                <p className="text-gray-400 text-xs">MCP documentation</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-green-400 mb-3">Learning Resources:</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Anthropic Prompt Engineering Guide</li>
              <li>• OpenAI Cookbook</li>
              <li>• Cursor documentation and tutorials</li>
              <li>• r/cursor and r/ClaudeAI communities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-6 rounded-lg border border-green-500">
            <h3 className="text-2xl font-bold text-center mb-3 text-green-400">
              Start Building Today
            </h3>
            <p className="text-center text-gray-200">
              The tools are ready. The approach is proven. The future is systematic.
            </p>
            <p className="text-center text-blue-400 mt-4 text-lg font-semibold">
              Welcome to modern software engineering.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 mb-6 border border-gray-700">
          <div className="flex items-center gap-4 mb-4">
            <CurrentIcon className="w-12 h-12 text-blue-400" />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {slides[currentSlide].title}
              </h1>
              <p className="text-blue-400 text-lg">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 mb-6 border border-gray-700 min-h-[500px]">
          {slides[currentSlide].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between bg-gray-800/50 backdrop-blur rounded-lg p-4 border border-gray-700">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide counter */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default Presentation;