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
  {
  slug: "the-factory-floor-as-a-training-ground-for-physical-ai",
  title: "The Factory Floor as a Training Ground for Physical AI",
  date: "2026-05-04",
  author: "Yashwardhan Gupta",
  excerpt: "The factory floor is becoming one of the most valuable sources of training data for physical AI — and the skilled workers on it are the unsung teachers of the next generation of robots.",
  tags: ["Physical AI", "Manufacturing", "Robotics", "Training Data"],
  content: `
For decades, artificial intelligence has been trained primarily in digital environments. Large language models learn from text, computer vision systems learn from images, and recommendation engines learn from user behavior online. But as AI moves beyond screens and into the physical world, a new challenge has emerged: teaching machines how to interact with reality.
Unlike digital AI, physical AI must understand motion, objects, environments, and the countless variables that influence real-world tasks. A robot assembling components on a production line cannot rely solely on internet-scale datasets or simulated environments. It needs exposure to authentic human behavior and real-world conditions. Increasingly, the factory floor is becoming the ideal laboratory for this next generation of AI.
Modern manufacturing environments generate an extraordinary amount of valuable information. Every day, skilled workers perform complex tasks that require precision, adaptability, and decision-making. They navigate changing conditions, recover from mistakes, and make subtle adjustments that are rarely documented in manuals or standard operating procedures. These actions represent a rich source of physical intelligence that machines can learn from.
Unlike controlled research labs, factories provide real-world complexity at scale. Components arrive with slight variations, tools experience wear, lighting conditions change, and unexpected situations occur regularly. Human workers continuously adapt to these challenges, often without consciously thinking about their decisions. Capturing these interactions creates training data that reflects how work is actually performed rather than how it is ideally described.
The rise of first-person, or egocentric, data collection has made it possible to record these experiences in unprecedented detail. By capturing tasks from the worker's perspective, organizations can observe exactly how tools are handled, how components are positioned, and how physical tasks are executed. When combined with additional sensor streams such as spatial audio, depth information, and motion tracking, these recordings provide a comprehensive view of human activity.
However, collecting data is only the first step. Raw video footage alone offers limited value to AI systems. To transform observations into usable training data, each action must be structured and annotated. Object interactions, task sequences, movement patterns, and recovery actions all need to be identified and labeled. This process converts real-world behavior into machine-readable intelligence that can be used to train physical AI models.
Factories are uniquely suited for this process because they contain a vast range of repeatable yet variable activities. Assembly, inspection, material handling, packaging, and maintenance tasks all generate valuable examples of human problem-solving and physical execution. Over time, these examples can form the foundation of large-scale datasets that teach machines not only what to do, but how to do it effectively in unpredictable environments.
As the demand for autonomous systems and intelligent robots continues to grow, access to high-quality real-world data will become a defining advantage. The companies that can successfully capture, structure, and learn from physical work will help shape the future of robotics.
The factory floor is no longer just a place where products are built. It is becoming one of the world's most valuable sources of training data—a living laboratory where human expertise is transformed into the intelligence that will power the next generation of physical AI.
  `.trim(),
 },
 {
  slug: "what-is-embodied-ai-and-why-it-matters",
  title: "Embodied AI: Teaching Machines to Act in the Physical World",
  date: "2026-05-020",
  author: "Yashwardhan Gupta",
  excerpt: "Embodied AI represents a fundamental shift — intelligence that isn't just computed, but experienced through real physical interaction with the world.",
  tags: ["Embodied AI", "Physical AI", "Robotics", "Machine Learning"],
  content: `
Artificial intelligence has made significant progress in areas such as understanding language, generating images, and analyzing large datasets. Modern systems can summarize documents, create visuals, and identify patterns across vast amounts of information. However, most of these capabilities remain limited to digital environments.
When AI systems move into the physical world—where factors like gravity, friction, and uncertainty matter—they encounter a very different challenge. This is where Embodied AI becomes essential.
Embodied AI refers to systems that can understand, think, and act within a physical environment. Unlike traditional AI models that work only with static inputs such as text or images, embodied systems continuously interact with the real world. They must understand spatial relationships, manipulate objects, respond to feedback, and adapt to changing conditions over time. In short, embodied AI gives machines a “body” and enables them to use it effectively.

## Why Embodiment Is Necessary

A robot working in a factory or household cannot rely on reasoning alone. It must understand how to pick up objects, how much force to apply, and how to adjust when something does not go as expected. These are not purely computational problems—they are physical ones.
For example, picking up a metal part is not just about recognizing its shape. The system must estimate weight, surface texture, balance, and orientation. If the grip is slightly misaligned, the task may fail. Humans perform these actions easily because their intelligence is shaped by continuous interaction with the physical world. Embodied AI aims to replicate this capability in machines.

## Perception, Decision, and Action

Embodied AI systems typically operate in a continuous loop of perception, decision-making, and action.
Perception involves understanding the environment using sensors such as cameras, depth sensors, or motion trackers. This allows the system to interpret what is happening in its surroundings.
Decision-making involves selecting the next action based on goals, context, and environmental conditions. This step often relies on machine learning models that evaluate possible outcomes.
Action translates those decisions into physical movement through robotic control systems. This may involve moving a robotic arm, navigating a space, or manipulating an object.
Unlike traditional AI systems, these components are tightly connected. A small error in perception can lead to incorrect actions, while slight inaccuracies in control can cause task failure. This makes embodied systems highly sensitive to real-world conditions.

## The Importance of Real-World Data

At the core of embodied AI is data—but not the kind used for language or vision models. Embodied systems require data that captures how actions are performed, not just their outcomes.
This includes video recordings of human activity, sensor data such as motion and force readings, and detailed sequences of task execution. It also includes edge cases—situations where things go wrong, objects slip, or conditions change unexpectedly. These scenarios are critical for building systems that can operate reliably in unpredictable environments.
However, raw video alone is not enough. Without structure, it is simply a stream of pixels. To become useful, it must be transformed into annotated datasets that define actions, object interactions, and relationships between events over time.

## Learning From Human Demonstration

One of the most promising approaches to training embodied AI is learning from human demonstration. By observing skilled workers performing tasks, AI systems can learn patterns of movement, timing, and decision-making.
However, observation alone is not sufficient. It must be paired with structured annotation. Annotation converts human behavior into machine-readable data by labeling actions, identifying objects, marking key moments, and tracking movement over time.
This process allows continuous real-world activity to be transformed into structured training data for AI systems.

## The Road Ahead

Despite rapid progress, embodied AI still faces several challenges. These include the difficulty of collecting large-scale real-world datasets, the complexity of transferring knowledge from simulation to reality, and the need for precise, high-quality annotations. Safety and reliability also remain critical concerns when deploying systems in human environments.
As these challenges are addressed, embodied AI is expected to play a major role across industries such as manufacturing, logistics, healthcare, and domestic robotics. The ability to perceive and act in the physical world will define the next generation of intelligent systems.

## Conclusion

Embodied AI represents a fundamental shift in how we think about intelligence. It is no longer limited to words or images—it extends into motion, interaction, and experience.
In this new paradigm, intelligence is not only computed. It is embodied in the physical world, where machines learn to understand and act through real experience.
  `.trim(),
 },
 {
  slug: "can-an-off-the-shelf-vlm-read-first-person-video-we-tried",
  title: "Can an Off-the-Shelf VLM Read First-Person Video? We Tried",
  date: "2026-06-04",
  author: "Yash Shah",
  excerpt: "We pointed Qwen2.5-VL at egocentric worker footage to see how far an off-the-shelf VLM gets you before you need anything custom. Here's the honest answer.",
  tags: ["Vision-Language Models", "Egocentric Video", "Physical AI"],
  content: `
We keep coming back to the same idea here: egocentric data is the missing layer for robotics. But raw first-person video on its own doesn't really do much for you. A head-mounted camera following a worker through a shift gives you footage that's long, messy, and almost completely unlabeled. The value was never in the pixels - it's in the structure you can pull out of them. What task is happening, when it starts and stops, which objects are involved, where the hands go.
So we asked a pretty practical question. How far can an off-the-shelf vision-language model get you on that problem before you have to reach for anything custom? We pointed Qwen2.5-VL at a stack of egocentric worker footage and just watched what it did. Here's what we found.
Why this model and not a pile of others? Most video pipelines are a bunch of narrow models duct-taped together - one for detection, one for tracking, one for action classification - each trained on a fixed set of labels. The second the task changes, the whole thing falls over. Qwen2.5-VL folds a lot of that into one model, and the things it's good at line up almost suspiciously well with what egocentric analysis actually needs. It can reason over footage longer than an hour, which matters when one task takes minutes and a whole shift takes hours. It can tell you when something happens, not just that it happened. It grounds objects with boxes and points, and - this is the part I love - it emits clean JSON instead of a paragraph of prose, so the model's reading of a video becomes a data structure you can actually use. It even adapts its frame rate, so you can run cheap over dead time and dense over the moments that matter.
The pipeline we landed on was deliberately boring, which is usually a good sign. Pull the stream in and sample frames faster where there's motion, slower over the nothing. Ask the model for a task timeline as JSON - task name, start, end, objects in view - instead of a description. Have it draw boxes around the items the worker touches. Break the continuous shift into ordered steps that something downstream can use. Then hold every output against real labels, because of course you do.
And honestly? For a first pass it's good. The model is strongest exactly where you'd expect a big VLM to be strong - naming the high-level activity, describing the scene, giving you a serviceable guess at when a task changed. There were moments it captioned something correctly that genuinely surprised me.
But here's the part nobody puts in the demo, and it's the part that actually defines the work. Fine motor actions blur together - it knows a part is being assembled, it can't reliably tell you which sub-step. Occlusion is the egocentric tax: the worker's own hands hide the very thing you care about, and the model fills the gap with a confident guess. Temporal boundaries drift - directionally right, but late by enough seconds to wreck a cycle-time number. And over long sequences it starts hallucinating steps, inventing a plausible action that never actually happened.
That gap - between "the model says" and "this is actually true" - is the whole job. The occluded hand, the missed sub-step, the boundary that's three seconds late. A VLM hands you a fast, cheap, flexible first draft of structured signal, and that genuinely changes the economics of getting started. But a first draft isn't ground truth, and the distance between the two is exactly the layer you have to close before this footage can train anything you'd trust in the physical world.
That's the work. It's the layer MyTron is built to close 🤖
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
