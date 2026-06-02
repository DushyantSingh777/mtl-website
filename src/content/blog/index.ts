export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "why-egocentric-data-is-the-missing-layer-for-robotics",
    title: "Why Egocentric Data Is the Missing Layer for Robotics",
    date: "2025-05-15",
    author: "MyTron Labs",
    excerpt: "LLMs were unlocked by internet-scale text. General-purpose robotics will be unlocked by something different — first-person, physical-world data.",
    tags: ["Robotics", "Physical AI", "Data"],
    content: `
The breakthroughs that gave us GPT-4, Gemini, and Claude all share a common ingredient: massive, structured, high-quality training data scraped from the internet. Text and images, at scale.

But robots don't live on the internet. They live in kitchens, warehouses, hospitals, and construction sites. The data they need — long-horizon, first-person, multi-sensory, task-annotated — doesn't exist in any searchable corpus. It has to be *captured*.

## The Egocentric Advantage

Egocentric (first-person) video is uniquely suited for training embodied AI. When a model learns from a third-person view, it sees the world as a bystander. When it learns from an egocentric view, it learns how a physical agent — human or robot — actually interacts with the world: where hands go, how objects are grasped, how tasks are sequenced over time.

This isn't just a framing difference. It's the difference between understanding motion abstractly and understanding *physical task execution*.

## What's Been Missing

Until now, the egocentric data pipeline for robotics research has been fragmented:

- Small academic datasets, not built for scale
- No standardized annotation schema for long-horizon tasks
- No infrastructure for synchronized multi-modal capture (video, audio, depth, IMU)
- No secure, compliant delivery pipeline for enterprise AI teams

This is the gap MyTron Labs was built to close.

## What We're Building

Our data infrastructure captures, processes, annotates, and delivers petabyte-scale egocentric datasets built specifically for Physical AI research — with structured task labels, multi-sensor alignment, and enterprise-grade security.

The ChatGPT moment for robotics is near. The data layer is what gets us there.
    `.trim(),
  },
  {
    slug: "what-makes-a-good-robotics-dataset",
    title: "What Makes a Good Robotics Dataset?",
    date: "2025-04-28",
    author: "MyTron Labs",
    excerpt: "Not all training data is created equal. Here's what separates dataset noise from dataset signal for embodied AI.",
    tags: ["Data Quality", "Annotation", "Research"],
    content: `
Building a robotics model is only as good as the data you train it on. But in the Physical AI space, most teams are discovering something uncomfortable: data quantity alone isn't enough. The structure, annotation quality, and modality alignment matter just as much.

## Coverage Over Quantity

A million hours of unstructured video is less valuable than ten thousand hours of well-annotated, task-segmented, multi-sensor recordings. Coverage across environments, lighting conditions, object types, and human variation matters more than raw volume.

The best datasets are deliberately designed — not scraped.

## Long-Horizon Task Structure

Most current video datasets capture clips of a few seconds. Real physical tasks — cooking a meal, assembling a product, navigating a facility — unfold over minutes or hours, with hierarchical sub-tasks, intent shifts, and error recovery.

Models trained only on short clips fail to generalize to long-horizon planning. Good robotics datasets capture complete task sequences, segmented with hierarchical labels.

## Multi-Modal Alignment

A robot doesn't just see — it hears, measures depth, senses acceleration, and tracks position. Training data should reflect this. Synchronized video, spatial audio, depth, LiDAR, and IMU data — aligned in time — gives models the full sensory context they need.

## Annotation Depth

Surface-level labels aren't enough. Useful annotations include:

- Hand-object contact points and grasp types
- Intent and sub-goal segmentation
- Scene graph relationships
- Failure modes and recovery actions

This is what separates a research-ready dataset from a raw recording.
    `.trim(),
  },
  {
    slug: "the-chatgpt-moment-for-robotics",
    title: "The ChatGPT Moment for Robotics Is Near",
    date: "2025-03-10",
    author: "MyTron Labs",
    excerpt: "We are closer than most people think to a general-purpose robotics breakthrough — and the bottleneck is data infrastructure, not model architecture.",
    tags: ["Physical AI", "Industry", "Robotics"],
    content: `
In late 2022, something shifted. A language model crossed a threshold — not just in capability, but in usability — and the world noticed. ChatGPT reached 100 million users in two months. The underlying reason wasn't a new architecture breakthrough. It was years of investment in data quality, RLHF pipelines, and infrastructure that finally compounded.

Robotics is approaching a similar inflection point.

## The Ingredients Are Converging

Three things are converging right now:

**Foundation models are getting physical.** RT-2, π0, and similar models show that vision-language architectures can generalize to physical manipulation tasks — but only when trained on the right data.

**Hardware costs are collapsing.** Humanoid robotics platforms are reaching price points where enterprise deployment is realistic within years, not decades.

**The data bottleneck is becoming visible.** Every serious robotics AI team we talk to names the same problem: they can't get enough high-quality, annotated, egocentric training data. The model is ready. The data infrastructure isn't.

## What Changes When the Moment Hits

When a general-purpose robotics model crosses the ChatGPT threshold — performing reliably across diverse real-world tasks without task-specific fine-tuning — the demand for training data won't grow linearly. It will spike.

The teams that will lead that transition are the ones building the data infrastructure now, before the demand hits.

That's why we started MyTron Labs.
    `.trim(),
  },
  {
    slug: "what-its-actually-like-to-label-video-data-all-day",
    title: "What It's Actually Like to Label Video Data All Day",
    date: "2026-06-02",
    author: "Tilok Doley",
    excerpt: "A first-person account of what precision video annotation looks like at scale — and why it matters for Physical AI.",
    tags: ["Annotation", "Data", "Behind the Scenes"],
    content: `
Most people building AI models never meet the people who label their training data. This is one account of what that work actually looks like.

## The Setup

Every morning starts with a queue. Clips range from 30 seconds to 20 minutes — first-person footage of hands manipulating objects, navigating spaces, completing tasks. The job is to understand exactly what's happening and document it in a structured way.

Not just "person picks up screwdriver." But: which hand, what grasp type, what object state before and after, what was the intent, did anything go wrong, how was it corrected.

## Why Precision Matters

A label that's 80% right is often 100% useless for training a manipulation policy. If the grasp type is wrong, the model learns the wrong affordance. If the intent is mislabeled, the model can't learn goal-directed behavior.

The hardest part isn't identifying what happened. It's identifying *why* — inferring intent from motion, distinguishing a planned pause from an error, understanding what the person was trying to achieve when things went sideways.

## What We've Learned

The annotators who do this work develop genuine expertise in human motion and task structure. They notice things — patterns in how people recover from mistakes, how grasp strategies vary by object weight, how task context changes hand positioning.

That expertise is exactly what makes the data valuable. It's not just labeling. It's structured observation of how humans interact with the physical world.

That's the data Physical AI needs to learn from.
    `.trim(),
  },
];

export function getAllPosts(): Omit<Post, "content">[] {
  return posts
    .map(({ content: _, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}
