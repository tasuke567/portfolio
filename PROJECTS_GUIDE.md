# Projects Guide

This guide explains how to add and manage projects in your portfolio.

## Where Projects Are Defined

Projects are stored in: `lib/projects.ts`

## Project Structure

Each project object has these properties:

```typescript
{
  id: string;           // Unique identifier (used internally)
  title: string;        // Display title
  description: string;  // Short 1-line description
  longDescription: string;  // Paragraph-length description
  technologies: string[];   // Array of tech used
  githubUrl: string;    // Link to GitHub repo
  highlights: string[]; // Array of 4-5 key features/achievements
}
```

## Example: Adding a New Project

### Before: Current state
```typescript
export const projects: Project[] = [
  // ... existing projects
];
```

### After: Adding "My Awesome App"
```typescript
export const projects: Project[] = [
  // ... existing projects
  {
    id: "my-awesome-app",
    title: "My Awesome App",
    description: "A powerful app that does amazing things with real-time updates",
    longDescription:
      "A full-stack application featuring real-time data synchronization, complex state management, and modern UI patterns. Built to handle 1000+ concurrent users.",
    technologies: ["Next.js", "WebSocket", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/tasuke567/my-awesome-app",
    highlights: [
      "Real-time WebSocket synchronization",
      "Optimized database queries with indexing",
      "Mobile-responsive design",
      "Type-safe API with GraphQL",
    ],
  },
];
```

## Tips for Writing Good Projects

### Titles
- ✅ "Friend Recommendation Engine with Neo4j Graph Database"
- ❌ "Project 1"

### Descriptions (1 line)
- ✅ "Graph-based recommendation engine with Neo4j and GraphQL"
- ❌ "This is a cool project I made"

### Long Descriptions (1-2 sentences)
- ✅ "Proof of concept for friend recommendations using Neo4j graph database and GraphQL API. Demonstrates graph query patterns and real-time recommendation logic."
- ❌ "A project that does recommendations"

### Technologies
List 4-6 main technologies in priority order:
- ✅ ["React", "Node.js", "MongoDB", "Docker", "AWS"]
- ❌ ["react", "nodedotjs", "mongo db", "All the tools"]

### Highlights
List 4-5 specific achievements/features:
- ✅ "Implemented auto-reconnect logic with exponential backoff"
- ❌ "Cool feature"

### GitHub URLs
Always use your actual GitHub repo:
```
https://github.com/tasuke567/repository-name
```

## Making Changes

1. Open `lib/projects.ts`
2. Add/edit a project object
3. Save the file
4. Rebuild: `npm run build`
5. Test locally: `npm run dev`
6. Deploy: Git push to trigger automatic deployment

## Project Order

Projects appear on the page in the order they're listed in the array. Most recent/impressive should be first.

## Removing Projects

Simply remove the object from the array:

```typescript
export const projects: Project[] = [
  // Remove this section entirely:
  // {
  //   id: "old-project",
  //   ...
  // }
];
```

## Common Mistakes to Avoid

1. ❌ Forgetting to add commas between objects
2. ❌ Using wrong GitHub URLs
3. ❌ Leaving placeholder text like "TODO" or "EDIT THIS"
4. ❌ Making descriptions too long or technical

## Questions?

If you need to add features like:
- Contact form
- Blog section
- Analytics
- Comments on projects

Let me know and I can help extend the portfolio!
