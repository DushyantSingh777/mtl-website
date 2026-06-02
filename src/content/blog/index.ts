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
Nobody talks about the boring parts of building an AI company. Everyone wants to hear about models and demos. But for the last several months, a big chunk of my time has just been making sure videos get labeled correctly.

At MytronLabs, we work with egocentric footage - basically, video shot from a first-person perspective. Our job is to understand what's happening in that footage: what action is being performed, what object is involved, which hand is doing it. Sounds simple right, the hard part is, it is not that simple 😀.

You quickly realize that raw video is basically useless without structure around it. So we built tooling to run automated labeling across our video corpus, review the output, catch errors, and feed corrections back in. A lot of the work is quality control - watching clips, comparing labels, spotting where the system got confused and figuring out why.

We also have to deal with privacy for compliance. People appear in egocentric footage unexpectedly, so we built a pipeline to detect and anonymize faces before anything leaves our servers. Figuring out which model works best for us, fine tuning them to get better results.

This is the foundation - if the labels are wrong, everything downstream is wrong. So we take it seriously. By the way I enjoy solving every piece of problem I encounter here 🤩.

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
